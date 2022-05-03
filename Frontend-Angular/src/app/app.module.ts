import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserModule } from '@angular/platform-browser';
import { InfiniteTypeDeleteModule } from "ngx-sbz-type-delete";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.component';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExpdialogComponent } from './components/experience/expdialog/expdialog.component';
import { EdudialogComponent } from './components/experience/edudialog/edudialog.component';
import { SingleProjectComponent } from './components/projects/single-project/single-project.component';
import { ProdialogComponent } from './components/projects/prodialog/prodialog.component';
import { AboutdialogComponent } from './components/about/aboutdialog/aboutdialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    ExpdialogComponent,
    EdudialogComponent,
    SingleProjectComponent,
    ProdialogComponent,
    AboutdialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    LayoutModule,
    InfiniteTypeDeleteModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
