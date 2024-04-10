import InfoBar from "@/components/infobar/infobar";
import Sidebar from "@/components/sidebar/sidebar";
import React from "react";

type Props = { children: React.ReactNode };

const Layout = ({ children }: Props) => {
  return (
    <div className="flex overflow-hidden h-screen">
      <Sidebar />
      <div className="w-full">
        <InfoBar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
