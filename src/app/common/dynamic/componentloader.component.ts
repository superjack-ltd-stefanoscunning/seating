import {
  Component,
  ComponentFactoryResolver,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

import { DynamicComponentDirective } from '../directives/dynamiccomponent.directive';
import { DynamicComponent } from '../interfaces/dynamic.component';
import { DynamicComponentItem } from './dynamiccomponent-item';

@Component({
  selector: 'componentloader',
  standalone: true,
  template: `
    <div class="row">
      <ng-template component-host></ng-template>
    </div>
  `,
})
export class ComponentLoaderComponent implements OnInit, OnDestroy {
  @Input() components!: DynamicComponentItem[];
  @ViewChild(DynamicComponentDirective, { static: true })
  componentHost!: DynamicComponentDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private renderer2: Renderer2
  ) {}

  ngOnInit() {
    this.loadComponents();
  }

  ngOnDestroy() {}

  loadComponents() {
    const viewContainerRef = this.componentHost.viewContainerRef;
    viewContainerRef.clear();
    if (this.components.length > 0) {
      this.components.forEach((a) => {
        let componentItem = Object.create(a);
        let componentFactory =
          this.componentFactoryResolver.resolveComponentFactory(
            componentItem.component
          );
        const componentRef = viewContainerRef.createComponent(componentFactory);
        (<DynamicComponent>componentRef.instance).componentlocation =
          componentItem.componentlocation;
        (<DynamicComponent>componentRef.instance).componentinfo =
          componentItem.componentinfo;
        // this.renderer2.addClass(
        //   componentRef.location.nativeElement,
        //   this.fetchDesktopSize(componentItem.componentinfo)
        // );
      });
    }
  }

  fetchDesktopSize(componentinfo: any) {
    let size = componentinfo.component.desktopSize;
    return 'col-sm-' + size;
  }
}
