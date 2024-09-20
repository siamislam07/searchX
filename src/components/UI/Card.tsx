import { IPost } from "@/src/types";
import { Button } from "@nextui-org/button";
import {
  Card as NextUiCard,
  CardHeader,
  CardBody,
  CardFooter,
} from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import {format} from "date-fns"


const Card = ({ post }:{post:IPost}) => {
  const { title, category, images, city, dateFound, _id } = post || {};
  return (
    <NextUiCard isFooterBlurred className="h-[300px] w-full ">
      <CardHeader className="absolute top-1 z-10 flex-col items-start">
        <p className="absolute top-1 right-1  rounded-full bg-black px-2 text-tiny uppercase">
          {category?.name} 
        </p>
        <h4 className="mt-2 rounded bg-black/30 p-1 text-xl font-medium text-white">
        {title}</h4>
      </CardHeader>

      <Image
        removeWrapper
        alt="Card example background"
        className="scale-120 z-0 h-full w-full -translate-y-6 object-cover"
        src={images[0]}
      />

      <CardFooter className="absolute bottom-0 z-10 justify-between border-t-1 border-zinc-500">
        <div>
          <p className="text-tiny ">{city}</p>
          <p className="text-tiny ">{format(new Date(dateFound), "dd/ MM /yyyy")}</p>
        </div>

        <Button
          className="bg-black text-tiny text-white"
          radius="full"
          size="sm"
        >
          Details
        </Button>
      </CardFooter>
    </NextUiCard>
  );
};

export default Card;
