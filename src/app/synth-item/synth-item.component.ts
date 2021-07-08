import { StoredSynthesizer } from 'src/app/classes/StoredSynthesizer';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-synth-item',
  templateUrl: './synth-item.component.html',
  styleUrls: ['./synth-item.component.css']
})
export class SynthItemComponent implements OnInit {

  @Input() synth!: StoredSynthesizer;
  @Output() onDeleteSynth = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteSynthesizer(event: any){
    this.onDeleteSynth.emit(this.synth.id);
  }

}
