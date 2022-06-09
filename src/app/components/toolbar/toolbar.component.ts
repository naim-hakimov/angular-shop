import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuItem } from "primeng/api";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() openSidbarHandler: EventEmitter<boolean> = new EventEmitter<boolean>();

  public items: MenuItem[] = [];
  public isShowFlag = true;
  ngOnInit() {
    this.items = [
      {
        label: 'Update',
        icon: 'pi pi-refresh'
      },
      {
        label: 'Delete',
        icon: 'pi pi-times'
      },
      {
        label: 'Angular',
        icon: 'pi pi-external-link',
        url: 'http://angular.io'
      },
      {
        label: 'Router',
        icon: 'pi pi-upload',
        routerLink: '/fileupload'
      }
    ];
  }

  public showSidebar() {
    this.isShowFlag = !this.isShowFlag;
    this.openSidbarHandler.emit(this.isShowFlag)
  }
}
