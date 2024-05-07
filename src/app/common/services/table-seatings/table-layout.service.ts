import { Injectable } from '@angular/core';
import ShortId from '../../helpers/short-id';
import { TableLayout } from '../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class TableLayoutService {
  private getSample(): TableLayout {
    const tShort = new ShortId({ length: 8 });
    const tableShortId = tShort.rnd();
    const s1Short = new ShortId({ length: 8 });
    const seat1ShortId = s1Short.rnd();
    const s2Short = new ShortId({ length: 8 });
    const seat2ShortId = s2Short.rnd();
    const layout: TableLayout = {
      id: '1',
      name: 'Sample layout',
      tables: [
        {
          id: '1',
          type: '',
          name: '60cm - 2 seats',
          shortId: tableShortId,
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
          width: '150',
          height: '100',
          tableWidth: 60,
          tableHeight: 60,
          seats: [
            {
              id: '1',
              groupId: '1',
              shortId: seat1ShortId,
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
              shortId: seat2ShortId,
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
      ],
    };
    return layout;
  }

  constructor() {}

  public getSampleLayout(): TableLayout {
    return this.getSample();
  }
}
