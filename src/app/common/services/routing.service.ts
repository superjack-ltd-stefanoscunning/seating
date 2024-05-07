import { Injectable } from '@angular/core';
import { RouteInfo } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class RoutingService {
  private routes: RouteInfo[] = [
    {
      path: '/home',
      title: 'Home',
      icon: 'menu',
      class: '',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [],
    },
  ];
  constructor() {}

  public getAllRoutes(): RouteInfo[] {
    return this.routes;
  }
}
