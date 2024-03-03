export default class DateHelper {
  public static formatDatetime(d: Date, showTime = false):string {
    const date = d.getDate().toString().padStart(2, '0');
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const year = d.getFullYear();

    const h = d.getHours().toString().padStart(2, '0');
    const m = d.getMinutes().toString().padStart(2, '0');

    if (showTime) {
      return `${year}-${month}-${date} ${h}:${m}`;
    }

    return `${year}-${month}-${date}`;
  }

  public static formatMonthYear(date: Date): string {
    return date.toLocaleDateString('en-EN', {
      year: 'numeric',
      month: 'long',
    });
  }
}
