<script>
	import { onMount } from 'svelte';

	//add animation on mount using animate.css
	onMount(() => {
		const animate = document.querySelectorAll('.animate__animated');
		animate.forEach((element) => {
			element.classList.add('animate__backInDown');
		});
	});
</script>

<svelte:head>
	<title>Selamat Idul Fitri - Kel. Abdul Hasim</title>
	<meta name="description" content="Selamat Idul Fitri - Kel. Abdul Hasim" />
</svelte:head>

<main class="flex items-center w-screen flex-col">
	<div class="text-3xl h-full w-full flex justify-center items-center flex-col p-2">
		<div class="relative animate__animated">
			<img src="background.png" alt="bg" class="-z-10 rounded-xl invisible max-h-full" />
			<img src="background.png" alt="bg" class="-z-10 rounded-xl absolute inset-0 max-h-full" />
			<div class="absolute inset-0 text-center text-amber-800">
				<div id="ucapan" class="py-20 px-10 flex flex-col justify-around h-full uppercase">
					<p class="capitalize animate__animated font-semibold animate__delay-1s" id="heading">
						Abdul Hasim dan keluarga mengucapkan :
					</p>
					<p class="animate__animated animate__delay-2s">selamat hari raya</p>
					<p class="animate__animated capitalize text-5xl animate__delay-2s" id="ied">Idul Fitri</p>
					<p class="font-bold animate__animated animate__delay-2s">1443 H</p>
					<p class="uppercase px-5 animate__animated text-base animate__delay-3s">
						TaqabbalallaHu minna wa minkum Taqabbal ya kariim minal aidin wal faidzin mohon maaf
						lahir dan batin
					</p>
				</div>
			</div>
		</div>
	</div>
</main>
