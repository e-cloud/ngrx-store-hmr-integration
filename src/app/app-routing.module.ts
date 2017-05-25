import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { NormalPageComponent } from './normal-page/normal-page.component'

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'normal', pathMatch: 'full' },
      { path: 'normal', component: NormalPageComponent },
      { path: 'lazy-load', loadChildren: 'app/lazy-load-page/lazy-load-page.module#LazyLoadPageModule' },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
