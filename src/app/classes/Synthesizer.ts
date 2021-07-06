import { SynthesizerInterface } from './../interfaces/SynthesizerInterface';

export class Synthesizer implements SynthesizerInterface{
    name!: string;
    description!: string;
    category!: string;
    price!: number;
    base64image: string | undefined;

    constructor(name: string, description: string, category: string, price: number, base64image: string | undefined){
        this.name = name;
        this.description = description;
        this.category = category;
        this.price = price;
        this.base64image = base64image;
    }
}