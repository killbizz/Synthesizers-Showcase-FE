import { Synthesizer } from './../classes/Synthesizer';
import { fileToBase64, insertSynthesizer } from './../../services/synthesizer';
import { Component, OnInit } from '@angular/core';

// TODO refactor dei services

@Component({
  selector: 'app-synth-new',
  templateUrl: './synth-new.component.html',
  styleUrls: ['./synth-new.component.css']
})
export class SynthNewComponent implements OnInit {

  base64textString: string[] = [];

  constructor(){
  }

  ngOnInit(): void {
  }

  onUploadChange(evt: any) {
    const file = evt.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  handleReaderLoaded(e: any) {
    this.base64textString.push('data:image/png;base64,' + btoa(e.target.result));
  }

  createNewSynthesizer = async (event: any) => {
    event.preventDefault();

    // Form parameters extraction
    const fileObject = event.target.image.files[0];
    let base64StringImage: string = "";
    if (fileObject) {
      base64StringImage = await fileToBase64(fileObject);
    }
    const name: string = event.target.name.value ? event.target.name.value : "";
    const description: string = event.target.description.value ? event.target.description.value : "";
    const price: number = event.target.price.value ;
    const image: string = base64StringImage !== "" ? base64StringImage : "";
    const category: string = event.target.category.value ? event.target.category.value : ""

    const synth: Synthesizer = new Synthesizer(name, description, category, price, image);

    await insertSynthesizer(synth);
  }

}
