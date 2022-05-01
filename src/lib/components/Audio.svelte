<script>
	import Icons from '@iconify/svelte';
	import { onMount } from 'svelte';
	let audio = true;

	onMount(() => {
		setTimeout(() => {
			document.getElementById('song').play();
		}, 1000);
	});

	function toggleAudio() {
		audio = !audio;
		if (audio) {
			document.getElementById('song').play();
		} else {
			document.getElementById('song').pause();
		}
	}
</script>

<audio id="song" src="song.mp3" type="audio/mpeg" autoplay loop />
<div class="fixed top-0 right-0 p-5">
	<div on:click={() => toggleAudio()} class="border-2 rounded-full p-2 cursor-pointer">
		<Icons
			icon="akar-icons:sound-{audio ? 'off' : 'on'}"
			class="text-amber-800 transition-all duration-200"
		/>
	</div>
</div>
