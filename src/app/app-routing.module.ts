import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './pages/first/first.component';
import { SecondComponent } from './pages/second/second.component';
import { ThirdComponent } from './pages/third/third.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {path:"1",component:FirstComponent},
  {path:"2",component:SecondComponent},
  {path:"3",component:ThirdComponent},
  {path:"",component:MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
