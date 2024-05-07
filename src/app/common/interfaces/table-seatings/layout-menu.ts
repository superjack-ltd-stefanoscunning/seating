import { LayoutMenuGroup } from './layout-menu-group';

export interface LayoutMenu {
  id: number;
  name: string;
  description?: string;
  groups: LayoutMenuGroup[];
}
