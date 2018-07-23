import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as models from '../core/models';
import { StateService } from '../core/services';

@Component({
  selector: 'app-select-places-dialog',
  templateUrl: './select-places-dialog.component.html',
  styleUrls: ['./select-places-dialog.component.scss']
})
export class SelectPlacesDialogComponent {

  public selectedPlaces;

  constructor(
    public dialogRef: MatDialogRef<SelectPlacesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SelectPlacesDialogInput,
    private stateService: StateService) { }

  //TODO return value from dialog to component and call state changing method from there
  savePlaces() {
    this.stateService.setNewPlaces(this.selectedPlaces);
  }

  onNgModelChange($event) {
    this.selectedPlaces = $event;
  }

}

export interface SelectPlacesDialogInput {
  places: models.Place[];
}
