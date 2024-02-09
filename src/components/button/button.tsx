import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  title: String,
  iconLeft?: () => React.ReactNode,
  iconRight?: () => React.ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ 
  title,
  iconLeft,
  iconRight
}: ButtonProps ) {
  return (
    <button className="flex gap-2 border-[#e0e1e4] border-2 items-center rounded-lg px-3 py-2 text-zinc-600 text-sm font-medium"> 
      {iconLeft && iconLeft()}
      {title}
    </button>
  )

}