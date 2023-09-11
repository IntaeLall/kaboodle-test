import { Controller, Control, FieldValues, RegisterOptions, Path } from 'react-hook-form';

interface BaseTextAreaProps<TFieldValues extends FieldValues = FieldValues> {
    label: string;
    control: Control<TFieldValues>;
    name: Path<TFieldValues>;
    rules?: RegisterOptions;
    placeholder?: string;
}

const BaseTextArea = <TFieldValues extends FieldValues = FieldValues>({
    label,
    control,
    name,
    rules,
    placeholder
}: BaseTextAreaProps<TFieldValues>) => (
    <>
        <label className="block text-sm font-bold mb-2">{label}</label>
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field, fieldState }) => (
                <>
                    <textarea rows={4} {...field} className="p-2 w-full" placeholder={placeholder}></textarea>
                    {fieldState?.error && <p className="text-red-500 text-xs mt-1">{fieldState.error.message}</p>}
                </>
            )}
        />
    </>
);

export default BaseTextArea;
