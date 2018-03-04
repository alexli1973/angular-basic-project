import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {ConnectService} from '../../../shared/services/connect.service';
import {SharingService} from '../../../shared/services/sharing.service';
import {Car} from '../../../shared/model/car';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  form: FormGroup;
  @Output() newCarAdd = new EventEmitter<Car>();

  constructor(private connect: ConnectService ) { }

  ngOnInit() {
    this.form = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'model': new FormControl(null, [Validators.required])
    });
  }

  saveForm() {
    let submitForm = this.form.value;
    this.connect.createCar(submitForm).subscribe(res => {
        console.log(res);
        this.form.reset();
        this.newCarAdd.emit(submitForm);
    });
    this.form.reset();
  }

}
