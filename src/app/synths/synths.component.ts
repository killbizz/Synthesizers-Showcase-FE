import { StoredSynthesizer } from 'src/app/classes/StoredSynthesizer';
import { deleteSynthesizer, getSynthesizers } from './../../services/synthesizer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-synths',
  templateUrl: './synths.component.html',
  styleUrls: ['./synths.component.css']
})
export class SynthsComponent implements OnInit {

  synths: StoredSynthesizer[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getAllSynthesizers();
  }

  getAllSynthesizers = async () => {
    this.synths = await getSynthesizers();
  }

  deleteSynthesizer = async (id: number) => {
    await deleteSynthesizer(id);
    this.getAllSynthesizers();
  }

}
