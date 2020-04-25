import { Component, ViewChild, ElementRef} from '@angular/core';
import { Geofence } from '@ionic-native/geofence/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { DataService } from '../services/data.service';

declare var google;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  @ViewChild('map', {static:false}) mapElement: ElementRef;
  map: any;
  address:string;

  constructor(private geofence: Geofence, private geolocation: Geolocation, 
    private nativeGeocoder: NativeGeocoder, private dataService : DataService) {
    
  }

  ngOnInit() {
    this.dataService.geoFences = [];
    this.loadMap();
  }

  loadMap() {
    this.geolocation.getCurrentPosition().then((resp) => {
      let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    //this.dataService.myPosition = {latitude : resp.coords.latitude, longitude: resp.coords.longitude}
    this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    this.map.addListener('tilesloaded', () => {
      console.log('accuracy',this.map);
      this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng())
    });
      // this.addGeofence(1, 123-323, resp.coords.latitude, resp.coords.longitude, 'Hyderabad', 'home');
     }).catch((error) => {
       alert('Error getting location : ' + JSON.stringify(error));
     });
  }

  getAddressFromCoords(lattitude, longitude) {
    console.log("getAddressFromCoords "+lattitude+" "+longitude);
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };

    this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
      .then((result: NativeGeocoderResult[]) => {
        this.address = "";
        let responseAddress = [];
        for (let [key, value] of Object.entries(result[0])) {
          if(value.length>0)
          responseAddress.push(value);

        }
        responseAddress.reverse();
        for (let value of responseAddress) {
          this.address += value+", ";
        }
        this.address = this.address.slice(0, -2);
      })
      .catch((error: any) =>{ 
        this.address = "Address Not Available!";
        alert("Address Not Available! : " + JSON.stringify(error));
      });

  }


  private addGeofence(id, idx, lat, lng, place, desc) {
    let fence = {
      id: id,
      latitude: lat,
      longitude: lng,
      radius: 50,
      transitionType: 2,
      notification: {
          id: idx,
          title: 'You crossed ' + place,
          text: desc,
          openAppOnClick: true
      }
    }
  
    this.geofence.addOrUpdate(fence).then(
       () => {
        this.dataService.geoFences = [{id: fence.id,
          latitude: fence.latitude,
          longitude: fence.longitude,
          radius: fence.radius,
          transitionType: fence.transitionType,
          notification: fence.notification}]
       },
       (err) => alert('Geofence failed to add' + JSON.stringify(err))
     );

     this.geofence.onTransitionReceived().subscribe((res) => {
      alert('Notified');
    });
  }

}
