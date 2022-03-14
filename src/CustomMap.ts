export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}
export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divIDorClass: string, center: { lat: number; lng: number }) {
    this.googleMap = new google.maps.Map(document.querySelector(divIDorClass), {
      zoom: 1,
      center,
      fullscreenControl: true,
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: mappable.location,
    });
    marker.addListener('click', (): void => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
