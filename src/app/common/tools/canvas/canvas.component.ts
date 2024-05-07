import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-canvas',
  standalone: true,
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements AfterViewInit {
  @ViewChild('paintCanvas', { static: false }) canvas!: ElementRef;
  @Input() currentColor: string = 'black';

  private context!: CanvasRenderingContext2D;
  private isDrawing: boolean = false;

  constructor() {}

  ngAfterViewInit() {
    this.context = this.canvas.nativeElement.getContext('2d');
    this.addSquare();
    this.setupCanvas();
  }

  public addSquare(): void {
    this.context.strokeRect(50, 50, 50, 50);
  }

  private setupCanvas() {
    this.context.lineCap = 'square';
    this.context.lineWidth = 5;
    this.context.strokeStyle = this.currentColor;

    this.canvas.nativeElement.addEventListener(
      'mousedown',
      (event: MouseEvent) => this.startDrawing(event)
    );
    this.canvas.nativeElement.addEventListener(
      'mousemove',
      (event: MouseEvent) => this.draw(event)
    );
    this.canvas.nativeElement.addEventListener('mouseup', () =>
      this.stopDrawing()
    );
    this.canvas.nativeElement.addEventListener('mouseleave', () =>
      this.stopDrawing()
    );
  }

  private startDrawing(event: MouseEvent) {
    this.isDrawing = true;
    this.draw(event); // To start drawing immediately from the initial point
  }

  private draw(event: MouseEvent) {
    if (!this.isDrawing) return;

    this.context.beginPath();
    this.context.moveTo(
      event.clientX - this.canvas.nativeElement.offsetLeft,
      event.clientY - this.canvas.nativeElement.offsetTop
    );
    this.context.lineTo(
      event.clientX - this.canvas.nativeElement.offsetLeft,
      event.clientY - this.canvas.nativeElement.offsetTop
    );
    this.context.stroke();
  }

  private stopDrawing() {
    this.isDrawing = false;
  }
}
