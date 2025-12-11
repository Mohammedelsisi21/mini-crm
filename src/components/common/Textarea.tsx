interface ITextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string
    placeholder: string
    error?: boolean
}

const Textarea = ({ name, placeholder, error, ...rest }: ITextareaProps) => {
    return (
        <div className="relative">
            <textarea
                name={name}
                placeholder={placeholder}
                {...rest}
                className={`w-full px-4 caret-primary-500 text-text-body py-4 border-2 ${error ? "border-error-600" : "border-gray-300"} rounded-xl outline-none focus:ring-2 ${error ? "focus:ring-error-600" : "focus:ring-primary-500"} focus:border-transparent transition-all resize-none`}
            />
        </div>
    )
}

export default Textarea
