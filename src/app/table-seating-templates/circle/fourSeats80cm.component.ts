import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Table } from '../../common';

@Component({
  standalone: true,
  selector: 'app-4seat80',
  templateUrl: './fourSeats80cm.component.svg',
  styleUrls: ['./fourSeats80cm.component.scss'],
})
export class FourSeats80cmComponent implements OnInit, OnChanges {
  @Input() table!: Table;
  public startingTableSequence: number = 0;
  public tableSequence: number = 0;
  public tableSeatsShapeId!: string;
  public tableSeatGroupId!: string;
  public tableGroupId!: string;

  constructor() {}

  ngOnInit(): void {
    this.initTable();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['table']) {
      this.initTable();
    }
  }

  private initTable(): void {
    if (this.table !== undefined) {
      this.tableSequence = this.table.sequence;
      this.tableSeatsShapeId = `table_seats_shape_${this.tableSequence}`;
      this.tableSeatGroupId = `table_seat_group_${this.tableSequence}`;
      this.tableGroupId = `table_group_${this.tableSequence}`;
    }
  }
}
