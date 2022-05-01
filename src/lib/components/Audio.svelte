<script>
	import Icons from '@iconify/svelte';
	import { onMount } from 'svelte';
	import { Howl, Howler } from 'howler';

	const songs = new Howl({
		src: ['song.mp3'],
		loop: true,
		html5: true,
		preload: true,
		autoplay: true
	});
	let audio = true;

	onMount(() => {
		songs.once('load', () => {
			songs.play();
		});
	});

	function toggleAudio() {
		audio = !audio;
		if (audio) {
			songs.play();
		} else {
			songs.pause();
		}
	}
</script>

<div class="fixed top-0 right-0 p-5">
	<div on:click={() => toggleAudio()} class="border-2 rounded-full p-2 cursor-pointer">
		<Icons
			icon="akar-icons:sound-{audio ? 'off' : 'on'}"
			class="text-amber-800 transition-all duration-200"
		/>
	</div>
</div>
