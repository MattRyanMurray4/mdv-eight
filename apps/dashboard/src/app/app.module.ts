import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@mafias/material';
import { UiLibraryModule } from '@mafias/ui-library';
import { CoreDataModule } from '@mafias/core-data';
import { CoreStateModule } from '@mafias/core-state';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GangstersComponent } from './gangsters/gangsters.component';
import { GangstersListComponent } from './gangsters/gangsters-list/gangsters-list.component';
import { GangsterDetailsComponent } from './gangsters/gangster-details/gangster-details.component';
@NgModule({
  declarations: [
    AppComponent,
    GangstersComponent,
    GangstersListComponent,
    GangsterDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    UiLibraryModule,
    CoreStateModule,
    CoreDataModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
