import { Controller, Control, FieldValues, Path } from 'react-hook-form';

type OptionType = {
    value: string;
    label: string;
};

type BaseSelectProps<TFieldValues extends FieldValues = FieldValues> = {
    label: string;
    control: Control<TFieldValues>;
    name: Path<TFieldValues>;
    options: OptionType[];
    rules?: Partial<{
        required: string | boolean;
        pattern: {
            value: RegExp;
            message: string;
        };
    }>;
};

const BaseSelect = <TFieldValues extends FieldValues = FieldValues>({
    label,
    control,
    name,
    options,
    rules
}: BaseSelectProps<TFieldValues>) => {
    return (
        <div className="mb-4 mt-3">
            <label className="block text-sm font-bold mb-2">{label}</label>
            <Controller
                control={control}
                name={name}
                rules={rules}
                render={({ field, fieldState }) => (
                    <>
                        <select {...field} className="p-2 w-full">
                            {options.map((option, index) => (
                                <option key={index} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        {fieldState?.error && <p className="text-red-500 text-xs mt-1">{fieldState.error.message}</p>}
                    </>
                )}
            />
        </div>
    );
};

export default BaseSelect;
