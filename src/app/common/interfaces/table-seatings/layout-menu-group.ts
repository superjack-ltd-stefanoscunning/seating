import { LayoutMenuItem } from './layout-menu-item';

export interface LayoutMenuGroup {
  id: number;
  name: string;
  description?: string;
  items: LayoutMenuItem[];
}
