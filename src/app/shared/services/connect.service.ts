import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Car} from '../model/car';
import 'rxjs/add/operator/map';

@Injectable()
export class ConnectService {
   BASE_URL = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getCars(): Observable<any> {
    return this.http.get(this.BASE_URL + 'cars');
  }

  createCar(car: Car): Observable<any> {
    return this.http.post(this.BASE_URL + 'cars', car);
  }

  updateCar(car: Car): Observable<any> {
    return this.http.put(this.BASE_URL + 'cars' + '/' + car.id, car);
  }

  deleteCar(carId: string): Observable<any> {
    return this.http.delete(this.BASE_URL + '/' + carId);
  }

  getCarById(id: string) {
    return this.http.get(this.BASE_URL + 'cars' + '/' + id);
  }

}
