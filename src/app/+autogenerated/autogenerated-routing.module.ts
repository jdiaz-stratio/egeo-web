import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { StAutogeneratedDocComponent } from './autogenerated.component';

const routes: Routes = [
   { path: ':id', component: StAutogeneratedDocComponent }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class AutogeneratedRoutingModule { }
