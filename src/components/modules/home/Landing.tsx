"use client";

import { Input } from "@nextui-org/input";
import { SearchIcon } from "../../icons";

import { useForm } from "react-hook-form";

const Landing = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="h-[calc(100vh-64px)] bg-[url('/cover.jpg')] bg-cover bg-center">
      <div className="pt-32 max-w-2xl flex-1 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex-1">
            <Input
              {...register("search")}
              aria-label="Search"
              labelPlacement="outside"
              classNames={{
                inputWrapper: "bg-default-100",
                input: "text-sm",
              }}
              placeholder="Search..."
              size="lg"
              startContent={
                <SearchIcon className="pointer-events-none flex-shrink-0 " />
              }
              type="text"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Landing;
