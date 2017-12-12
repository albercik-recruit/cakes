import { Component, OnInit } from '@angular/core';
import {CakeApiService} from '../service/cake-api.service';
import {Cake} from '../model/Cake';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-cake-list',
  templateUrl: './cake-list.component.html',
  styleUrls: ['./cake-list.component.css']
})
export class CakeListComponent implements OnInit {

  private cakes: Cake[];
  private newCakeForm: FormGroup = this.fb.group({ imageUrl: [''] });

  constructor (private cakeService: CakeApiService, private router: Router, private fb: FormBuilder) { }

  ngOnInit () {
    this.cakeService.getAllCakes()
      .subscribe((cakesData: Cake[]) => {
        this.cakes = cakesData;
      })
  }

  addNewCake () {
    this.cakeService.persistNewCake(this.newCakeForm.controls.imageUrl.value)
      .subscribe((createdDream) => {
        this.router.navigate(['/cake-details/' + createdDream.id]);
      });
  }

  navigateToCakeEdit (cakeId) {
    this.router.navigate(['/cake-details/' + cakeId]);
  }

}
