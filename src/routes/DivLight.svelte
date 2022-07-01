<script>
    export let divTitle;
    export let divID;
    export let divGrid = true;
</script>

<div class="h-auto min-h-[40rem] w-full flex flex-col justify-between items-center bg-slate-200/70 text-slate-800" id="{divID}">
    <h1 class="w-[92%] h-12 text-2xl md:text-3xl font-semibold mt-12 p-2 rounded-lg shadow-lg shadow-slate-500/30">{divTitle}</h1>

    {#if divGrid}
        <article class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full p-8">
            <slot></slot>
        </article>
    {:else}
        <slot></slot>
    {/if}

    <div class="bg-neutral-300/30 w-full h-[1.5px]"></div>
</div>