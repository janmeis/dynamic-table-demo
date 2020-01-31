import { Component, OnInit } from '@angular/core';
import { IDynamicTableModel } from 'src/app/shared/components/dynamic-table/dynamic-table.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent implements OnInit {
  model: IDynamicTableModel;

  constructor() { }

  ngOnInit() {
  }

}
