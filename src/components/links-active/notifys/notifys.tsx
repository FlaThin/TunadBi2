
type NotifysProps = {
  children: React.ReactNode
}

export function Notifys({children}: NotifysProps) {
  return <span className="text-xs py-[1px] px-2 bg-zinc-300 text-zinc-800 rounded-lg">{children}</span>
}