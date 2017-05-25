import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadPageComponent } from './lazy-load-page.component'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LazyLoadPageComponent,
      },
    ])
  ],
  declarations: [
    LazyLoadPageComponent
  ]
})
export class LazyLoadPageModule { }
