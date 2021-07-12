import { AuthService } from './../services/auth.service';
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
  userLogged: boolean = false;

  constructor(private authService: AuthService) {
    this.authService.userSignedIn.subscribe(() => {
      this.userLogged = true;
    });
    this.authService.userLoggedOut.subscribe(() => {
      this.userLogged = false;
    })
   }

  ngOnInit(): void {
    this.userLogged = this.authService.isUserLoggedIn();
  }

  deleteSynthesizer(event: any){
    this.onDeleteSynth.emit(this.synth.id);
  }

}
