export interface NeuigkeitData {
    _id: string;
    titel: string;
    zeitraum: string;
    slug: {
        current: string;
    };
    neuigkeitenBild: {
        asset: {
            url: string;
        };
    };
    beschreibung: [object];
}


export interface SpeisekarteData {
    _id: string;
    speisekarte: {
        asset: {
            url: string;
        }
    }
}