import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as models from '../models'


@Injectable()
export class StateService {

  public places$: BehaviorSubject<models.Place[]> = new BehaviorSubject(null)
  public currentPlaceGeometry$: BehaviorSubject<models.Geometry> = new BehaviorSubject(null);

  constructor() { }

  //TODO work w/ firestore and ngxs instead of local data
  //as in https://github.com/JsssCode/ngxs-firebase-angular6-sample
  setNewPlaces(newPlaces: models.Place[]) {
    const initialPlaces = this.places$.getValue();

    if (initialPlaces) {
      const initialIds = Array.from(initialPlaces, place => place.id);
      let placesToAdd = newPlaces.filter(place => !initialIds.includes(place.id));

      if (placesToAdd.length!=newPlaces.length){
        console.log("Some place/es had already been in the list!");
      }
      
      this.places$.next([...initialPlaces, ...this.addLinkToEachPlace(placesToAdd)]);
    } else {
      this.places$.next([...this.addLinkToEachPlace(newPlaces)]);
    }
  }

  //TODO create class and move this to constructor 
  addLinkToEachPlace(placesToAdd: models.Place[]): models.Place[]{
    return placesToAdd.map(place=>{
      place.link = "https://www.google.com/maps/dir/?api=1&destination=" + place.geometry.location.lat + ','+
                   place.geometry.location.lng;
      return place;
    })

  }

  removePlace(placeRemove) {
    const places = this.places$.getValue();
    const newPlaceArray = places.filter(place => place.id != placeRemove.id);
    this.places$.next(newPlaceArray);
  }

}