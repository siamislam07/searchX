import { Input } from "@nextui-org/input";
import { useFormContext } from "react-hook-form";


interface IProps {
    variant?:"flat"|"bordered"|"faded"|"underlined"
    size?:"sm"|"md"|"lg"
    required?:boolean
    type?: string
    label?:string
    name:string
}

const FXInput = ({
    variant="bordered", 
    size="md", 
    required=false ,
    type="text",
    label,
    name
}:IProps) => {


    const {register} = useFormContext()

    return (
        <Input 
        {...register(name)}
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