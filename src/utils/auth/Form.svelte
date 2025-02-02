<script lang="ts">
import { getToken } from "./getToken";
var email = '';
var password = '';
var errorMessage = '';

async function credentialsUser(email: string, password: string) {
    try {
        if (!email || !password) {
            throw new Error('Por favor completa todos los campos');
        }

        const token = await getToken(email, password);
        
        if (!token) {
            throw new Error('Credenciales inválidas');
        }

        const response = await fetch("/api/setCookie", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ token }),
        });

        if (!response.ok) {
            throw new Error('Error al guardar sesión');
        }

        window.location.href = "/home";
        
    } catch (error) {
        errorMessage = error instanceof Error ? error.message : 'Error desconocido';
        console.error(error);
    }
}
</script>
<form on:submit={e => e.preventDefault()} class="w-full max-w-md">
    <div class="flex flex-col gap-6">
        <div>
            <label for="email" class="text-sm font-medium text-gray-700 mb-1">
                Email
            </label>
            <input type="email" name="email" placeholder="tu@correo.com" required autocomplete="email" bind:value={email}  class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2  transition-all placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500">
        </div>
        <div>
            <label for="password" class="text-sm font-medium text-gray-700 mb-1">
                Contraseña
            </label>
            <input type="password" name="password" placeholder="••••••••" required autocomplete="current-password" bind:value={password} class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2  transition-all placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500">
        </div>
        <button on:click={() => credentialsUser(email, password)} class="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:bg-blue-700 cursor-pointer">Login</button>
    </div>
</form>