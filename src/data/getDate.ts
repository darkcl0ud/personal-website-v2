export default function getDate(id: string) {
    const epoch = 1000000000000000 - parseInt(id)
    return new Date(epoch * 1000);
  }