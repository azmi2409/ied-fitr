<script>
	import { onMount } from 'svelte';
	import Audio from '../lib/components/Audio.svelte';
	import Card from '../lib/components/Card.svelte';
	import Comment from '../lib/components/Comment.svelte';

	//add animation on mount using animate.css
	onMount(() => {
		const animate = document.querySelectorAll('.animate__animated');
		animate.forEach((element) => {
			element.classList.add('animate__backInDown');
		});
		window.FastCommentsUI(document.getElementById('fastcomments-widget'), {
			tenantId: 'QQnhHKY25KA'
		});
	});
</script>

<svelte:head>
	<title>Selamat Idul Fitri - Kel. Abdul Hasim</title>
	<meta property="og:title" content="Selamat Idul Fitri - Kel. Abdul Hasim" />
	<meta
		property="og:description"
		content="Selamat Idul Fitri, kelurahan Abdul Hasim, Kec. Kedungkandang, Kabupaten Sukoharjo"
	/>
	<meta property="og:image" content="https://ied-fitr.vercel.app/meta.png" />
	<meta property="og:type" content="website" />
	<meta name="description" content="Selamat Idul Fitri - Kel. Abdul Hasim" />
	<script src="https://cdn.fastcomments.com/js/embed-v2.min.js"></script>
</svelte:head>

<main id="main" class="flex items-center w-screen flex-col gap-5">
	<Card />
	<Comment />
	<Audio />
</main>
