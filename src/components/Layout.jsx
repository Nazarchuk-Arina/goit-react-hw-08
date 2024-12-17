import { Suspense } from "react";
import Loader from "./Loader/Loader";
import AppBar from "./appBar/AppBar";

export const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </div>
  );
};
