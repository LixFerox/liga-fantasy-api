<script lang="ts">
    function deleteCookie(){
        console.log('deleteCookie');
    }
</script>
<button on:click={() => deleteCookie()} class="bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:bg-blue-700  cursor-pointer">Cerrar sesión</button>