import { SynthesizerInterface } from './../interfaces/SynthesizerInterface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-synths',
  templateUrl: './synths.component.html',
  styleUrls: ['./synths.component.css']
})
export class SynthsComponent implements OnInit {

  synths: SynthesizerInterface[] = [
    {
      id: 10,
      name: "synth",
      description: "synth",
      category: "synth",
      price: 10,
      base64image: undefined
    },
    {
      id: 10,
      name: "synth",
      description: "synth",
      category: "synth",
      price: 10,
      base64image: undefined
    },
    {
      id: 10,
      name: "synth",
      description: "synth",
      category: "synth",
      price: 10,
      base64image: undefined
    },
    {
      id: 10,
      name: "synth",
      description: "synth",
      category: "synth",
      price: 10,
      base64image: undefined
    },
    {
      id: 10,
      name: "synth",
      description: "synth",
      category: "synth",
      price: 10,
      base64image: undefined
    },{
      id: 10,
      name: "synth",
      description: "synth",
      category: "synth",
      price: 10,
      base64image: undefined
    },
    {
      id: 10,
      name: "synth",
      description: "synth",
      category: "synth",
      price: 10,
      base64image: undefined
    },
    {
      id: 10,
      name: "synth",
      description: "synth",
      category: "synth",
      price: 10,
      base64image: undefined
    }
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
