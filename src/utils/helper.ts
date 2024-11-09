/**
 * 
 * @param date 
 * @returns string eg: 'Mar 24, 2024'
 */
export function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: '2-digit' };
  return date.toLocaleDateString('en-US', options);
}