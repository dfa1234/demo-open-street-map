export interface Driver {
    id: string,
    firstName: string,
    lastName: string,
    location: {
        lat: number,
        lng: number
    },
    age: number
}