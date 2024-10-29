import Header from "@/components/header";
import {Outlet} from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-[#0a0921] mt-10 font-mono">
        Made by Aryan Hayaran
      </div>
    </div>
  );
};

export default AppLayout;
