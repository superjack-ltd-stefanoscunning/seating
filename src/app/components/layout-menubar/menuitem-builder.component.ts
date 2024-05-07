import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { LayoutMenuItem, LayoutMenuService, Table } from '../../common';
import { FourSeats80cmComponent } from '../../table-seating-templates';
import { TwoSeats60cmComponent } from '../../table-seating-templates/circle/twoSeats60cm.component';
import { TwoSeats60By75cmComponent } from '../../table-seating-templates/rectangle';
import { TwoSeats60By60cmComponent } from '../../table-seating-templates/square';
@Component({
  selector: 'menuitem-builder',
  standalone: true,
  imports: [
    CommonModule,
    TwoSeats60cmComponent,
    TwoSeats60By75cmComponent,
    TwoSeats60By60cmComponent,
    FourSeats80cmComponent,
  ],
  providers: [LayoutMenuService],
  templateUrl: './menuitem-builder.component.html',
  styleUrl: './menuitem-builder.component.scss',
})
export class MenuItemBuilderComponent implements OnInit {
  @Input() item!: LayoutMenuItem;
  @Input() table!: Table;

  constructor() {}

  ngOnInit(): void {}
  public importTable(table: Table): void {}
}
