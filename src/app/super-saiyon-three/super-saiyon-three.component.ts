import { Component, OnInit, Input, OnChanges  } from '@angular/core';

@Component({
  selector: 'app-super-saiyon-three',
  templateUrl: './super-saiyon-three.component.html',
  styleUrls: ['./super-saiyon-three.component.css']
})
export class SuperSaiyonThreeComponent implements OnInit {
  @Input() power;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.power = this.power * 250;
  }

}
