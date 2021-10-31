import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { AddChefComponent } from './components/add-chef/add-chef.component';
import { AddPlatComponent } from './components/add-plat/add-plat.component';
import { BlogComponent } from './components/blog/blog.component';
import { ChefsComponent } from './components/chefs/chefs.component';
import { DashboardadminComponent } from './components/dashboardadmin/dashboardadmin.component';
import { DashboardchefComponent } from './components/dashboardchef/dashboardchef.component';
import { DisplayplatComponent } from './components/displayplat/displayplat.component';
import { DisplayuserComponent } from './components/displayuser/displayuser.component';
import { EditclientComponent } from './components/editclient/editclient.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { InterfaceadminComponent } from './components/interfaceadmin/interfaceadmin.component';
import { LoginComponent } from './components/login/login.component';
import { PopularMenuComponent } from './components/popular-menu/popular-menu.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'signup',component: SignupComponent},
  {path:'Login',component: LoginComponent},
  {path:'addAdmin',component: AddAdminComponent},
  {path:'addChef',component: AddChefComponent},
  {path:'addPlat',component: AddPlatComponent},
  {path:'dashboardAdmin',component: DashboardadminComponent},
  {path:'dashboardChef',component: DashboardchefComponent},
  {path:'editclient/:id',component:EditclientComponent},
  {path:'footer',component:FooterComponent},
  {path:'popular-menu',component:PopularMenuComponent},
  {path:'chefs',component:ChefsComponent},
  {path:'blog',component:BlogComponent},
  {path:'reservation',component:ReservationComponent},
  {path:'interfaceadmin',component:InterfaceadminComponent},


  //dynamic path
  {path:'displayUser/:id',component: DisplayuserComponent},
  {path:'editAdmin/:id',component: AddAdminComponent},
  {path:'editChef/:id',component: AddChefComponent},
  {path:'displayplat/:id',component: DisplayplatComponent},
  {path:'editplat/:id',component: AddPlatComponent}

  




  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
