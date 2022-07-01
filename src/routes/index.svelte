<script>
import DivDark from "./DivDark.svelte";

/* 
const videos = [
    {link: "5ukLJ5TpVxg", name: "Anna Clendening - Girls Like You (Rmx)", img: "nr1.png"},
    {link: "Cj-RGHzlyVg", name: "Polar - Hack My Heart (Aravestia Remix)", img: "nr2.png"},
    {link: "Tr4vQAAOlIA", name: "Le Youth - Hang on (Aravestia Remix)", img: "nr3.png"},

    {link: "BZK3R_qhw_E", name: "Bao - 52-Hearts [1 Hour Loop]", img: "pr1.png"},
    {link: "zZTbx8bLWy0", name: "The Midnight - America 2 (Slowed)", img: "pr2.png"},
    {link: "WYbOGmLyBaM", name: "Emotional Melodic Dubstep, Future Bass Mix", img: "pr3.png"},
] 
*/

let newRels = [
    {link: "5ukLJ5TpVxg", name: "Anna Clendening - Girls Like You (Rmx)", img: "nr1.png"},
];

let popRels = [
    {link: "BZK3R_qhw_E", name: "Bao - 52-Hearts [1 Hour Loop]", img: "pr1.png"},
    {link: "zZTbx8bLWy0", name: "The Midnight - America 2 (Slowed)", img: "pr2.png"},
    {link: "WYbOGmLyBaM", name: "Emotional Melodic Dubstep, Future Bass Mix", img: "pr3.png"},
];

let navLinks = [
    {link: "#home", name: "Home"},
    {link: "#new-releases", name: "New Releases"},
    {link: "#pop-releases", name: "Popular"},
    {link: "#playlists", name: "Playlists"},
    {link: "#contacts", name: "Contact Me"},
];

let playlists = [
    {link: "female-vocals-edm-vol-1", name: "Female Vocals EDM [Vol #1]"},
    {link: "80s-mix-1", name: "[Synthwave, Vapourwave, Retrowave] 80s Super Mix (Vol #1)"},
    {link: "emotional-future-bass-1", name: "Emotional Future Bass & Melodic Dubstep [Vol #3]"},
    {link: "emotional-future-bass-melodic", name: "Emotional Future Bass & Melodic Dubstep [Vol #2]"},
    {link: "emotional-future-bass", name: "Emotional Future Bass & Melodic Dubstep [Vol #1]"},
    {link: "melodic-emotional-trap-hip-hop", name: "Melodic & Emotional Trap, Hip Hop, Hyperpop, Chill Mega Mix [Vol #1]"},
    {link: "manyaoedm", name: "SG/MY Chinese ManYao EDM (Mandarin, Hokkien, Cantonese)"},
]

let menuOpen = false;

function toggleMenu() {
    menuOpen = !menuOpen;
}
</script>

<html lang="en" class="bg-gradient-to-r from-neutral-900 via-gray-900 to-neutral-900 text-neutral-200">

<head>
    <style>

    </style>
    <title>Home of the Distortion</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body class="w-full h-screen font-sans">
    <div class="container mx-auto w-full h-full flex flex-col items-center text-neutral-200/70 font-semibold" id="home">
        <img src="./main2.png" alt="pic" class="w-full h-full object-cover fixed duration-200 animate-[wiggle_0.7s_ease-in-out_infinite] invisible lg:visible">
        <img src="./main3.png" alt="pic" class="w-full h-full object-cover fixed duration-200 animate-[wiggle_0.7s_ease-in-out_infinite] visible lg:invisible object-left">

        <header class="w-full h-12 bg-neutral-500/10 fixed flex justify-center items-center text-xs md:text-sm duration-200 shadow-lg shadow-neutral-500/20 z-[2000]">
            <a href="https://soundcloud.com/aravestia" target="_blank" class="h-full px-4 flex justify-center items-center hover:text-[#FF4710]/80 duration-200 cursor-pointer tracking-tight hover:shadow-lg">SOUNDCLOUD</a>
            <a class="h-full px-4 flex justify-center items-center hover:text-[#ff0000]/80 duration-200 cursor-pointer tracking-tight hover:shadow-lg" href="https://www.youtube.com/channel/UCckrBshEZBghKnWaRA_3nkA" target="_blank">YOUTUBE</a>
            <a class="h-full px-4 flex justify-center items-center hover:text-[#1d9bf0]/80 duration-200 cursor-pointer tracking-tight hover:shadow-lg" href="https://twitter.com/aravestia" target="_blank">TWITTER</a>
            <a class="h-full px-4 flex justify-center items-center hover:text-[#A970FF]/80 duration-200 cursor-pointer tracking-tight hover:shadow-lg" href="https://www.twitch.tv/aravestiaa" target="_blank">TWITCH</a>
        </header>

        <aside class="w-full h-auto relative flex flex-col items-end">
            <img src="menu.svg" alt="menu" class="z-[2100] h-12 p-3 opacity-70 scale-90 hover:opacity-80 hover:bg-neutral-500/20 duration-200 rounded-lg active:scale-[0.8] fixed md:right-12 cursor-pointer" on:click={toggleMenu}>
            
            {#if menuOpen}
            <div class="w-full h-auto z-50 flex flex-col items-start top-12 fixed bg-neutral-800 visible sm:invisible text-sm">
                {#each navLinks as navLink}
                <a class="p-3 w-full shadow shadow-neutral-500/20" href="{navLink.link}">{navLink.name}</a>
                {/each}
            </div>
            {:else}
            <div class="w-48 h-auto z-50 flex flex-col items-center invisible sm:visible top-12 right-12 bg-neutral-800 fixed text-sm">
                {#each navLinks as navLink, i}
                <a class="p-3 w-full hover:text-white/80 duration-200" href="{navLink.link}">{i+1}. {navLink.name}</a>
                {/each}
            </div>
            {/if}   
        </aside>

        <a class="py-4 px-8 absolute top-[80%] flex justify-center text-xs md:text-sm duration-200 items-center bg-neutral-500/50 hover:bg-neutral-500/20 hover:text-white/80 shadow-lg shadow-neutral-500/20 rounded-full duration-200 cursor-pointer tracking-tight hover:shadow-lg hover:shadow-neutral-500/30 z-[5]" href="https://youtu.be/F6j9SJfIczU" target="_blank">WATCH ON YOUTUBE</a>
    </div>
    
    <section class="container mx-auto w-full h-auto flex flex-col justify-center items-center z-10 relative shadow-inner shadow-slate-500/30 bg-neutral-500/5">
        <DivDark divTitle="Aravestia's New Releases" divID="new-releases" divArr={newRels} />

        <DivDark divTitle="Aravestia's Popular Videos" divID="pop-releases" divArr={popRels} isDark={false} />

        <DivDark divTitle="Aravestia's Playlists" divID="playlists" divArr={newRels} isGrid={false}>
            <article class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full p-8">
                {#each playlists as playlist}
                <a href="https://soundcloud.com/aravestia/sets/{playlist.link}" target="_blank" class="flex justify-center items-center p-2 hover:text-[#FF4710]/80 font-semibold tracking-tight duration-200 text-slate-100/80" >{playlist.name}</a>
                {/each}
            </article>
        </DivDark>

        <footer class="bg-neutral-800/70 h-16 w-full flex justify-center items-center text-neutral-100/80" id="contacts">Contact: aloysiusgohkw@gmail.com</footer>
    </section>
</body>

</html>

