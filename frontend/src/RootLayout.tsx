import { Outlet } from "react-router";
import NavMenu from "./components/MainNavBar/MainNavBar";

export default function RootLayout() {
  return (
    <>
      <NavMenu />
      <main>
        <Outlet />
      </main>
    </>
  );
}
