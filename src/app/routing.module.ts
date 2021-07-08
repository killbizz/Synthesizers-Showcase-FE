import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SynthsComponent } from './synths/synths.component';
import { SynthNewComponent } from './synth-new/synth-new.component';
import { SynthDetailsComponent } from './synth-details/synth-details.component';
import { SynthEditComponent } from './synth-edit/synth-edit.component';
import { RouteGuardService } from 'src/services/route-guard.service';


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
  },{
    path: 'synths/:id',
    component: SynthDetailsComponent
  },
  {
    path: 'synths/:id/edit',
    canActivate: [RouteGuardService],
    component: SynthEditComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [RouteGuardService]
})
export class RoutingModule { }
