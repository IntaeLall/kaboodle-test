import { Control } from 'react-hook-form';
import BaseButton from '../base/BaseButton'
import BaseInput from '../base/BaseInput'
import BaseSelect from '../base/BaseSelect'
import { TicketType } from '../../types';

type TicketFormProps = {
    index: number
    data: TicketType
    control: Control,
    remove: (index: number) => void;
};

const TicketForm = ({
    index,
    control,
    remove
}: TicketFormProps) => {
    return (
        <div key={index} className="mb-4">
            <BaseInput
                label="Ticket Name"
                control={control}
                name={`tickets.${index}.name`}
                placeholder="Ticket Name"
                rules={{ required: "Ticket Name is required." }}
            />

            <BaseSelect
                label="Type"
                control={control}
                name={`tickets.${index}.type`}
                options={[
                    { value: 'adult', label: 'Adult' },
                    { value: 'family', label: 'Family' },
                    { value: 'child', label: 'Child' }
                ]}
            />

            <BaseInput
                className="mb-2"
                label="Price"
                control={control}
                name={`tickets.${index}.price`}
                type="number"
                placeholder="Price"
                rules={{ required: "Price is required." }}
            />

            <BaseInput
                label="Booking Fee"
                control={control}
                name={`tickets.${index}.bookingFee`}
                type="number"
                placeholder="Booking Fee"
                rules={{ required: "Booking Fee is required." }}
            />

            <BaseSelect
                label="Type"
                control={control}
                name={`tickets.${index}.type`}
                options={[
                    { value: 'adult', label: 'Adult' },
                    { value: 'family', label: 'Family' },
                    { value: 'child', label: 'Child' }
                ]}
            />
            <div className="mt-3">
                <BaseButton
                    onClick={() => remove(index)}
                    color="red"
                    label="Remove"
                />
            </div>
        </div>
    )
}

export default TicketForm
