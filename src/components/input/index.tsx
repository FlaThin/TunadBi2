import { Input as InputUi } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { InputHTMLAttributes } from "react"

type InputProps = {
  label: string
} & InputHTMLAttributes<HTMLInputElement>

export function Input({ label, ...props }: InputProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-2">
      <Label htmlFor="email">{label}</Label>
      <InputUi {...props} />
    </div>
  )
}