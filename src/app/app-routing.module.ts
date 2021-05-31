import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ViewSubscriptionsComponent } from './view-subscriptions/view-subscriptions.component';
import { SendNotificationsComponent } from './send-notifications/send-notifications.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'view-subscriptions', component: ViewSubscriptionsComponent },
  { path: 'send-notifications', component: SendNotificationsComponent },
  { path: '', component: HomeComponent }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
