<script>
    import MyVid from "./MyVid.svelte";
    export let divArr = [];
    export let divTitle;
    export let divID;
    export let isGrid = true;
    export let isDark = true;

    let bgTextColor;

    isDark ? bgTextColor = "bg-slate-800/70 text-slate-200" : bgTextColor = "bg-slate-200/70 text-slate-800";
</script>

<div class="h-auto min-h-[40rem] w-full flex flex-col justify-between items-center {bgTextColor}" id="{divID}">
    <h1 class="w-[92%] h-12 text-2xl md:text-3xl font-semibold mt-12 p-2 rounded-lg shadow-lg shadow-slate-500/30">{divTitle}</h1>

    {#if isGrid}
        <article class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full p-8">
            {#each divArr as obj}
                <MyVid vsrc="{obj.link}" vname="{obj.name}" vimg="{obj.img}" vdark={!isDark} />
            {/each}
        </article>
    {:else}
        <slot></slot>
    {/if}

    <div class="bg-neutral-300/30 w-full h-[1.5px]"></div>
</div>