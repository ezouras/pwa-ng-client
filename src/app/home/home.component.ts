import { Component, OnInit } from '@angular/core';
import { SwPush, SwUpdate } from "@angular/service-worker";
import { PwaService } from "../services/pwa.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'pwa';
  readonly VAPID_PUBLIC_KEY = "BBobCiHo-HhUnv1pXD0hRGGgnEGiWfPVxSiRnfHw3M6b2e3AV4Qt0xhca5vdU5y948cgXms50iYo44CxZjosM-g";

  userSubscribed: boolean = false;

  constructor(private swUpdate: SwUpdate, private swPush: SwPush,
    private pwaService: PwaService) { }
  ngOnInit() {
    /*Emits the currently active PushSubscription associated
    to the Service Worker registration or null if
    there is no subscription.*/
    const swPushSubscription: Observable<any> = this.swPush.subscription;
    swPushSubscription.subscribe(data => {
      console.log("current subscription: ", data)
      this.userSubscribed = data === null ? false : true;
    })

  }

  requestSubscription() {
    console.log("request subscription!")
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    }).then(sub => {
      this.pwaService.addPushSubscriber(sub).subscribe(
        (data) => console.log("post successfull!", data))
    })
      .catch(err => console.error("Could not subscribe to notifications", err));

    // for testing post using ng serve only
    /*
      this.pwaService.addPushSubscriber("whatevs").subscribe(
        (data) => console.log("post successfull!", data))
    */
  }



}
