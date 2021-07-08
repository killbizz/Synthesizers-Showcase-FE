import { StoredSynthesizer } from 'src/app/classes/StoredSynthesizer';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fileToBase64, getSynthesizer, updateSynthesizer } from 'src/services/synthesizer';
import { NewSynthesizer } from '../classes/NewSynthesizer';

@Component({
  selector: 'app-synth-edit',
  templateUrl: './synth-edit.component.html',
  styleUrls: ['./synth-edit.component.css']
})
export class SynthEditComponent implements OnInit {

  id!: number;
  synth: StoredSynthesizer = new StoredSynthesizer();

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe((params) => {
      this.id = params.id;
    });
   }

  ngOnInit(): void {
    this.getSynthesizerById(this.id);
  }

  getSynthesizerById = async (id: number) : Promise<void> => {
    this.synth = await getSynthesizer(id);
  }

  uploadSynthesizer = async (event: any) => {
    event.preventDefault();

    // Form parameters extraction
    const fileObject = event.target.image.files[0];
    let base64StringImage: string = "";
    if (fileObject) {
      base64StringImage = await fileToBase64(fileObject);
    }
    const name: string = event.target.name.value ? event.target.name.value : this.synth.name;
    const description: string = event.target.description.value ? event.target.description.value : this.synth.description;
    const price: number = event.target.price.value !== "" ? event.target.price.value : this.synth.price ;
    const image: string | undefined = base64StringImage !== "" ? base64StringImage : this.synth.base64image;
    const category: string = event.target.category.value ? event.target.category.value : this.synth.category;

    const synth: NewSynthesizer = new NewSynthesizer(name, description, category, price, image);

    await updateSynthesizer(this.id, synth)
    this.router.navigateByUrl('/synths');
  }

}
