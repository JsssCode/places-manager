import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { environment } from '../../environments/environment';
import { StateService } from '../core/services';
declare var google: any;

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {

  @ViewChild("mapRef") mapRef: ElementRef;
  constructor(@Inject(DOCUMENT) private document,
    private elementRef: ElementRef,
    private stateService: StateService) {
  };

  ngAfterViewInit() {
    var s = this.document.createElement("script");
    s.type = "text/javascript";
    s.src = "https://maps.googleapis.com/maps/api/js?key=" + environment.apiKey;
    this.elementRef.nativeElement.appendChild(s);

  }
  ngOnInit() {
    // TODO use npm package for gmaps loading
    var self = this;
    setTimeout(function () {
      self.showMap();
    }, 2000)


  }

  showMap() {

    this.stateService.currentPlaceGeometry$.subscribe(geometry => {
      let point;
      if (geometry) {
        point = new google.maps.LatLng(geometry.location.lat, geometry.location.lng);
      } else {
        point = new google.maps.LatLng(47.892705, 35.1350068);
      }
      const mapOptions = {
        center: point,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      const map = new google.maps.Map(this.mapRef.nativeElement, mapOptions);

      const marker = new google.maps.Marker({
        position: point,
        map: map
      });

    }
    )
  }

}
