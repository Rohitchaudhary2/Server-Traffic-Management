import { Component } from '@angular/core';
import { ServerStatusComponent } from "./server-status/server-status.component";
import { TrafficComponent } from "./traffic/traffic.component";
import { SupportTicketComponent } from "./support-ticket/support-ticket.component";
import { DashboardItemComponent } from "./dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ServerStatusComponent, TrafficComponent, SupportTicketComponent, DashboardItemComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  

}
