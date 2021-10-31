import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { PopularDishComponent } from './components/popular-dish/popular-dish.component';
import { HistoryComponent } from './components/history/history.component';
import { PopularMenuComponent } from './components/popular-menu/popular-menu.component';
import { ChefsComponent } from './components/chefs/chefs.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { BlogComponent } from './components/blog/blog.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { AddChefComponent } from './components/add-chef/add-chef.component';
import { AddPlatComponent } from './components/add-plat/add-plat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardadminComponent } from './components/dashboardadmin/dashboardadmin.component';
import { DashboardchefComponent } from './components/dashboardchef/dashboardchef.component';
import { DisplayuserComponent } from './components/displayuser/displayuser.component';
import { DisplayplatComponent } from './components/displayplat/displayplat.component';
import { ChefComponent } from './components/chef/chef.component';
import { ReversPipe } from './pipes/revers.pipe';
import { EspacePipe } from './pipes/espace.pipe';
import { EditclientComponent } from './components/editclient/editclient.component';
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';  
//import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { InterfaceadminComponent } from './components/interfaceadmin/interfaceadmin.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BannerComponent,
    PopularDishComponent,
    HistoryComponent,
    PopularMenuComponent,
    ChefsComponent,
    ReservationComponent,
    BlogComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    AddAdminComponent,
    AddChefComponent,
    AddPlatComponent,
    DashboardadminComponent,
    DashboardchefComponent,
    DisplayuserComponent,
    DisplayplatComponent,
    ChefComponent,
    ReversPipe,
    EspacePipe,
    EditclientComponent,
    InterfaceadminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    //InMemoryWebApiModule.forRoot(DataService),
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
