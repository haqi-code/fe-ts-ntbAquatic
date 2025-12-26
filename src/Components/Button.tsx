type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    loading?: boolean;
}

export default function Button({ children, loading = false, disabled, ...props }: ButtonProps) {
    return (
        <button {...props}
            disabled={disabled || loading} className="
        px-4 py-2 rounded
        bg-blue-600 text-white
        hover:bg-blue-700
        disabled:opacity-50
        disabled:cursor-not-allowed
      ">
            {loading ? "Loading..." : children}
        </button>
    )
}