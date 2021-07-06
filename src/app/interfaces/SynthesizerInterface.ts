export interface SynthesizerInterface {
    id?: number;
    name: string;
    description: string;
    category: string;
    price: number;
    base64image: string | undefined;
}