import { getAuthUser } from "@/actions/action-utils";
import { CardSignInButton } from "../form/Buttons";
import FavoriteToggleForm from "../form/FavoriteToggleForm";
import { fetchIsFavorite } from "@/actions/action-favorite";

const FavoriteToggleButton = async ({ productId }: { productId: string }) => {
  const user = await getAuthUser();
  if (!user) return <CardSignInButton />;
  const isFavorite = await fetchIsFavorite(productId);
  return <FavoriteToggleForm isFavorite={isFavorite} productId={productId} />;
};
export default FavoriteToggleButton;
