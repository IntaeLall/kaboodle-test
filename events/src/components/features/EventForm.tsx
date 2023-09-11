import { FormEventHandler } from "react";
import { EventType, TicketType } from "../../types";
import BaseButton from "../base/BaseButton";
import BaseInput from "../base/BaseInput";
import BaseTextArea from "../base/BaseTextArea";
import { UseMutationResult } from "react-query";
import { Control, } from "react-hook-form";
import TicketForm from "./TicketForm";

type EventFormProps = {
    onSubmit: FormEventHandler<HTMLFormElement>;
    control: Control
    fields: TicketType[];
    append: (ticket: TicketType) => void;
    remove: (index: number) => void;
    mutation: UseMutationResult<unknown, unknown, EventType, unknown>
};

const EventForm: React.FC<EventFormProps> = ({
    onSubmit,
    control,
    fields,
    append,
    remove,
    mutation
}) => {
    return (
        <div>
            <h1 className="text-3xl mb-6 text-center font-bold">Create Event</h1>
            <form onSubmit={onSubmit}>
                <BaseInput
                    className="mb-4"
                    label="Event Name"
                    control={control}
                    name="name"
                    placeholder="Event Name"
                    rules={{ required: "Event Name is required." }}
                />

                <BaseInput
                    className="mb-4"
                    label="Event Date"
                    control={control}
                    name="date"
                    type="date"
                    rules={{ required: "Event Date is required." }}
                />

                <BaseTextArea
                    label="Event Description"
                    control={control}
                    name="description"
                    rules={{ required: "Event Description is required." }}
                    placeholder="Event Description"
                />

                <h3 className="text-xl font-bold mb-3">Tickets</h3>
                {fields.map((ticketField, index) => (
                    <TicketForm
                        index={index}
                        data={ticketField}
                        control={control}
                        remove={remove}
                    />
                ))}

                {fields.length === 0 && <p className="text-red-500 text-xs mt-1">At least one ticket is required.</p>}

                <div className="flex justify-between mt-4">
                    <BaseButton
                        onClick={() => append({
                            name: '',
                            type: 'adult',
                            price: 0,
                            bookingFee: 0,
                            availability: 'available'
                        })}
                        color="green"
                        label="Add New Ticket"
                    />

                    <BaseButton
                        type="submit"
                        color="blue"
                        label="Submit"
                    />
                </div>

                {mutation.isError && (
                    <p className="mt-4 text-red-500">{(mutation.error as Error).message}</p>
                )}
            </form>
        </div>
    );
};

export default EventForm;
