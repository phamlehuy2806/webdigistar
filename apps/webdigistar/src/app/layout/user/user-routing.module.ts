import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
        import('../../feature-module/introduction/introduction.module').then((m) => m.IntroductionModule),
      },
      {
        path:'contact',
        loadChildren: () =>
        import('../../feature-module/contact/contact.module').then((m) => m.ContactModule),
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
