import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { SynthesizerService } from './services/synthesizer.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SynthsComponent } from './synths/synths.component';
import { SynthItemComponent } from './synth-item/synth-item.component';
import { SynthDetailsComponent } from './synth-details/synth-details.component';
import { SynthNewComponent } from './synth-new/synth-new.component';
import { SynthEditComponent } from './synth-edit/synth-edit.component';
import { RoutingModule } from './routing.module';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SynthsComponent,
    SynthItemComponent,
    SynthDetailsComponent,
    SynthNewComponent,
    SynthEditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [SynthesizerService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
