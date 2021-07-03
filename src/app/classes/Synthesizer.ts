import { SynthesizerInterface } from './../interfaces/SynthesizerInterface';

export class Synthesizer implements SynthesizerInterface{
    id!: number;
    name!: string;
    description!: string;
    category!: string;
    price!: number;
    base64image: string | undefined; 
}