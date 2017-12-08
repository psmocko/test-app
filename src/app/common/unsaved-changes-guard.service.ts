import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ConfirmationDialogComponent } from '../common/confirmation-dialog.component';
import { FormDirty } from './form-dirty.interface';


@Injectable()
export class UnsavedChangesGuardService implements CanDeactivate<FormDirty> {

    constructor(private dialog: MatDialog) {}

    canDeactivate(component: FormDirty): Observable<boolean> | boolean {
        if (component.isDirty) {
            const subject = new Subject<boolean>();
            const modal = this.dialog.open(ConfirmationDialogComponent, {
                data: { title: 'Confirmation', message: 'Are you sure you want to leave?'}
            });

            modal.componentInstance.subject = subject;

            return subject.asObservable();
        }

        return true;
    }
}
