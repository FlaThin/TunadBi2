

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation"

type LinksActive = {
  children: React.ReactNode
} & LinkProps

export function LinksActive({ href, children, ...rest }: LinksActive) {
  const pathname = usePathname();
  
  const isCurrentPath = 
    pathname === href ||
    pathname === rest.as ||
    pathname?.startsWith(String(rest.as));
  
  return (
    <Link 
      {...rest} 
      href={href}
      className={`rounded-md p-2 ${isCurrentPath ? "text-black bg-zinc-200 " : "text-zinc-200"} hover:bg-zinc-200 transition-all hover:text-black`}
    >
      {children}
    </Link>
  )
}