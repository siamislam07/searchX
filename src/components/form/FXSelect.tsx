import { IInput } from "@/src/types";
import { Select, SelectItem } from "@nextui-org/select";
import { useFormContext } from "react-hook-form";

interface IProps extends IInput{
    options:{
        key:string,
        label:string,
    }[];
}

const FXSelect = ({options, name, label, variant="bordered",disabled}: IProps) => {
    const {
        register,
        formState: { errors },

      } = useFormContext();
    return (
        <Select 
        
        {...register(name)}
        label={label}
         className="min-w-full sm:min-w-[225px]"
         variant={variant}
         isDisabled={disabled}
      >
        {options.map((option) => (
          <SelectItem key={option.key}>
            {option.label}
          </SelectItem>
        ))}
      </Select>
    );
};

export default FXSelect;