import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { DeveloperComponent } from './developer/developer.component';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = [
  {path: '', component: DeveloperComponent },
  {path: 'developer', component: DeveloperComponent},
  {path: 'project', component: ProjectComponent  },
  // {path: 'project/:id', component: ProjectComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    DeveloperComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
