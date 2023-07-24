import { zodiacEntries, elementEntries, tagEntries, chakraEntries, monthEntries } from './stonePropertiesData';


const stone = {
    name: 'stone',
    title: 'Stones',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Namn',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
            },
        },
        {
            name: 'subtitle',
            title: 'Underrubrik',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Beskrivning',
            type: 'text',
        },
        {
            name: 'image',
            title: 'Bild',
            type: 'image',
            description: 'Bild av stenen',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'tags',
            title: 'Hjälpområde',
            type: 'array',
            of: [
              {
                type: 'string',
              },
            ],
            options: {
              'layout': 'grid',
              list: tagEntries,
            }
        },
        {
            name: 'chakra',
            title: 'Chakra',
            type: 'array',
            of: [
                {
                    type: 'string'
                }
            ],
            options: {
                'layout': 'grid',
                list: chakraEntries,
            }
        },
        {
            name: 'element',
            title: 'Element',
            type: 'array',
            of: [
                {
                    type: 'string'
                }
            ],
            options: {
                'layout': 'grid',
                list: elementEntries,
            }
        },
        {
            name: 'zodiac',
            title: 'Zodiac',
            type: 'array',
            of: [
                {
                    type: 'string'
                }
            ],
            options: {
                'layout': 'grid',
                list: zodiacEntries,
            }
        },
        {
            name: 'month',
            title: 'Månad',
            type: 'array',
            of: [
                {
                    type: 'string'
                }
            ],
            options: {
                'layout': 'grid',
                list: monthEntries,
            }
        },
        {
            name: 'instore',
            title: 'Finns i butik',
            type: 'boolean',
        }
    ],
}

export default stone;