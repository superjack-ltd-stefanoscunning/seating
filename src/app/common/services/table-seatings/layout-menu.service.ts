import { Injectable } from '@angular/core';
import ShortId from '../../helpers/short-id';
import { LayoutMenu } from '../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class LayoutMenuService {
  private generateShortId(): string {
    const short = new ShortId({ length: 8 });
    const shortId = short.rnd();
    return shortId;
  }
  private getMenu(): LayoutMenu {
    const menu: LayoutMenu = {
      id: 1,
      name: 'Visual Design',
      description:
        'Just click on any button and the element will appear on the layout designer',
      groups: [
        {
          id: 1,
          name: 'Circle tables',
          items: [
            {
              id: 1,
              type: '2seat60',
              name: '60cm - 2 seats',
              table: {
                id: '1',
                type: '2seat60',
                name: '60cm - 2 seats',
                shortId: this.generateShortId(),
                sequence: 0,
                class: 'table_circ',
                fill: '#ffffaa',
                stroke: '#000000',
                label: 'T1',
                labelId: 'T1',
                labelClass: 'table-text',
                labelFill: '#000000',
                labelStroke: '#000000',
                size: '60cm',
                sizeId: 'TS1',
                sizeClass: 'table-size-text',
                sizeFill: '#000000',
                sizeStroke: '#000000',
                width: '100',
                height: '50',
                tableWidth: 60,
                tableHeight: 60,
                seats: [
                  {
                    id: '1',
                    groupId: '1',
                    shortId: this.generateShortId(),
                    name: 'Seat',
                    sequence: 1,
                    class: 'seat',
                    fill: '#aad4ff',
                    stroke: '#000000',
                    label: 'S1',
                    labelId: 'S1',
                    labelClass: 'seat-text',
                    labelFill: '#000000',
                    labelStroke: '#000000',
                  },
                  {
                    id: '2',
                    groupId: '2',
                    shortId: this.generateShortId(),
                    name: 'Seat',
                    sequence: 2,
                    class: 'seat',
                    fill: '#aad4ff',
                    stroke: '#000000',
                    label: 'S2',
                    labelId: 'S2',
                    labelClass: 'seat-text',
                    labelFill: '#000000',
                    labelStroke: '#000000',
                  },
                ],
              },
            },
            {
              id: 2,
              type: '4seat80',
              name: '80cm - 4 seats',
              table: {
                id: '1',
                type: '4seat80',
                name: '80cm - 4 seats',
                shortId: this.generateShortId(),
                sequence: 0,
                class: 'table_circ',
                fill: '#ffffaa',
                stroke: '#000000',
                label: 'T1',
                labelId: 'T1',
                labelClass: 'table-text',
                labelFill: '#000000',
                labelStroke: '#000000',
                size: '80cm',
                sizeId: 'TS1',
                sizeClass: 'table-size-text',
                sizeFill: '#000000',
                sizeStroke: '#000000',
                width: '100',
                height: '100',
                tableWidth: 80,
                tableHeight: 80,
                seats: [
                  {
                    id: '1',
                    groupId: '1',
                    shortId: this.generateShortId(),
                    name: 'Seat',
                    sequence: 1,
                    class: 'seat',
                    fill: '#aad4ff',
                    stroke: '#000000',
                    label: 'S1',
                    labelId: 'S1',
                    labelClass: 'seat-text',
                    labelFill: '#000000',
                    labelStroke: '#000000',
                  },
                  {
                    id: '2',
                    groupId: '2',
                    shortId: this.generateShortId(),
                    name: 'Seat',
                    sequence: 2,
                    class: 'seat',
                    fill: '#aad4ff',
                    stroke: '#000000',
                    label: 'S2',
                    labelId: 'S2',
                    labelClass: 'seat-text',
                    labelFill: '#000000',
                    labelStroke: '#000000',
                  },
                  {
                    id: '3',
                    groupId: '3',
                    shortId: this.generateShortId(),
                    name: 'Seat',
                    sequence: 3,
                    class: 'seat',
                    fill: '#aad4ff',
                    stroke: '#000000',
                    label: 'S3',
                    labelId: 'S3',
                    labelClass: 'seat-text',
                    labelFill: '#000000',
                    labelStroke: '#000000',
                  },
                  {
                    id: '4',
                    groupId: '4',
                    shortId: this.generateShortId(),
                    name: 'Seat',
                    sequence: 4,
                    class: 'seat',
                    fill: '#aad4ff',
                    stroke: '#000000',
                    label: 'S4',
                    labelId: 'S4',
                    labelClass: 'seat-text',
                    labelFill: '#000000',
                    labelStroke: '#000000',
                  },
                ],
              },
            },
          ],
        },
        {
          id: 2,
          name: 'Rectangle tables',
          items: [
            {
              id: 1,
              type: '2seat60by75',
              name: '60X75cm - 2 seats',
              table: {
                id: '1',
                type: '2seat60by75',
                name: '60x75cm - 2 seats',
                shortId: this.generateShortId(),
                sequence: 0,
                class: 'table_rect',
                fill: '#d4aaff',
                stroke: '#000000',
                label: 'T1',
                labelId: 'T1',
                labelClass: 'table-text',
                labelFill: '#000000',
                labelStroke: '#000000',
                size: '60cm',
                sizeId: 'TS1',
                sizeClass: 'table-size-text',
                sizeFill: '#000000',
                sizeStroke: '#000000',
                width: '150',
                height: '100',
                tableWidth: 60,
                tableHeight: 75,
                seats: [
                  {
                    id: '1',
                    groupId: '1',
                    shortId: this.generateShortId(),
                    name: 'Seat',
                    sequence: 1,
                    class: 'seat',
                    fill: '#aad4ff',
                    stroke: '#000000',
                    label: 'S1',
                    labelId: 'S1',
                    labelClass: 'seat-text',
                    labelFill: '#000000',
                    labelStroke: '#000000',
                  },
                  {
                    id: '2',
                    groupId: '2',
                    shortId: this.generateShortId(),
                    name: 'Seat',
                    sequence: 2,
                    class: 'seat',
                    fill: '#aad4ff',
                    stroke: '#000000',
                    label: 'S2',
                    labelId: 'S2',
                    labelClass: 'seat-text',
                    labelFill: '#000000',
                    labelStroke: '#000000',
                  },
                ],
              },
            },
          ],
        },
        {
          id: 3,
          name: 'Square tables',
          items: [
            {
              id: 1,
              type: '2seat60by60',
              name: '60X60cm - 2 seats',
              table: {
                id: '1',
                type: '2seat60by60',
                name: '60x75cm - 2 seats',
                shortId: this.generateShortId(),
                sequence: 0,
                class: 'table_sq',
                fill: '#ffaaaa',
                stroke: '#000000',
                label: 'T1',
                labelId: 'T1',
                labelClass: 'table-text',
                labelFill: '#000000',
                labelStroke: '#000000',
                size: '60cm',
                sizeId: 'TS1',
                sizeClass: 'table-size-text',
                sizeFill: '#000000',
                sizeStroke: '#000000',
                width: '150',
                height: '199',
                tableWidth: 60,
                tableHeight: 60,
                seats: [
                  {
                    id: '1',
                    groupId: '1',
                    shortId: this.generateShortId(),
                    name: 'Seat',
                    sequence: 1,
                    class: 'seat',
                    fill: '#aad4ff',
                    stroke: '#000000',
                    label: 'S1',
                    labelId: 'S1',
                    labelClass: 'seat-text',
                    labelFill: '#000000',
                    labelStroke: '#000000',
                  },
                  {
                    id: '2',
                    groupId: '2',
                    shortId: this.generateShortId(),
                    name: 'Seat',
                    sequence: 2,
                    class: 'seat',
                    fill: '#aad4ff',
                    stroke: '#000000',
                    label: 'S2',
                    labelId: 'S2',
                    labelClass: 'seat-text',
                    labelFill: '#000000',
                    labelStroke: '#000000',
                  },
                ],
              },
            },
          ],
        },
      ],
    };
    return menu;
  }

  constructor() {}

  public getLayoutMenu(): LayoutMenu {
    return this.getMenu();
  }
}
