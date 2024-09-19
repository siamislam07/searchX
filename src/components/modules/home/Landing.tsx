import { Input } from "@nextui-org/input";
import { SearchIcon } from "../../icons";

const Landing = () => {
  return (
    <div className="h-[calc(100vh-64px)] bg-[url('/cover.jpg')] bg-cover bg-center">
      <div className="pt-32 max-w-2xl flex-1 mx-auto"> 
        <form className="flex-1">
          <Input
            aria-label="Search"
            labelPlacement="outside"
            classNames={{
              inputWrapper: "bg-default-100",
              input: "text-sm",
            }}
            placeholder="Search..."
            size="lg"
            startContent={
                <SearchIcon className="pointer-events-none flex-shrink-0 "/>
            }
            
            type="text"
          />
        </form>
      </div>
    </div>
  );
};

export default Landing;
