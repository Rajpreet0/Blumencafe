export default {
    name: 'neuigkeiten',
    title: 'Neuigkeiten',
    type: 'document',
    fields: [
        {
            name: 'titel',
            title: 'Titel',
            description: 'Titel der Neugikeit z.B: 25% Rabatt',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            description: 'Bitte hier einfach auf "Generate" klicken.',
            type: 'slug',
            options: {
                source: 'titel',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'zeitraum',
            title: 'Zeitraum',
            description: 'Hier bitte den Zeitraum angeben oder ein Datum wie lange bzw. von wann die Neuigkeit ist.',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'beschreibung',
            title: 'Beschreibung',
            description: 'Hier soll das Thema genauer beschriben werden auch Bilder können hier hinzugefügt werden.',
            type: 'blockContent',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'neuigkeitenBild',
            title: 'Hintergrund Bild',
            description: 'Hier kann ein Hintergrund hin.',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
          name: 'todaydate',
          title: 'Heutige Datum',
          description: 'Wählen Sie bitte hier einfach das aktuelle Datum aus, dies ist wichtig für die Reihenfolge !',
          type: 'datetime',   
          validation: (Rule) => Rule.required(),
        }
    ]
}