import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TwoSeats60cmComponent } from '../../table-seating-templates';
import { TwoSeats60By75cmComponent } from '../../table-seating-templates/rectangle';
import { DynamicComponentItem } from '../dynamic/dynamiccomponent-item';
import { LayoutMenuItem } from '../interfaces';

@Injectable({ providedIn: 'root' })
export class DynamicComponentService {
  constructor(private http: HttpClient) {}

  loadComponents(location: string, components: any[]) {
    let list: any[] = [];
    components.forEach((x) => {
      try {
        let c = this.fetchDynamicComponent(
          location,
          x,
          x.component.codeReference
        );
        if (c != null) {
          list.push(c);
        }
      } catch (error) {}
    });
    return list;
  }

  public loadMenuComponents(
    location: string,
    item: LayoutMenuItem,
    type: string
  ): DynamicComponentItem[] {
    let list: DynamicComponentItem[] = [];
    try {
      let c = this.fetchDynamicComponent(location, item, type);
      if (c !== null) {
        list.push(c);
      }
    } catch (error) {}

    return list;
  }

  fetchDynamicComponent(
    componentlocation: string,
    componentinfo: any,
    type: string
  ) {
    switch (type) {
      case '2seat60':
        return new DynamicComponentItem(
          TwoSeats60cmComponent,
          componentlocation,
          componentinfo
        );
        break;
      case '2seat60By75':
        return new DynamicComponentItem(
          TwoSeats60By75cmComponent,
          componentlocation,
          componentinfo
        );
        break;
      default:
        return null;
        break;
    }
  }
}
