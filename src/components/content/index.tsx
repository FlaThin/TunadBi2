import { HeaderContent } from "./header-content/header-content"

type ContentProp = {
  children: React.ReactNode
}

export function Content({ children }: ContentProp) {
  return (
    <div className="flex flex-col w-full bg-white rounded-e-md p-8">
      <HeaderContent></HeaderContent>

      {children}
    </div>
  )
}