import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './apiService.service';
import { HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import * as models from '../../core/models';
import { combineLatest } from 'rxjs';

@Injectable()
export class PlacesApiService {
  constructor(
    private apiService: ApiService) { }

  findPlaceFromText(text: string, inputType: models.InputForSearchTypes): Observable<any> {

    let params = new HttpParams()
      .set('key', environment.apiKey)
      .set('input', text)
      .set('inputtype', models.InputForSearchTypes[inputType])
      .set('fields', 'id,name,geometry');

    return this.apiService.get('findplacefromtext/json', params);
  }

}