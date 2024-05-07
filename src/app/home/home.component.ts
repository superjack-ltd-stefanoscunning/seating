import { CdkDrag, DragDrop } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { deepCopy } from 'deep-copy-ts';
import {
  LayoutDesigner,
  LayoutMenuItem,
  Table,
  TableLayoutService,
} from '../common';
import ShortId from '../common/helpers/short-id';
import { Seat } from '../common/interfaces/table-seatings/seat';
import {
  LayoutMenubarComponent,
  MenuItemBuilderComponent,
} from '../components';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    LayoutMenubarComponent,
    MenuItemBuilderComponent,
    CdkDrag,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [TableLayoutService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  startingTableSequence: number = 0;
  startingSeatSequence: number = 0;
  item!: LayoutMenuItem | undefined;
  public tableSelected!: Table;
  baseWidth: number = 1000;
  layoutDesigner: LayoutDesigner = {
    id: 1,
    startingTableSequence: 0,
    startingSeatSequence: 0,
    width: 1000,
    height: 600,
    roomLength: 10,
    roomWidth: 6,
    screenWidth: 1000,
    screenHeight: 600,
    tables: [],
    svgTemplates: [],
  };
  public viewBox: string =
    '0 0 ' + this.layoutDesigner.width + ' ' + this.layoutDesigner.height;

  constructor(private dragDropService: DragDrop) {}

  ngOnInit(): void {
    //this.recalulateDesignDimensions();
  }

  recalulateDesignDimensions(): void {
    let rl = 5;
    let rw = 5;
    let unit = this.baseWidth / rl;
    let sw = rl * unit;
    let sh = rw * unit;

    const layoutDesigner = document.getElementById('layoutDesigner');
    let vw = layoutDesigner?.clientWidth;
    let vh = layoutDesigner?.clientHeight;
    if (vw !== undefined && vh !== undefined) {
      let scaledUnit = vw / rl;
      let lw = rl * scaledUnit;
      let lh = rw * scaledUnit;

      this.viewBox =
        '0 0 ' + this.layoutDesigner.width + ' ' + this.layoutDesigner.height;
    }

    console.log(vw);
    console.log(vh);
  }

  public onCreateTableStarted(menuItem: LayoutMenuItem): void {
    this.item = menuItem;
    this.addTableWithAsync(menuItem);
  }

  async addTableWithAsync(menuItem: LayoutMenuItem) {
    const result1 = <Table>await this.resolvedTableCreation(menuItem);
    this.tableSelected = result1;
    setTimeout(() => {
      this.addNewTable(this.tableSelected);
    }, 1000);
  }

  async resolvedTableCreation(item: LayoutMenuItem) {
    return new Promise((resolve) => {
      let created = false;
      if (item !== undefined) {
        let table = deepCopy(item?.table) as Table;
        let startingTableSequence =
          this.layoutDesigner.startingTableSequence + 1;
        this.layoutDesigner.startingTableSequence = startingTableSequence;
        table.sequence = startingTableSequence;
        table.id = `table_${table.sequence}`;
        table.label = `T${table.sequence}`;
        table.labelId = `table_text_${table.sequence}`;
        table.sizeId = `table_size_text_${table.sequence}`;
        if (table.seats && table.seats.length > 0) {
          let seatSequence = this.layoutDesigner.startingSeatSequence;
          table.seats.forEach((x: Seat, i: number) => {
            seatSequence = seatSequence + 1;
            x.groupId = `seat_group_${seatSequence}`;
            x.id = `seat_${seatSequence}`;
            x.sequence = seatSequence;
            x.labelId = `seat_text_${seatSequence}`;
            x.label = `S${seatSequence}`;
          });
          this.layoutDesigner.startingSeatSequence = seatSequence;
        }
        if (this.layoutDesigner !== null && this.layoutDesigner !== undefined) {
          if (this.layoutDesigner.tables === undefined) {
            this.layoutDesigner.tables = [];
          }
          this.layoutDesigner.tables.push(table);
          created = true;
          resolve(table);
        }
      }
    });
  }

  private updateLayoutDesigner(table: Table, templateId?: string): void {
    if (this.layoutDesigner) {
      if (templateId) {
        this.layoutDesigner.svgTemplates?.push(templateId);
      }
      this.startingTableSequence = this.layoutDesigner.startingTableSequence;
      this.startingSeatSequence = this.layoutDesigner.startingSeatSequence;
    }
  }

  private addNewTable(table: Table): void {
    let tempBuilder = document.getElementById('tempBuilder');
    if (tempBuilder !== undefined && tempBuilder !== null) {
      let svgs = tempBuilder.getElementsByTagName('svg');
      let svgTemplate = svgs.item(0);
      if (svgTemplate !== undefined) {
        let tableSvg = svgTemplate;
        let cleaned = this.cleanSvg(tableSvg);
        const selectedSvgLibrary =
          document.getElementById('selectedSvgLibrary');
        const cloneSvg = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'svg'
        );
        cloneSvg.setAttribute('id', 'svg_' + table.type);
        cloneSvg.setAttribute('viewBox', '0 0 800 600');
        cloneSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        selectedSvgLibrary?.appendChild(cloneSvg);
        var selectedClone = document.getElementById('svg_' + table.type);
        if (selectedClone !== undefined && selectedClone !== null) {
          selectedClone.outerHTML = cleaned;
          var library = document.getElementById('selectedSvgLibrary');
          var librarySvgs = library?.getElementsByTagName('svg');
          if (librarySvgs !== undefined && librarySvgs !== null) {
            var lastChild = librarySvgs[librarySvgs.length - 1];
            if (lastChild !== undefined && lastChild !== null) {
              lastChild.setAttribute('id', 'svg_' + table.type);
            }
          }
        }
      }
    }
    const svgToData = document.getElementById('svg_' + table.type);
    const cleanUri = this.serializeSvg(svgToData);
    const designer = document.getElementById('layoutDesigner');
    const addition = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'image'
    );

    addition.setAttribute('href', cleanUri);
    let additionId = 'svg_' + table.type + '_' + this.generateShortId();
    addition.setAttribute('id', additionId);
    addition.setAttribute('width', table.width);
    addition.setAttribute('height', table.height);
    addition.setAttribute('x', '100');
    addition.classList.add('draggable');
    addition.setAttribute('cdkDraggable', '');
    addition.setAttribute('cdkDragBoundary', 'layoutDesigner');
    addition.setAttribute('cdkDrag', '');
    designer?.appendChild(addition);
    const added = document.getElementById(additionId);
    this.dragDropService.createDrag(added as HTMLElement);

    if (this.item) {
      this.updateLayoutDesigner(this.item?.table, 'svg_' + table.type);
      this.item = undefined;
      const library = document.getElementById('selectedSvgLibrary');
      if (library) {
        library.innerHTML = '';
      }
    }
  }

  private generateShortId(): string {
    const short = new ShortId({ length: 8 });
    const shortId = short.rnd();
    return shortId;
  }

  private cleanSvg(tableSvg: any): string {
    let svg = tableSvg;
    let source = '';
    if (svg !== null) {
      let serializer = new XMLSerializer();
      source = serializer.serializeToString(svg);
      //add name spaces.
      if (
        !source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)
      ) {
        source = source.replace(
          /^<svg/,
          '<svg xmlns="http://www.w3.org/2000/svg"'
        );
      }
      if (!source.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)) {
        source = source.replace(
          /^<svg/,
          '<svg xmlns:xlink="http://www.w3.org/1999/xlink"'
        );
      }
    }
    return source;
  }

  private serializeSvg(tableSvg: any): string {
    //get svg element.
    let svg = tableSvg;
    //let tableSvg = document.getElementById('svg');
    if (svg !== null) {
      let serializer = new XMLSerializer();
      let source = serializer.serializeToString(svg);

      //add name spaces.
      if (
        !source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)
      ) {
        source = source.replace(
          /^<svg/,
          '<svg xmlns="http://www.w3.org/2000/svg"'
        );
      }
      if (!source.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)) {
        source = source.replace(
          /^<svg/,
          '<svg xmlns:xlink="http://www.w3.org/1999/xlink"'
        );
      }

      //add xml declaration
      //source = '<?xml version="1.0" standalone="no"?>\r\n' + source;

      //convert svg source to URI data scheme.
      let url =
        'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(source);
      return url;
    }
    return '';
  }
}
