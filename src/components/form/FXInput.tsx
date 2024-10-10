'use client'

import { IInput } from "@/src/types";
import { Input } from "@nextui-org/input";
import { useFormContext } from "react-hook-form";

interface IProps extends IInput{}

const FXInput = ({
  variant = "bordered",
  size = "md",
  required = false,
  type = "text",
  label,
  name,
}: IProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Input
      {...register(name)}
      errorMessage={errors[name] ? (errors[name].message as string) : ""}
      isInvalid={!!errors[name]}
      variant={variant}
      type={type}
      size={size}
      required={required}
      label={label}
      name={name}
    />
  );
};

export default FXInput;
