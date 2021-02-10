import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';

const appRoutes: Routes = [
  { path: 'test1', component: Test1Component },
  { path: 'test2', component: Test2Component },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: true }),
    BrowserModule, FormsModule],
  declarations: [AppComponent, PageNotFoundComponent, Test1Component, Test2Component],
  bootstrap: [AppComponent]
})
export class AppModule { }
