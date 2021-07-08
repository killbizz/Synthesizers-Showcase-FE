import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SynthsComponent } from './synths/synths.component';
import { SynthNewComponent } from './synth-new/synth-new.component';
import { SynthDetailsComponent } from './synth-details/synth-details.component';
import { SynthEditComponent } from './synth-edit/synth-edit.component';
import { RouteGuardService } from 'src/app/services/route-guard.service';
import { AuthService } from './services/auth.service';


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
    component: SynthNewComponent,
    canActivate: [RouteGuardService]
  },{
    path: 'synths/:id',
    component: SynthDetailsComponent
  },
  {
    path: 'synths/:id/edit',
    canActivate: [RouteGuardService],
    component: SynthEditComponent
  },
  {
    path: 'login',
    component: LoginComponent
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
