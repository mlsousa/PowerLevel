import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-super-saiyon-four',
  templateUrl: './super-saiyon-four.component.html',
  styleUrls: ['./super-saiyon-four.component.css']
})
export class SuperSaiyonFourComponent implements OnInit {
  @Input() power;

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.power = this.power * 500;
  }

}
