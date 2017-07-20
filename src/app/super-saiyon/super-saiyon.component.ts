import { Component, OnInit, Input, OnChanges  } from '@angular/core';

@Component({
  selector: 'app-super-saiyon',
  templateUrl: './super-saiyon.component.html',
  styleUrls: ['./super-saiyon.component.css']
})
export class SuperSaiyonComponent implements OnInit {
  @Input() power;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.power = this.power * 90;
  }

}
