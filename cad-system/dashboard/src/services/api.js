const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export async function apiRequest(path, options = {}) {
    const response = await fetch(`${API_URL}${path}`, {
        ...options,
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            ...options.headers,
        },
    });

    if (response.status === 204) {
        return null;
    }

    const body = await response.json().catch(() => null);

    if (!response.ok) {
        throw new Error(body?.message || "The request could not be completed.");
    }

    return body;
}

export { API_URL };
