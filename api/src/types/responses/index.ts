export type EventType = {
    name: string;
    date: Date;
    description: string;
    tickets: TicketType[];
};

export type TicketType = {
    name: string;
    type: 'adult' | 'family' | 'child';
    price: number;
    bookingFee: number;
    availability: 'available' | 'sold out';
};

export interface TicketResponse extends Omit<TicketType, '_id'>{
    id: string
}

export interface EventResponse extends Omit<EventType, 'date'>{
    id: string;
    date: string
}