'use client';
// @ts-ignore
import type { Value as HeatmapValue } from 'react-calendar-heatmap';
// declare module 'react-calendar-heatmap';

// Add this at the top of the file or in a .d.ts file if needed
// declare module 'react-calendar-heatmap' {
//   const CalendarHeatmap: any;
//   export default CalendarHeatmap;
// }

import Link from 'next/link'
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Use 'any' for the dynamic import to avoid type errors
const CalendarHeatmap: any = dynamic(() => import('react-calendar-heatmap'), { ssr: false });

type ActivityEntry = {
  date: string;
  leetcode: number;
  cses: number;
  codeforces: number;
};

type Totals = {
  leetcode: number;
  cses: number;
  codeforces: number;
};

type Streaks = {
  currentStreak: number;
  longestStreak: number;
};

// Helper function to get a date X months ago
function shiftDate(date: Date, numMonths: number) {
  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() + numMonths);
  return newDate;
}

function getStreaks(data: ActivityEntry[]): Streaks {
  let currentStreak = 0, longestStreak = 0, streak = 0;
  let prevDate: Date | null = null;
  data.forEach((d: ActivityEntry) => {
    const date = new Date(d.date);
    if (
      prevDate &&
      (date.getTime() - prevDate.getTime()) / (1000 * 60 * 60 * 24) === 1
    ) {
      streak++;
    } else {
      streak = d.leetcode + d.cses + d.codeforces > 0 ? 1 : 0;
    }
    if (d.leetcode + d.cses + d.codeforces > 0) {
      if (streak > longestStreak) longestStreak = streak;
      currentStreak = streak;
    } else {
      currentStreak = 0;
    }
    prevDate = date;
  });
  return { currentStreak, longestStreak };
}

export default function Home() {
  const [activity, setActivity] = useState<ActivityEntry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [totals, setTotals] = useState<Totals>({ leetcode: 0, cses: 0, codeforces: 0 });
  const [streaks, setStreaks] = useState<Streaks>({ currentStreak: 0, longestStreak: 0 });
  const [lastUpdated, setLastUpdated] = useState<string>('');

  useEffect(() => {
    fetch('/problem-solving-activity.json')
      .then((res) => res.json())
      .then((data: ActivityEntry[]) => {
        const sortedData = data.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        setActivity(sortedData);
        setTotals({
          leetcode: sortedData.reduce((a, b) => a + b.leetcode, 0),
          cses: sortedData.reduce((a, b) => a + b.cses, 0),
          codeforces: sortedData.reduce((a, b) => a + b.codeforces, 0),
        });
        setStreaks(getStreaks(sortedData));
        setLastUpdated(sortedData.length ? sortedData[sortedData.length - 1].date : '');
        setLoading(false);
      });
  }, []);

  // Prepare heatmap values
  const today = new Date();
  const startDate = shiftDate(today, -12); // Show last 12 months

  const heatmapValues: { date: string; count: number }[] = activity
    .filter(d => new Date(d.date) >= startDate)
    .map((d) => ({
    date: d.date,
    count: d.leetcode + d.cses + d.codeforces,
  }));

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-slate-800">
      {/* Header */}
      <header className="w-full py-8 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-sm text-gray-600 dark:text-gray-300">
            By <span className="font-semibold">Himanshu</span>
          </div>
          <div className="flex gap-4">
            <Link 
              href="https://github.com/himmannshu"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/himanshu00/"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        {/* Hero Section */}
        <section className="text-center py-16">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Himanshu's Portfolio
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Welcome to my personal website where I share my weekly learnings and professional experience.
          </p>
        </section>

        {/* Navigation Cards (Moved Up) */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link 
              href="/weekly-logs"
              className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl">
                  📚
                </div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Weekly Learning Logs
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Check out what I learned each week - my journey of continuous learning and growth.
              </p>
              <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-2 transition-transform">
                Explore logs
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>

            <Link
              href="/resume"
              className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center text-white text-2xl">
                  💼
                </div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Resume
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Learn about my professional experience, projects, and technical skills.
              </p>
              <div className="flex items-center text-green-600 dark:text-green-400 font-semibold group-hover:translate-x-2 transition-transform">
                View resume
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          </div>
        </section>

        {/* Problem Solving Activity Section (Blended) */}
        <section className="mb-20 py-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-3 flex items-center justify-center gap-3">
              <span className="text-4xl">🧩</span>
              Problem Solving Activity
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">Track my daily coding progress across platforms</p>
          </div>
          
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="text-gray-500 mt-4">Loading activity...</p>
            </div>
          ) : (
            <div className="space-y-10">
              {/* Stats Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
                <StatCard 
                  label="LeetCode" 
                  value={totals.leetcode} 
                  color="bg-gradient-to-br from-yellow-400 to-orange-500 text-white" 
                  icon="💛" 
                />
                <StatCard 
                  label="CSES" 
                  value={totals.cses} 
                  color="bg-gradient-to-br from-green-400 to-emerald-500 text-white" 
                  icon="💚" 
                />
                <StatCard 
                  label="Codeforces" 
                  value={totals.codeforces} 
                  color="bg-gradient-to-br from-blue-400 to-indigo-500 text-white" 
                  icon="💙" 
                />
                <StatCard 
                  label="Current Streak" 
                  value={streaks.currentStreak} 
                  color="bg-gradient-to-br from-pink-400 to-rose-500 text-white" 
                  icon="🔥" 
                />
                <StatCard 
                  label="Longest Streak" 
                  value={streaks.longestStreak} 
                  color="bg-gradient-to-br from-purple-400 to-violet-500 text-white" 
                  icon="🏆" 
                />
              </div>

              {/* Heatmap - GitHub Style */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
                  Contribution Heatmap (Last Year)
                </h3>
                <div className="overflow-x-auto pb-4">
                  <CalendarHeatmap
                    startDate={startDate} // Dynamically set to 1 year ago
                    endDate={today}     // Dynamically set to today
                    values={heatmapValues}
                    showMonthLabels={true}
                    showWeekdayLabels={true}
                    monthLabelAttributes={{ style: { fontSize: '10px', fill: '#9ca3af' } }} // Tailwind gray-400
                    weekdayLabelAttributes={{ style: { fontSize: '10px', fill: '#9ca3af' } }}
                    classForValue={(value: { count: number; date: string } | null) => {
                      if (!value || value.count === 0) return 'color-github-0';
                      if (value.count <= 1) return 'color-github-1';
                      if (value.count <= 2) return 'color-github-2';
                      if (value.count <= 3) return 'color-github-3';
                      return 'color-github-4';
                    }}
                    gutterSize={2}
                    titleForValue={(value: { date: string; count: number} | null) => value ? `${value.count} contributions on ${new Date(value.date).toLocaleDateString()}` : 'No contributions'}
                    tooltipDataAttrs={(value: { date: string; count: number}) => ({ 'data-tip': `${value.count} contributions on ${new Date(value.date).toLocaleDateString()}` })}
                  />
                </div>
                <div className="flex justify-end items-center mt-4 pr-2">
                    <span className="text-xs text-gray-500 dark:text-gray-400 mr-2">Less</span>
                    <svg width="10" height="10" className="mr-1"><rect width="10" height="10" className="color-github-1" rx="2" ry="2"></rect></svg>
                    <svg width="10" height="10" className="mr-1"><rect width="10" height="10" className="color-github-2" rx="2" ry="2"></rect></svg>
                    <svg width="10" height="10" className="mr-1"><rect width="10" height="10" className="color-github-3" rx="2" ry="2"></rect></svg>
                    <svg width="10" height="10" className="mr-2"><rect width="10" height="10" className="color-github-4" rx="2" ry="2"></rect></svg>
                    <span className="text-xs text-gray-500 dark:text-gray-400">More</span>
                </div>

                <style jsx global>{`
                  .react-calendar-heatmap .color-github-0 { fill: #ebedf0; } // GitHub's empty color (light gray)
                  .react-calendar-heatmap .color-github-1 { fill: #9be9a8; } // GitHub's lightest green
                  .react-calendar-heatmap .color-github-2 { fill: #40c463; } 
                  .react-calendar-heatmap .color-github-3 { fill: #30a14e; } 
                  .react-calendar-heatmap .color-github-4 { fill: #216e39; } // GitHub's darkest green
                  .react-calendar-heatmap text {
                    font-size: 10px;
                    fill: #6b7280; /* Tailwind gray-500 */
                  }
                  .react-calendar-heatmap rect:hover {
                    stroke: #555;
                    stroke-width: 1px;
                  }
                `}</style>
                <div className="text-center mt-6">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Last updated: {lastUpdated}
                  </p>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

type StatCardProps = {
  label: string;
  value: number;
  color: string;
  icon: string;
};

function StatCard({ label, value, color, icon }: StatCardProps) {
  return (
    <div className={`${color} rounded-2xl p-4 text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}>
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-sm font-semibold opacity-90 mb-1">{label}</div>
      <div className="text-3xl font-bold">{value}</div>
    </div>
  );
}
