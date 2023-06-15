import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DangkyComponent } from './dangky/dangky.component';
import { HomeLoginComponent } from './home-login/home-login.component';
import { baoveGuard } from './baove.guard';

const routes: Routes = [
  { path: '', component:HomeLoginComponent },
  { path: 'dangnhap', component:DangnhapComponent },
  { path: 'dangky', component:DangkyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
