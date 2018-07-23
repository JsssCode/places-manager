import { Component } from '@angular/core';
import { PlacesApiService } from '../core/services/placesApiService.service';
import * as models from '../core/models';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { InputForSearchTypes } from '../core/models';
import { SelectPlacesDialogComponent } from '../select-places-dialog/select-places-dialog.component';

@Component({
  selector: 'app-search-place',
  templateUrl: './search-place.component.html',
  styleUrls: ['./search-place.component.scss']
})
export class SearchPlaceComponent {

  addPlaceForm = this.fb.group({
    place: ['', Validators.required],
    //phone: [''],
  });

  constructor(private placesApiService: PlacesApiService,
    private fb: FormBuilder,
    public dialog: MatDialog) {

  }
  
  onSubmit(){
    this.search();
  }

  search() {
    let place = this.addPlaceForm.get('place').value;
    if (place) {
      this.placesApiService.findPlaceFromText(place, models.InputForSearchTypes.textquery).subscribe(response => {
        if (response.status = "OK") {
          const data = response.candidates.map(item=>{ item.query = place; return item});
          this.openPlaceSelectionDialog(data);
        } else {
          throw new Error('Places not found!')
        }
      }

      );
    }/*TODO search by phone number
     else if (phone){
       this.placesApiService.getPlacesNearby(phone, models.InputForSearchTypes.phonenumber);
     } else {
       throw new Error('Place overview and phone are blank. At least one field should be filled')
     }*/

  }

  openPlaceSelectionDialog(placesCandidates: models.Place[]): void {
    const dialogRef = this.dialog.open(SelectPlacesDialogComponent, {
      width: '250px',
      data: placesCandidates
    });
  }

}


