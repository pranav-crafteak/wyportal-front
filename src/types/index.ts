export interface Template {
    id: number;
    title: string;
    description: string;
    image: string;
    multiUser: boolean;
    cloudZones: string[];
    instancePower: string;
}

export interface Section {
    id: string;
    type: 'text' | 'image';
    content: string;
}

export interface Page {
    id: string;
    name: string;
    sections: Section[];
}

export interface AppMetadata {
    pages: Page[];
}

export interface App {
    id: string;
    name: string;
    description: string;
}
