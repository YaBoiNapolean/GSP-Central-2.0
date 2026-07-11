import { API_URL, apiRequest } from "./api";

export function getDiscordLoginUrl() {
    return `${API_URL}/auth/discord`;
}

export async function getCurrentUser() {
    return apiRequest("/auth/me");
}

export async function logout() {
    return apiRequest("/auth/logout", { method: "POST" });
}
