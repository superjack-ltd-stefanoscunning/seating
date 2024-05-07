import { Table } from './table';

export interface LayoutDesigner {
  id: number;
  name?: string;
  width: number;
  height: number;
  roomWidth: number;
  roomLength: number;
  screenWidth: number;
  screenHeight: number;
  description?: string;
  startingTableSequence: number;
  startingSeatSequence: number;
  tables?: Table[];
  svgTemplates?: string[];
}
