export default {
	name: 'comment',
	title: 'Comment',
	type: 'document',
	fields: [
		{
			name: 'author',
			title: 'Author',
			type: 'string',
			validation: (Rule) => Rule.required()
		},
		{
			name: 'text',
			title: 'Text',
			type: 'text',
			validation: (Rule) => Rule.required()
		},
		{
			name: 'createdAt',
			title: 'Created at',
			type: 'datetime',
			validation: (Rule) => Rule.required()
		}
	]
};
