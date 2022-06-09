import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public isShow = true;
  constructor() { }

  ngOnInit(): void {
  }

  openSideBar(event: boolean) {
    this.isShow = event;
  }
}
