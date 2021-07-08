import { Synthesizer } from '../interfaces/Synthesizer';

export class StoredSynthesizer implements Synthesizer{
    id: number = 0;
    name: string = "";
    description: string = "";
    category: string = "";
    price: number = 0;
    base64image: string | undefined;

    constructor(){
    }
}