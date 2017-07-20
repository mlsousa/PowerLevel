import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-super-saiyon-two',
  templateUrl: './super-saiyon-two.component.html',
  styleUrls: ['./super-saiyon-two.component.css']
})
export class SuperSaiyonTwoComponent implements OnInit {
  @Input() power;

  constructor() { }

  ngOnChanges() {
    this.power = this.power * 150;
  }

  ngOnInit() {
  }
}
