import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Chat1Component } from './chat1/chat1.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [{ path: 'login', component: ListComponent },
{path: 'chat1', component: Chat1Component}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
