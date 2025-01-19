import { useAuthContext } from "@/hooks/useAuthContext";
import { useSession } from "next-auth/react";
import { createContext, useEffect, useState } from "react";

// const CartContext = createContext(null);

// const CartProvider = ({ children }: { children: React.ReactNode }) => {
//   const [cartItemNumber, setCartItemNumber] = useState(0);
//   // const { user } = useAuthContext();
//   const {data: session} = useSession();
  
//   const { data } = useQuery({
//     queryKey: ["numItemsInCart"],
//     queryFn: () => fetchCartItems(),
//   });
  
//   useEffect(() => {
//     setCartItemNumber(user.)


//   }, []);

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };
