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
                type: 'string',
              },
            ],
            options: {
                'layout': 'grid',
              list: [
                { value: 'Kärlek', title: 'Kärlek' },
                { value: 'Sömn', title: 'Sömn' },
                { value: 'Stress', title: 'Stress' },
                { value: 'Självkänsla', title: 'Självkänsla' },
                { value: 'Kreativitet', title: 'Kreativitet' },
                { value: 'Kommunikation', title: 'Kommunikation' },
                { value: 'Fokus', title: 'Fokus' },
                { value: 'Motivation', title: 'Motivation' },
                { value: 'Balans', title: 'Balans' },
                { value: 'Glädje', title: 'Glädje' },
                { value: 'Mod', title: 'Mod' },
                { value: 'Klarhet', title: 'Klarhet' },
                { value: 'Lugn', title: 'Lugn' },
                { value: 'Kraft', title: 'Kraft' },
                { value: 'Kreativitet', title: 'Kreativitet' },
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
                'layout': 'grid',
                list: [
                    {
                    value: 'Väduren',
                    title: 'Väduren'},
                    {
                    value: 'Oxen',
                    title: 'Oxen'},
                    {
                    value: 'Tvillingarna',
                    title: 'Tvillingarna'},
                    {
                    value: 'Kräftan',
                    title: 'Kräftan'},
                    {
                    value: 'Lejonet',
                    title: 'Lejonet'},
                    {
                    value: 'Jungfrun',
                    title: 'Jungfrun'},
                    {
                    value: 'Vågen',
                    title: 'Vågen'},
                    {
                    value: 'Skorpionen',
                    title: 'Skorpionen'},
                    {
                    value: 'Skytten',
                    title: 'Skytten'},
                    {
                    value: 'Stenbocken',
                    title: 'Stenbocken'},
                    {
                    value: 'Vattumannen',
                    title: 'Vattumannen'},
                    {
                    value: 'Fiskarna',
                    title: 'Fiskarna'},
                ]
            }
        },
    ],
}

export default stone;