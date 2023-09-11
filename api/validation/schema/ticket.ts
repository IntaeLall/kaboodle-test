import { number, object, string, mixed } from "yup";

const ticketSchema = object({
    name: string().required(),
    type: mixed<'adult' | 'family' | 'child'>()
        .required()
        .oneOf(['adult', 'family', 'child'], 'Type should be either adult, family, or child'),
    price: number().required().min(0, "Price should be positive"),
    bookingFee: number().required().min(0, "Booking fee should be positive"),
    availability: mixed<'available' | 'sold out'>()
        .required()
        .oneOf(['available', 'sold out'], 'Availability should be either available or sold out'),
});

export default ticketSchema