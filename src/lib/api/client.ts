const apiBaseURL = "https://api-fantasy.llt-services.com/api";

function authHeaders(token: string) {
  return {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
}

export async function apiFetch<T>(path: string, token: string): Promise<T> {
  const url = `${apiBaseURL}${path}`;
  const response = await fetch(url, authHeaders(token));

  if (!response.ok) {
    const error = new Error(
      `API Error: ${response.status} ${response.statusText}`
    );
    (error as any).status = response.status;
    (error as any).response = response;
    throw error;
  }
  return response.json();
}
