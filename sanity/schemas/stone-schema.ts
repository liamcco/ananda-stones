const stone = {
    name: 'stone',
    title: 'Stones',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
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
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            description: 'Image of the stone',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alternative text',
                    type: 'string',
                    options: {
                        source: 'name',
                    },
                }
            ],
        },
        {
            name: 'tags',
            title: 'Helps with',
            type: 'array',
            of: [
                {
                    type: 'string'
                }
            ],
            options: {
                list: [
                    'Lugnande',
                    'Kärlek',
                    'Kreativitet',
                ], 
            }
        },
        {
            name: 'chakra',
            title: 'Chakra',
            type: 'string',
            options: {
                list: [
                    'Hjärtchakrat',
                    'Solar Plexus',
                    'Baschakrat',
                    'Halschakrat',
                    'Pannchakrat',
                    'Kronchakrat',
                ], 
            }
        },
        {
            name: 'element',
            title: 'Element',
            type: 'string',
            options: {
                list: [
                    'Jord',
                    'Luft',
                    'Eld',
                    'Vatten',
                ], 
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
                list: [
                    'Väduren',
                    'Oxen',
                    'Tvillingarna',
                    'Kräftan',
                    'Lejonet',
                    'Jungfrun',
                    'Vågen',
                    'Skorpionen',
                    'Skytten',
                    'Stenbocken',
                    'Vattumannen',
                    'Fiskarna',
                ], 
            }
        },
    ],
}

export default stone;