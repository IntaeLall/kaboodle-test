import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { EventResponse } from '../types';
import Layout from '../components/layout/layout';
import getEvents from '../api/getEvents';

const EventListPage = () => {
    const navigate = useNavigate();

    const { data, error, isLoading, isError } = useQuery('events', getEvents);

    const events: EventResponse[] = data?.data;

    const handleEventClick = (eventId: string) => {
        navigate(`/events/${eventId}`)
    };

    if (isError) {
        return <div>Error: {(error as Error).message}</div>;
    }


    if (isLoading) {
        return (<div className="text-xl text-center mt-10">Loading...</div>);
    }

    return (
        <Layout>
            <h1 className="text-3xl mb-6 text-center font-bold">Event List</h1>
            <div className="grid md:grid-cols-3 gap-6">
                {events.map((event) => (
                    <div
                        className="rounded overflow-hidden shadow-lg p-4 cursor-pointer"
                        key={event.name}
                        onClick={() => handleEventClick(event.id)}
                    >
                        <h2 className="font-bold text-xl mb-2">{event.name}</h2>
                        <p className="text-gray-700 text-base">Date: {event.date}</p>
                        <p className="text-gray-700 text-base mt-2">Description: {event.description}</p>
                    </div>
                ))}
            </div>
        </Layout>
    );
}

export default EventListPage