interface IProps {
    error?: string;
}

const ErrorMessage = ({ error }: IProps) => {
    if (!error) return null;
    return (
    <p className="text-error-500 text-sm mt-1 mr-3">
        {error}
    </p>
);
};

export default ErrorMessage;
