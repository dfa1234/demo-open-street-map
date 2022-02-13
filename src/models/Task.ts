export interface Task {
    id: string,
    title: string,
    scheduled: Date,
    address: string,
    location: {
        lat: number,
        lng: number
    }
}