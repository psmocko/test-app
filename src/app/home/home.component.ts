import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

import { EventModel } from '../models/event.model';
import { ConfirmationDialogComponent } from '../common/confirmation-dialog.component';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  event: EventModel;

  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
  }

  gotClicked() {
    this.router.navigate(['/events/new']);
  }

  popupClicked() {
    console.log('popupClicked');
    this.dialog.open(ConfirmationDialogComponent, {
      data: { title: 'Confirmation', message: 'Are you sure you want to leave?'}
    });
  }

}
