import { SynthesizerService } from './../../services/synthesizer.service';
import { StoredSynthesizer } from 'src/app/classes/StoredSynthesizer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-synths',
  templateUrl: './synths.component.html',
  styleUrls: ['./synths.component.css']
})
export class SynthsComponent implements OnInit {

  synths: StoredSynthesizer[] = [];

  constructor(private synthesizerService: SynthesizerService) { }

  ngOnInit(): void {
    this.getAllSynthesizers();
  }

  getAllSynthesizers = async () => {
    this.synths = await this.synthesizerService.getSynthesizers();
  }

  deleteSynthesizer = async (id: number) => {
    await this.synthesizerService.deleteSynthesizer(id);
    this.getAllSynthesizers();
  }

}
