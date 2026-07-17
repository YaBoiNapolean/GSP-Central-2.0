import "./Button.css";

export default function Button({
    children,
    variant = "primary",
    onClick,
    type = "button",
    disabled = false,
    icon = null
}) {
    return (
        <button
            type={type}
            className={`button button-${variant}`}
            onClick={onClick}
            disabled={disabled}
        >
            {icon && (
                <span className="buttonIcon">
                    {icon}
                </span>
            )}

            <span>{children}</span>
        </button>
    );
}