export default function LoadingSpinner() {
    return (
        <div
            role="status"
            aria-label="Checking authentication"
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--accent, #2d7ff9)",
            }}
        >
            Loading secure dashboard…
        </div>
    );
}
