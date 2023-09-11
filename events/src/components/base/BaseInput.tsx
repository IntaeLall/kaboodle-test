import { InputHTMLAttributes, forwardRef } from 'react';
import { Controller, Control, FieldValues, Path, PathValue } from 'react-hook-form';

interface BaseInputProps<TFieldValues extends FieldValues = FieldValues> 
  extends InputHTMLAttributes<HTMLInputElement> {
  name: Path<TFieldValues>;
  control: Control
  label?: string;
  defaultValue?: PathValue<TFieldValues, Path<TFieldValues>>;
  rules?: Partial<{
    required: string | boolean;
    pattern: {
      value: RegExp;
      message: string;
    };
  }>;
}

const BaseInput = forwardRef(<TFieldValues extends FieldValues = FieldValues>(
  props: BaseInputProps<TFieldValues>,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  const { name, control, label, defaultValue, rules, ...inputProps } = props;

  return (
    <div>
      {label && <label className='mr-4' htmlFor={name}>{label}:</label>}
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={rules}
        render={({ field, fieldState }) => (
          <>
            <input className='px-1 mb-2' {...field} {...inputProps} ref={ref} id={name} />
            {fieldState?.error && <p className='text-sm text-red-500'>{fieldState.error.message}</p>}
          </>
        )}
      />
    </div>
  );
});

export default BaseInput