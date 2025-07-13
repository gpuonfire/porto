import { Outlet } from "react-router";
import MainNavBar from "./components/MainNavBar";

export default function RootLayout() {
  return (
    <>
      <MainNavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
