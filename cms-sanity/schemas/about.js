export default {
    name: 'about',
    title: 'About',
    type: 'document',

    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
            hotspot: true,
            },
        },

        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },

        {
            name: 'text',
            title: 'Text',
            type: 'text'
        },
    ]
    
}