export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },

    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text'
    },

    {
      title: 'Links',
      name: 'link',
      type: 'object',
      fields: [
        {
          title: 'URL',
          name: 'href',
          type: 'url',
        },
      ],
    },

    {
      name: 'read',
      title: 'Read',
      type: 'string',
    },

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

    {
      title: 'Featured Post?',
      name: 'released',
      type: 'boolean'
    },

    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },

    {
      name: 'categorias',
      title: 'Categorias',
      type: 'string'
    },
        
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'date',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
