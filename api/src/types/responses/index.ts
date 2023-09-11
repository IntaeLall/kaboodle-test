import { EventType, TicketType } from "../models";

export interface TicketResponse extends Omit<TicketType, '_id'>{
    id: string
}

export interface EventResponse extends Omit<EventType, 'date'>{
    id: string;
    date: string
}