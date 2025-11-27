import { forwardRef, useState, type KeyboardEvent } from "react"

interface IProps extends React.InputHTMLAttributes<HTMLInputElement>{
  next?: React.RefObject<HTMLInputElement | null>;
  prev?: React.RefObject<HTMLInputElement | null>;
}
const InputCode = forwardRef<HTMLInputElement, IProps>(({ next, prev,...rest}: IProps, ref) => {
  const [value, setValue] = useState<boolean>(false)
  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    const input = e.currentTarget
    input.value = input.value.replace(/[^0-9]/g,"")
      if (input.value) {
        setValue(true);
      } else {
        setValue(false);
      }
    if(input.value && next) {
      next.current?.focus()
    }
  }
  const handleKeyDown = (e : KeyboardEvent<HTMLInputElement>) => {
    const input = e.currentTarget
    if(e.key === "Backspace" && !input.value && prev) {
      prev.current?.focus()
    }
  }
  return (<>
      <input
      ref={ref}
      {...rest}
      type="text"
      maxLength={1}
      pattern="[0-9]"
      inputMode="numeric"
      onInput={handleInput}
      onKeyDown={handleKeyDown}
      className={`w-14 h-14 text-center text-2xl font-semibold border-2 rounded-xl transition-all duration-300 focus:border-primary-500 ${rest.className}
      ${value ? "bg-primary-100 outline-4 outline-gray-100 border-primary-500" : "border-gray-300 outline-none"}`} />
  </>)
}
)

export default InputCode