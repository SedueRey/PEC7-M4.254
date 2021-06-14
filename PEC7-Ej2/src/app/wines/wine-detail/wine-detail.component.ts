import { Component, OnInit, Input } from '@angular/core';
import { Wine } from "../../models/wine";

@Component({
  selector: 'app-wine-detail',
  templateUrl: './wine-detail.component.html',
  styleUrls: ['./wine-detail.component.css']
})
export class WineDetailComponent implements OnInit {

  @Input() public wine: Wine;
  constructor() { }

  ngOnInit(): void {
  }

}
