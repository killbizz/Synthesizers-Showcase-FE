import { getSynthesizers } from './../../services/synthesizer';
import { SynthesizerInterface } from './../interfaces/SynthesizerInterface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-synths',
  templateUrl: './synths.component.html',
  styleUrls: ['./synths.component.css']
})
export class SynthsComponent implements OnInit {

  synths: SynthesizerInterface[] = [];

  getAllSynthesizers = async () => {
    this.synths = await getSynthesizers();
  }

  constructor() { }

  ngOnInit(): void {
    this.getAllSynthesizers();
  }

}
