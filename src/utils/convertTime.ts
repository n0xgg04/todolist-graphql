export function convertToVietnamTimeFormatted(utcDateString: string): string {
  const utcDate = new Date(utcDateString);
  const options: Intl.DateTimeFormatOptions = {
    timeZone: "Asia/Ho_Chi_Minh",
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };

  return utcDate.toLocaleString("vi", options);
}
