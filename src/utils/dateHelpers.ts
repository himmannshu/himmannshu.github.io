/**
 * Utility functions for working with dates in weekly logs
 */

/**
 * Generate a week identifier in the format YYYY-week-WW
 * @param date Date object to get year and week number from
 * @returns String identifier like "2023-week-52"
 */
export function getWeekId(date: Date = new Date()): string {
  const year = date.getFullYear();
  const weekNumber = getWeekNumber(date);
  return `${year}-week-${weekNumber}`;
}

/**
 * Get the week number for a date
 * @param date Date to get week number from
 * @returns Week number (1-53)
 */
export function getWeekNumber(date: Date): number {
  // Copy date to avoid modifying the original
  const target = new Date(date.valueOf());
  // ISO week starts on Monday
  const dayNumber = (date.getDay() + 6) % 7;
  // Set target to the first day of the week
  target.setDate(target.getDate() - dayNumber + 3);
  // Get first Thursday of the year
  const firstThursday = new Date(target.getFullYear(), 0, 4);
  // Calculate the correct Thursday for this week
  firstThursday.setDate(firstThursday.getDate() + (target.getDay() === 0 ? -3 : 4 - target.getDay()));
  // Check if target date is after first Thursday
  const diff = (target.getTime() - firstThursday.getTime()) / 86400000;
  // Return 1 + number of weeks
  return 1 + Math.round(diff / 7);
}

/**
 * Get the date range for a week (Monday to Sunday)
 * @param year Year
 * @param weekNumber Week number
 * @returns Formatted date range string like "January 1-7, 2023"
 */
export function getWeekDateRange(year: number, weekNumber: number): string {
  // Get first day of the year
  const firstDayOfYear = new Date(year, 0, 1);
  // Calculate days to first day of week (Monday)
  const daysToFirstMonday = 1 - (firstDayOfYear.getDay() || 7) + 7 * (weekNumber - 1);
  
  // Create start date (Monday)
  const startDate = new Date(year, 0, 1 + daysToFirstMonday);
  // Create end date (Sunday)
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + 6);
  
  // Format the date range
  const startMonth = startDate.toLocaleString('default', { month: 'long' });
  const endMonth = endDate.toLocaleString('default', { month: 'long' });
  
  if (startMonth === endMonth) {
    return `${startMonth} ${startDate.getDate()}-${endDate.getDate()}, ${year}`;
  } else {
    return `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}, ${year}`;
  }
}

/**
 * Get the current week title (e.g., "Week 15, 2023")
 */
export function getCurrentWeekTitle(): string {
  const now = new Date();
  return `Week ${getWeekNumber(now)}, ${now.getFullYear()}`;
}

/**
 * Parse a week ID like "2023-week-52" into year and week number
 */
export function parseWeekId(weekId: string): { year: number; weekNumber: number } {
  const match = weekId.match(/^(\d{4})-week-(\d{1,2})$/);
  if (!match) {
    throw new Error(`Invalid week ID format: ${weekId}`);
  }
  return {
    year: parseInt(match[1], 10),
    weekNumber: parseInt(match[2], 10)
  };
} 