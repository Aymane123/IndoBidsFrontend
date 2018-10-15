import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sortingsection',
  templateUrl: './sortingsection.component.html',
  styleUrls: ['./sortingsection.component.css']
})
export class SortingsectionComponent implements OnInit {
  @Input()
  shoptitle: string;

  constructor() {
  }

  ngOnInit() {
  }

}
