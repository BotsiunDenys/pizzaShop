import React from "react";
import { useField } from "formik";

interface Props {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  className: string;
}

const CustomInput = ({ label, className, ...props }: Props) => {
  const [field, meta] = useField(props);

  return (
    <div className={className}>
      <label htmlFor={props.name}>{label}</label>
      <input
        {...field}
        {...props}
        className={
          meta.touched && meta.error
            ? "px-4 py-2 text-xl rounded-md outline-none transition-all border-red-600 border-[1px]"
            : "px-4 py-2 text-xl rounded-md outline-none transition-all"
        }
      />
      {meta.touched && meta.error && <div className="text-sm text-red-600">{meta.error}</div>}
    </div>
  );
};

export default CustomInput;
