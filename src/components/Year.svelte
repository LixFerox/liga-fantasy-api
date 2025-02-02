<script>
    import { Temporal } from "temporal-polyfill";
    var year = Temporal.Now.plainDateISO().year;
</script>
<span>{year}</span>