import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <app-host-dashboard *abpPermission="'WeGuide.Dashboard.Host'"></app-host-dashboard>
    <app-tenant-dashboard *abpPermission="'WeGuide.Dashboard.Tenant'"></app-tenant-dashboard>
  `,
})
export class DashboardComponent {}
