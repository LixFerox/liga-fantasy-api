<script lang="ts">
    import { Temporal } from "temporal-polyfill";
    import { onMount, onDestroy } from "svelte";
    
    export let expirationDate;
    
    const end = Temporal.Instant.from(expirationDate);
    const expiration = end.toZonedDateTimeISO("Europe/Madrid");
    const formatNumber = (num: number) => num.toString().padStart(2, "0");
    
    var now = Temporal.Now.zonedDateTimeISO("Europe/Madrid");
    var days = 0;
    var hours = "00";
    var minutes = "00";
    var seconds = "00";
    var timeString = "";
    var intervalId: number;
    
    const updateTime = () => {
        now = Temporal.Now.zonedDateTimeISO("Europe/Madrid");
        const difference = expiration.since(now, { largestUnit: "days" });
    
        days = difference.days;
        hours = formatNumber(difference.hours);
        minutes = formatNumber(difference.minutes);
        seconds = formatNumber(difference.seconds);
    
        timeString = days > 0 ? `${days} días ${hours}:${minutes}:${seconds}` : `${hours}:${minutes}:${seconds}`;
    };
    
    onMount(() => {
        intervalId = window.setInterval(updateTime, 1000);
        updateTime();
    });
    
    onDestroy(() => {
        clearInterval(intervalId);
    });
  </script>
  {#if days > 0}
    <span>{days} día</span>
  {:else}
    <span>{hours}:{minutes}:{seconds}</span>
  {/if}
    