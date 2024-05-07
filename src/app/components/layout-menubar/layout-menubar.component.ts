import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import {
  DynamicComponentService,
  LayoutMenu,
  LayoutMenuItem,
  LayoutMenuService,
} from '../../common';
import { MenuItemBuilderComponent } from './menuitem-builder.component';
@Component({
  selector: 'layout-menubar',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, MenuItemBuilderComponent],
  providers: [LayoutMenuService, DynamicComponentService],
  templateUrl: './layout-menubar.component.html',
  styleUrl: './layout-menubar.component.scss',
})
export class LayoutMenubarComponent implements OnInit {
  menu!: LayoutMenu;
  @Output() createItem = new EventEmitter<LayoutMenuItem>();

  constructor(private layoutMenuService: LayoutMenuService) {}

  ngOnInit(): void {
    this.initMenu();
  }

  private initMenu(): void {
    this.menu = this.layoutMenuService.getLayoutMenu();
  }

  public addItem(item: LayoutMenuItem): void {
    this.createItem.emit(item);
  }
}
