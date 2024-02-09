"use client"

import { usePathname } from "next/navigation";
import { Navigation } from "../navigation";
import { Export } from "../export/export";


export function HeaderContent() {
  const path = usePathname().split("/").pop();
  
  return (
    <header className="mb-8">
      <Navigation/>
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-2xl">
          {path && path}
        </h2>
        <Export/>
      </div>
    </header>
  )
}