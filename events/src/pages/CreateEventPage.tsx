import React from 'react';
import { useForm, useFieldArray, Control } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import EventForm from '../components/features/EventForm';
import { EventType } from '../types';
import createEvent from '../api/createEvent';
import Layout from '../components/layout/layout';

const CreateEventPage: React.FC = () => {
    const navigate = useNavigate();

    const queryClient = useQueryClient();

    const mutation = useMutation(createEvent, {
        onSuccess: () => {
            queryClient.invalidateQueries('events');
            navigate('/');
        },
    });

    const { handleSubmit, control, } = useForm<EventType>();
    
    const { fields, append, remove } = useFieldArray({
        control,
        name: "tickets"
    });

    const onSubmit = (data: EventType) => {
        mutation.mutate(data, {
            onSuccess: () => {
                navigate('/events');
            }
        });
    };

    return (
        <Layout>
            <EventForm
                onSubmit={handleSubmit(onSubmit)}
                fields={fields}
                append={append}
                remove={remove}
                control={control as unknown as Control}
                mutation={mutation}
            />
        </Layout>
    );
};

export default CreateEventPage
