import { SynthesizerInterface } from './../interfaces/SynthesizerInterface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-synth-item',
  templateUrl: './synth-item.component.html',
  styleUrls: ['./synth-item.component.css']
})
export class SynthItemComponent implements OnInit {

  @Input() synth!: SynthesizerInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
