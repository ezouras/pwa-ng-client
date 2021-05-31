import { Component, OnInit } from '@angular/core';
import { PwaService } from "../services/pwa.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-view-subscriptions',
  templateUrl: './view-subscriptions.component.html',
  styleUrls: ['./view-subscriptions.component.css']
})
export class ViewSubscriptionsComponent implements OnInit {
  stillLoading = true;
  subscriptions: any = [];

  constructor(private pwaService: PwaService) { }

  ngOnInit(): void {
    this.pwaService.getSubscribers().subscribe((data) => {
      this.subscriptions = data;
      this.stillLoading = false;
      if (this.subscriptions.length === 0) {
        alert("sorry - no subscribers yet")
      }
    },
      error => console.log("could not get subscriptions: ", error))
  }



}
