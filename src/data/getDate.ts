export default function getDate(id: string) {
    const year = parseInt(id.substring(0, 4), 10);
    const month = parseInt(id.substring(4, 6), 10) - 1; // JS months are 0-indexed
    const day = parseInt(id.substring(6, 8), 10);
    const hour = parseInt(id.substring(8, 10), 10);
    const minute = parseInt(id.substring(10, 12), 10);
    return new Date(year, month, day, hour, minute);
}