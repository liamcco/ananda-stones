import { zodiacEntries, elementEntries, tagEntries, chakraEntries, monthEntries } from './stonePropertiesData';
import type { Rule } from '@sanity/types';

const stone = {
    name: 'stone',
    title: 'Stones',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Namn',
            type: 'string',
            validation: (rule: Rule) => rule.required()
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
            },
            validation: (rule: Rule) => rule.required()
        },
        {
            name: 'subtitle',
            title: 'Underrubrik',
            type: 'string',
            validation: (rule: Rule) => rule.required()
        },
        {
            name: 'description',
            title: 'Beskrivning',
            type: 'text',
            validation: (rule: Rule) => rule.required()
        },
        {
            name: 'image',
            title: 'Bild',
            type: 'image',
            description: 'Bild av stenen',
            options: {
                hotspot: true,
            },
            validation: (rule: Rule) => rule.required()
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
            },
            validation: (rule: Rule) => rule.required()
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