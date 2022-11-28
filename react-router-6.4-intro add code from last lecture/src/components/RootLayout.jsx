import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";

function RootLayout({ children }) {
  return (
    <>
      <MainNavigation />
      {/* <main>{children}</main> */}
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
