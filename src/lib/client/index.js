import sanityClient from '@sanity/client';

const client = sanityClient({
	projectId: '5q2jqjqw',
	dataset: 'production',
	token: '',
	useCdn: true
});

export { client };
