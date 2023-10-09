type Props = {
  className?: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  name: string;
  type: React.HTMLInputTypeAttribute | undefined;
  required?: boolean;
};

const Input = ({
  className,
  placeholder,
  onChange,
  name,
  type,
  required = false,
}: Props) => {
  return (
    <input
      className={` py-2 px-2 border border-gray-300 flex-grow bg-transparent rounded min-w-0 ${className}`}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      type={type}
      required={required}
    />
  );
};

export default Input;
