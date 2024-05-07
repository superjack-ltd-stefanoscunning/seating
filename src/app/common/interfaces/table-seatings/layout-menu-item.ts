import { Table } from './table';

export interface LayoutMenuItem {
  id: number;
  type: string;
  name: string;
  table: Table;
}
