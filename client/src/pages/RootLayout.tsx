import PilopsHeader from "../components/PilopsHeader";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <section className="bg-dark-bg w-full px-20 pt-20 min-h-dvh text-text-primary flex flex-col items-center overflow-auto scrollbar-hide">
      <PilopsHeader />
      <div className="w-full max-w-[80rem] mt-10">
        <Outlet />
      </div>
    </section>
  );
};

export default RootLayout;
