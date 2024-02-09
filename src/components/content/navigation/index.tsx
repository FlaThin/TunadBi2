"use client"

import { PiCaretRightBold , PiHouse } from "react-icons/pi";
import { usePathname } from "next/navigation";

export function Navigation (){
  const pathname = usePathname();

  const arrayPathname = pathname.split("/");

  arrayPathname.splice(0, 1);
  
  return (
    <div className="flex gap-2 items-center leading-3 text-sm text-zinc-700 mb-6">
      <PiHouse size={24}/>
      <PiCaretRightBold className="text-zinc-400" size={16}/>
      <span>Dashboard</span>
      {
        arrayPathname.map((item, index) => {
          return (
            <div className="flex items-center gap-2" key={index}>
              <PiCaretRightBold className="text-zinc-400" size={16} />
              <span>{item}</span>
            </div>
          )
        })
      }
    </div>
    
  )
}