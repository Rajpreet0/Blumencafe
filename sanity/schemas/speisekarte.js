export default {
    name: 'speisekarte',
    title: 'Speisekarte',
    type: 'document',
    fields: [
        {
          name: 'speisekarte',
          title: 'Speisekarte',
          description: 'Hier kann immer die aktuelle Speisekarte hinzugefügt werden',
          type: 'image',
          validation: (Rule) => Rule.required(),
        },
    ]
}