
const InputCode = () => {
  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    const input = e.currentTarget
    input.value = input.value.replace(/[^0-9]/g,"")
  }
  return (<>
      <input
      type="text"
      maxLength={1}
      pattern="[0-9]"
      onInput={handleInput}
      inputMode="numeric"
      className="w-14 h-16 text-center text-2xl font-semibold border-2 border-primary-200 rounded-xl transition-all duration-300 ease-in focus:border-primary-500 shadow-sm outline-none"/>
  </>)
}

export default InputCode