"use client";
import { CardSubmitButton } from "./Buttons";
import { usePathname } from "next/navigation";
import { startTransition, useOptimistic } from "react";
import FormContainer from "./FormContainer";
import { toggleFavoriteAction } from "@/actions/action-favorite";

const FavoriteToggleForm = ({
  isFavorite,
  productId,
}: {
  isFavorite: boolean;
  productId: string;
}) => {
  const pathname = usePathname();

  const [optimisticIsFavorite, setOptimisticIsFavorite] = useOptimistic<
    boolean,
    boolean
  >(isFavorite, (state) => !state);

  const toggleAction = async () => {
    startTransition(() => {
      setOptimisticIsFavorite(isFavorite);
    });
    return await toggleFavoriteAction({ productId, pathname });
  };

  return (
    <FormContainer action={toggleAction}>
      <CardSubmitButton isFavorite={optimisticIsFavorite} />
    </FormContainer>
  );

  // WITHOUT TOAST OR SUBMITTING STATUS, JUST USE A BUTTON:
  // const toggleAction = async () => {
  //   setOptimisticIsFavorite(isFavorite);
  //   await toggleFavoriteAction({ productId, pathname });
  // };

  // return (
  //   <CardSubmitButton
  //     onClick={toggleAction}
  //     isFavorite={optimisticIsFavorite}
  //   />
};

export default FavoriteToggleForm;
