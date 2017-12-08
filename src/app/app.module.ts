import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatInputModule, MatButtonModule, MatCardModule, MatDialogModule } from '@angular/material';

import { appRoutes } from './app-routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { ConfirmationDialogComponent } from './common/confirmation-dialog.component';
import { UnsavedChangesGuardService } from './common/unsaved-changes-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateEventComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  entryComponents: [
    ConfirmationDialogComponent
  ],
  providers: [
    UnsavedChangesGuardService,
    { provide: 'canDeactivateCreateEvent', useValue: checkClientDeskEventDirty }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkClientDeskEventDirty(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
}
