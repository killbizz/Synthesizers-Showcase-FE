import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SynthsComponent } from './synths/synths.component';
import { SynthItemComponent } from './synth-item/synth-item.component';
import { SynthDetailsComponent } from './synth-details/synth-details.component';
import { SynthNewComponent } from './synth-new/synth-new.component';

const routes : Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomepageComponent
  },
  {
    path: 'index',
    pathMatch: 'full',
    redirectTo: ''
  },
  {
    path: 'synths',
    component: SynthsComponent
  },
  {
    path: 'synths/new',
    component: SynthNewComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SynthsComponent,
    SynthItemComponent,
    SynthDetailsComponent,
    SynthNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
