import React from 'react';
import { EventResponse } from '../../types';

interface EventDetailProps {
  event: EventResponse;
}

const EventDetail: React.FC<EventDetailProps> = ({ event }) => {
  return (
    <>
      <h1 className="text-3xl mb-6 text-center font-bold">{event.name}</h1>
      <p className="text-gray-700 text-xl mb-4">Date: {event.date}</p>
      <p className="text-gray-700 text-xl mb-4">Description: {event.description}</p>
      <h3 className="font-bold text-xl mb-2">Tickets</h3>
      <div>
        {event.tickets.map((ticket, index) => (
          <div key={index} className="mb-4 border-t pt-4">
            <p className="text-gray-700"><strong>Name:</strong> {ticket.name}</p>
            <p className="text-gray-700"><strong>Type:</strong> {ticket.type}</p>
            <p className="text-gray-700"><strong>Price:</strong> ${ticket.price}</p>
            <p className="text-gray-700"><strong>Booking Fee:</strong> ${ticket.bookingFee}</p>
            <p className={`text-gray-700 ${ticket.availability === 'sold out' ? 'text-red-600' : 'text-green-600'}`}>
              <strong>Availability:</strong> {ticket.availability}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default EventDetail
