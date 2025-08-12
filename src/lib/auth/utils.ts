export function clearAuthCookie(cookies: any) {
  cookies.delete("auth", {
    path: "/",
  });
}

export function isAuthError(error: any): boolean {
  return error?.status === 401 || error?.status === 403;
}
