import { EventType, TicketType } from "../models"

export interface TicketResponse extends Omit<TicketType, '_id'>{
    id: string
}

export interface EventResponse extends Omit<EventType, '_id' | 'date' | 'tickets'>{
    id: string
    date: string
    tickets: TicketResponse[]
    createdAt: string,
    updatedAt: string
}