import { Component, OnInit } from '@angular/core';
import { PwaService } from "../services/pwa.service";

@Component({
  selector: 'app-send-notifications',
  templateUrl: './send-notifications.component.html',
  styleUrls: ['./send-notifications.component.css']
})
export class SendNotificationsComponent implements OnInit {
  notificationsMessages: Array<string> = [
    "New feature available!",
    "Alert! Temperature too high!",
    "Alarm system is activated!",
    "Sprinkler system is activated!",
    "Feature two available!"
  ];

  notificationsSent = 0;

  constructor(private pwaService: PwaService) { }

  ngOnInit(): void {
  }
  pushANotification() {
    let pushMessage = this.notificationsMessages[this.notificationsSent];
    if (!pushMessage) {
      alert("sorry, you have exceded notifications you can send!")
    }
    else {
      this.notificationsSent++;
      console.log("about to post. message is: ", pushMessage)
      this.pwaService.pushANotification(pushMessage).subscribe(
        (data) => console.log("post worked. message sent is: ", data),
        (error) => console.log("error in trying to push notification:", error)
      )

    }
  }

}
