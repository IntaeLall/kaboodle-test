import React from 'react';
import EventDetail from '../components/features/EventDetail';
import { EventResponse } from '../types';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout/layout';
import getEventById from '../api/getEventById';

const EventPage: React.FC = () => {
    const { eventId } = useParams<{ eventId: string }>();

    const { data, isLoading, isError, error } = useQuery<{
        data: EventResponse
    }>(['eventId', eventId], () => getEventById(eventId ?? ""));

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {(error as Error).message}</div>;
    }

    if (!data) {
        return <div>Event not found</div>
    }

    return (
        <Layout>
            <EventDetail event={data.data} />
        </Layout>
    );
};

export default EventPage;
