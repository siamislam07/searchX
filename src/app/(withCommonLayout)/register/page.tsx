'use client'
import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import loginValidationSchema from "@/src/schemas/login.schema.";
import registerValidationSchema from "@/src/schemas/register.schema";
import { registerUser } from "@/src/services/AuthService";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { FieldValues, SubmitHandler } from "react-hook-form";

const RegisterPage = () => {
  const onSubmit: SubmitHandler<FieldValues> = async(data) => {
    const userData={
      ...data,
      profilePhoto:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkGk3FTMunVUkjWIqqaXImbVXA7o6i7BENYQ&s"
    }

    registerUser(userData)
  };

  return (
    <div className="flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center">
      <h3 className="my-2 text-2xl font-bold">Login with FoundX</h3>
      <p className="mb-4">Welcome Back! Let&lsquo;s Get Started</p>
      <div className="w-[35%]">
        <FXForm
        defaultValues={{
            name:"mir",
            email:"mir@gmail.com",
            mobileNumber:"12323213",
            password:"123123"
        }}
          onSubmit={onSubmit}
          resolver={zodResolver(registerValidationSchema)}
        >
          <div className="py-3">
            <FXInput name="name" label="Name" type="text" />
          </div>
          <div className="py-3">
            <FXInput name="email" label="Email" type="email" />
          </div>
          <div className="py-3">
            <FXInput name="mobileNumber" label="Number" type="number" />
          </div>
          <div className="py-3">
            <FXInput name="password" label="Password" type="password" />
          </div>

          <Button
            className="my-3 w-full rounded-md bg-default-900 font-semibold text-default"
            size="lg"
            type="submit"
          >
            Registration
          </Button>
        </FXForm>
        <div className="text-center">
          Already have an account ? <Link href={"/login"}>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
