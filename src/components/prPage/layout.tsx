import React from "react";
import { Sidebar } from "./reviewers";

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className=" mx-auto dark:bg-black flex flex-wrap p-8">
    <div >{children}</div>
    {/* <div className="lg:col-span-1"><Sidebar /></div> */}
  </div>
);
