import { User } from './User';
import { Company } from './Company';

interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor() {
    this.googleMap = new google.maps.Map(document.getElementById('map'), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(marker: Mappable): void {
    const placemarker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: marker.location.lat,
        lng: marker.location.lng,
      },
    });
    placemarker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: marker.markerContent(),
      });
      infoWindow.open(this.googleMap, placemarker);
    });
  }
}
