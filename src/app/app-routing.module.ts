import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () =>import("./shared/shared.module").then( m=> m.SharedModule)
  },
  {
    path: 'admin', loadChildren: () =>import("./layout/layout.module").then(m=> m.LayoutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
