import React from "react"
import { Field, ErrorMessage } from "formik"
import { Props } from "../../pages/signin"

const ErrorM: React.FC = ({ children }) => {
  return (
    <div className="text-[12px] text-primary-dark pt-[2px]">{children}</div>
  )
}

const Input = ({ label, name, type, id, isError, placeholder }: Props) => {
  return (
    <div className="flex-col gap-[20px]">
      <label
        htmlFor={id}
        className={`w-full text-[16px] text-text-color-dark font-extrabold`}
      >
        {label} :
      </label>
      <Field
        name={name}
        type={type}
        id={id}
        placeholder={placeholder}
        className={`w-full ${
          isError ? "border-2 border-primary-dark " : ""
        }  mt-[2px] mb-[4px] pl-[10px] pr-[10px] pt-[4px] pb-[4px] rounded-lg text-[14px]`}
      />

      <ErrorMessage name={name} component={ErrorM} />
    </div>
  )
}

export default Input
