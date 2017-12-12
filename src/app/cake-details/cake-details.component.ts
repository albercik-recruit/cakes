import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CakeApiService} from '../service/cake-api.service';
import {Cake} from '../model/Cake';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-cake-details',
  templateUrl: './cake-details.component.html',
  styleUrls: ['./cake-details.component.css']
})
export class CakeDetailsComponent implements OnInit {

  private cakeForm: FormGroup = null;
  private cakeId: string = null;

  constructor (private fb: FormBuilder, private route: ActivatedRoute, private cakeService: CakeApiService, private router: Router) { }

  ngOnInit() {
    this.cakeId = this.route.snapshot.paramMap.get('cakeId');

    this.createFormForExistingCake(this.cakeId)
      .subscribe((cake) => {
        this.cakeForm = this.fb.group({
          id: [cake.id],
          name: [cake.name],
          comment: [cake.comment],
          yumFactor: [cake.yumFactor],
          imageUrl: [cake.imageUrl]
        });
      });
  }

  persistCake () {
    const cakeToPersist: Cake = this.cakeForm.value;
    this.cakeService.persistExistingCake(cakeToPersist)
      .subscribe((persistResult) => {
        this.router.navigate(['/cake-list']);
      }, () => {
        // @todo, error during persist action
        console.error(' ### error during persist action');
        this.router.navigate(['/cake-list']);
      })
  }

  private createFormForExistingCake (cakeId: string): Observable<any> {
    return this.cakeService.getSingleCake(cakeId);
  }
}
