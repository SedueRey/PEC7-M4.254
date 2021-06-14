import { Component, OnInit, Input } from '@angular/core';
import { Wine } from "../../models/wine";
import { WineService } from 'src/app/services/wine.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wine-detail',
  templateUrl: './wine-detail.component.html',
  styleUrls: ['./wine-detail.component.css']
})
export class WineDetailComponent implements OnInit {

  public wine: Wine;
  constructor(
    private wineService: WineService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const wineId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.wineService.getWines().subscribe(wineList => this.wine = wineList.find(el => el.id == wineId));
  }

}
