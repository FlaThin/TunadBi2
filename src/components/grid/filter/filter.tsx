import { DataGridProps } from "../grid";


export function Filter({columns}: DataGridProps) {
  
  return (
    <div className="grid grid-cols-5 gap-2 p-4 bg-[#f9fafc] rounded-xl">
      <div className="flex flex-col gap-1 col-span-2  ">
        <label className="text-xs font-semibold" htmlFor="">Search for order</label>
        <input className="px-3 py-2 flex rounded-lg border-[#e0e1e4] border-2 focus-visible:outline-none text-sm" type="text" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold" htmlFor="">Status</label>
        <input className="px-3 py-2 flex rounded-lg border-[#e0e1e4] border-2 focus-visible:outline-none text-sm" type="text" />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold" htmlFor="">Category</label>
        <input className="px-3 py-2 flex rounded-lg border-[#e0e1e4] border-2 focus-visible:outline-none text-sm" type="text" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold" htmlFor="">Customer</label>
        <input className="px-3 py-2 flex rounded-lg border-[#e0e1e4] border-2 focus-visible:outline-none text-sm" type="text" />
      </div>
      
    </div>
  )
}