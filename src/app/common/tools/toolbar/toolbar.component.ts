import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Output() colorChange = new EventEmitter<string>();

  changeColor(color: string) {
    this.colorChange.emit(color);
  }
}
