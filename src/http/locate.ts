export type LocateResponse = {
    ip: string;
    country: string;
}

export async function locateAction() {
    const response = await fetch('/api/locate');
    if (!response.ok) throw new Error('Network response was not ok');
    const data: LocateResponse = await response.json();
    return data;
}