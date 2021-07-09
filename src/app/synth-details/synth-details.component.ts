import { SynthesizerService } from './../services/synthesizer.service';
import { StoredSynthesizer } from 'src/app/classes/StoredSynthesizer';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-synth-details',
  templateUrl: './synth-details.component.html',
  styleUrls: ['./synth-details.component.css']
})
export class SynthDetailsComponent implements OnInit {

  userLogged: boolean = false;
  synth: StoredSynthesizer = new StoredSynthesizer();
  id!: number;

  constructor(private synthesizerService: SynthesizerService, private authService: AuthService, private route: ActivatedRoute) {
    this.route.params.subscribe(
      (params) => {
        this.id = params.id;
      }
    );
    this.authService.userSignedIn.subscribe(() => {
      this.userLogged = true;
    });
    this.authService.userLoggedOut.subscribe(() => {
      this.userLogged = false;
    })
  }

  ngOnInit(): void {
    this.getSynthesizerById();
    this.userLogged = this.authService.isUserLoggedIn();
  }

  getSynthesizerById = async () : Promise<void> => {
    this.synth = await this.synthesizerService.getSynthesizer(this.id);
  }

}
