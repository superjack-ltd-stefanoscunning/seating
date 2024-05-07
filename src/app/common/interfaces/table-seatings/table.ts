import { Seat } from './seat';

export interface Table {
  id: string;
  type: string;
  name: string;
  shortId: string;
  sequence: number;
  class: string;
  fill: string;
  stroke: string;
  label: string;
  labelId: string;
  labelClass: string;
  labelFill: string;
  labelStroke: string;
  size: string;
  sizeId: string;
  sizeClass: string;
  sizeFill: string;
  sizeStroke: string;
  width: string;
  height: string;
  tableWidth: number;
  tableHeight: number;
  seats: Seat[];
}
