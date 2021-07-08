import { StoredSynthesizer } from 'src/app/classes/StoredSynthesizer';
import { getSynthesizer } from './../../services/synthesizer';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-synth-details',
  templateUrl: './synth-details.component.html',
  styleUrls: ['./synth-details.component.css']
})
export class SynthDetailsComponent implements OnInit {

  synth: StoredSynthesizer = new StoredSynthesizer();
  id!: number;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(
      (params) => {
        this.id = params.id;
      }
    );
  }

  ngOnInit(): void {
    this.getSynthesizerById();
  }

  getSynthesizerById = async () : Promise<void> => {
    this.synth = await getSynthesizer(this.id);
  }

}
