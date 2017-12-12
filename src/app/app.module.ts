import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CakeListComponent} from './cake-list/cake-list.component';
import {CakeDetailsComponent} from './cake-details/cake-details.component';
import {RouterModule, Routes} from '@angular/router';
import {CakeApiService} from './service/cake-api.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const appRoutes: Routes = [
  {path: 'cakes-list', component: CakeListComponent},
  {path: 'cake-details', component: CakeDetailsComponent},
  {path: 'cake-details/:cakeId', component: CakeDetailsComponent},
  {path: '**', component: CakeListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CakeListComponent,
    CakeDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: false})
  ],
  providers: [
    CakeApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
