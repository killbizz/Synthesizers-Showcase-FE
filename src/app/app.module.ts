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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SynthsComponent,
    SynthItemComponent,
    SynthDetailsComponent,
    SynthNewComponent,
    SynthEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
