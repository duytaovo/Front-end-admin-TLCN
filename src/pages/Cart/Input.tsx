import react, { ChangeEventHandler } from "react";

interface Props {
  placeholder?: string;
  value: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  id?: string;
  required?: boolean;
  pattern?: string;
  props?: any;
  type?: string;
}
const Input = ({
  placeholder,
  value,
  onChange,
  id,
  required,
  pattern,
  type = "text",
  ...props
}: Props) => {
  return (
    <div className="relative border rounded-lg flex-grow h-16 ">
      <input
        type={type}
        value={value}
        onChange={onChange}
        id={id}
        className="block px-2.5 pb-2.5 pt-4 w-full text-2xl  bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required={required}
        pattern={pattern}
      />
      <label
        htmlFor={id}
        className="absolute text-2xl  dark:text-gray-400 duration-200 transform -translate-y-4 scale-75 top-2 origin-[0]  px-4 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
      >
        {placeholder}
      </label>
    </div>
  );
};

export default Input;
