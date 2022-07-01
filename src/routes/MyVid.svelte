<script>
    export let vsrc;
    export let vname;
    export let vimg;
    export let vdark = false;

    let clicked = false;
    let vcolor;

    vdark ? vcolor = "text-slate-800" : vcolor = "text-slate-300";

    function toggleClick() {
        setTimeout(() => clicked = true, 200);
    }
</script>

<div class="flex flex-col justify-center items-center w-full">
    {#if clicked}
        <iframe src="https://www.youtube.com/embed/{vsrc}?&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="mt-4 mb-4 w-full aspect-video shadow-lg shadow-slate-500/30 rounded-lg hover:shadow-slate-500/50 duration-300">
    </iframe>
    {:else}
        <img src="{vimg}" alt="Thumbnail not available" on:click={toggleClick} class="mt-4 mb-4 w-full aspect-video shadow-lg shadow-slate-500/30 rounded-lg hover:shadow-slate-500/50 duration-300 cursor-pointer">
    {/if}
    <h1 class="{vcolor} font-semibold tracking-tight">{vname}</h1>
</div>

