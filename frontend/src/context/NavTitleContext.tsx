import { createContext, useContext } from "react";

interface NavTitleContextValue {
  title: string;
  setTitle: (title: string) => void;
}

const NavTitleContext = createContext<NavTitleContextValue>({
  title: "",
  setTitle: () => {},
});

export const useNavTitle = () => useContext(NavTitleContext);

export default NavTitleContext;
