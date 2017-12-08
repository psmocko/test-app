import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventModel } from '../models/event.model';
import { FormDirty } from '../common/form-dirty.interface';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit, FormDirty {
  isDirty = true;
  event = new EventModel();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  saveEvent(form) {
    console.log(form);
    this.router.navigate(['/home']);
  }

}
