import { Component, OnInit } from '@angular/core';
import {CakeApiService} from '../service/cake-api.service';
import {Cake} from '../model/Cake';

@Component({
  selector: 'app-cake-list',
  templateUrl: './cake-list.component.html',
  styleUrls: ['./cake-list.component.css']
})
export class CakeListComponent implements OnInit {

  private cakes: Cake[];

  constructor (private cakeService: CakeApiService) { }

  ngOnInit () {
    this.cakeService.getAllCakes()
      .subscribe((cakesData: Cake[]) => {
        this.cakes = cakesData;
      })
  }

}
