import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ConnectService} from '../../../shared/services/connect.service';
import {Car} from '../../../shared/model/car';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  car = {};
  cars: Car[];

  constructor(private route: ActivatedRoute, private connect: ConnectService) { }

  ngOnInit() {
    this.getCars();
    this.connect.getCarById(this.route.snapshot.params['id']).subscribe(data => {
      this.car = data;
      /*let cars = this.cars;
      cars = cars.filter(c => c.id !== car.id);*/
      }
    );
  }
  getCars() {
    this.connect.getCars().subscribe(cars => {this.cars = cars; });
  }

  /*getItemDetail(id) {
    this.connect.getCarById(id).subscribe(data => {
      this.car = data;
    });
  }*/

}
