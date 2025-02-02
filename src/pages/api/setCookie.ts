import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, cookies }) => {
    const { token } = await request.json();
    
    cookies.set('auth-token', token, {
      path: '/',
      httpOnly: true,
      secure: import.meta.env.PROD,
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7
    });
  
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  };
  