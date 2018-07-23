import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler  } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
  MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule, MatCardModule,
  MatDialogModule, MatSelectModule, MatListModule
 } from '@angular/material';
import { GlobalErrorHandler, ApiService, PlacesApiService, StateService } from './core/services';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SearchPlaceComponent } from './search-place/search-place.component';
import { SelectPlacesDialogComponent } from './select-places-dialog/select-places-dialog.component';
import { PlacesTableComponent } from './places-table/places-table.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { GoogleMapComponent } from './google-map/google-map.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchPlaceComponent,
    SelectPlacesDialogComponent,
    PlacesTableComponent,
    ConfirmDialogComponent,
    GoogleMapComponent
  ],
  entryComponents:[SelectPlacesDialogComponent, ConfirmDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatCardModule,
    MatSidenavModule,
    MatSelectModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [
    ApiService,
    PlacesApiService,
    StateService,
    {
      provide: ErrorHandler, 
      useClass: GlobalErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
