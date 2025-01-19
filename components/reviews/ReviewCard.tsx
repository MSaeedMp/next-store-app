import Image from "next/image";
import { Card, CardContent, CardHeader } from "../ui/card";
import Rating from "./Rating";
import TextExpander from "../global/TextExpander";
import UserImage from "@/public/user.png";
import { Review } from "@prisma/client";
import { formatDate } from "@/utils/format";

const ReviewCard = ({
  children,
  review,
}: {
  children?: React.ReactNode;
  review: Review;
}) => {
  const {
    title,
    comment,
    authorImageUrl: image,
    authorName: name,
    rating,
    createdAt,
  } = review;

  return (
    <Card className=" border shadow-sm border-stone-200 rounded-sm">
      <CardHeader>
        <div className="flex items-center">
          <Image
            src={image || UserImage}
            alt={name}
            width={48}
            height={48}
            className="rounded-full object-cover w-12 h-12"
          />
          <div className="ml-4 flex justify-between w-full">
            <div className="space-y-1 ">
              <h3 className="text-sm font-semibold capitalize">{name}</h3>
              <Rating rating={rating} />
            </div>
            <span className="text-xs text-muted-foreground whitespace-nowrap">
              Created on {formatDate(createdAt)}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <h4 className="text-base mb-4 font-semibold">{title}</h4>
        <TextExpander max={50}>{comment}</TextExpander>
      </CardContent>
      <div className="absolute top-3 right-3">{children}</div>
    </Card>
  );
};
export default ReviewCard;
