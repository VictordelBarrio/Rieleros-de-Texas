import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [

    `
      .mapa-container{
        height: 100%;
        width:100%;
        
      }
      .row{
        background-color:white;
        border-radius:5px;
        bottom: 50px;
        left:50px;
        padding:10px;
        z-index:999;
        position:fixed;
        width:400px
      }
    `
  ]
})
// export class ZoomRangeComponent implements OnInit {
export class MarcadoresComponent implements AfterViewInit, OnDestroy {

  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel: number = 10;
  center: [number, number] = [-101.71139903359004, 21.152214114210125];

  geojson = {
    'type': 'FeatureCollection',
    'features': [
      {
        'type': 'Feature',
        'properties': {
          'message': 'De La Salle',
          'iconSize': [60, 60]
        },
        'geometry': {
          'type': 'Point',
          'coordinates': {
            'long': -101.71157635316162,
            'lat': 21.15177737318471
          }
        }
      },
      {
        'type': 'Feature',
        'properties': {
          'message': 'Plaza Mayor',
          'iconSize': [50, 50]
        },
        'geometry': {
          'type': 'Point',
          'coordinates': {
            'long': -101.69374971332118,
            'lat': 21.15954935801741
          }
        }
      },
      {
        'type': 'Feature',
        'properties': {
          'message': 'Costco',
          'iconSize': [40, 40]
        },
        'geometry': {
          'type': 'Point',
          'coordinates': {
            'long': -101.70605153147314,
            'lat': 21.15811601311747
          }
        }
      }
    ]
  };


  constructor() {
    console.log('constructor', this.divMapa)
  }
  ngOnDestroy(): void {
    this.mapa.off('zoom', () => { });
    this.mapa.off('zoomend', () => { });
    this.mapa.off('move', () => { });
  }

  // ngOnInit(): void {
  ngAfterViewInit(): void {
    console.log('FullScreen Component');
    console.log('afterViewInit', this.divMapa)

    // (mapboxgl as any).accessToken = environment.mapBoxToken;
    // var map = new mapboxgl.Map({
    this.mapa = new mapboxgl.Map({
      // container: 'mapa',
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel
    });

    // Add markers to the map.
    for (const marker of this.geojson.features) {
      // Create a DOM element for each marker.
      const el = document.createElement('div');
      const width = marker.properties.iconSize[0];
      const height = marker.properties.iconSize[1];
      el.className = 'marker';
      el.style.backgroundImage = `url(https://placekitten.com/g/${width}/${height}/)`;
      el.style.width = `${width}px`;
      el.style.height = `${height}px`;
      el.style.backgroundSize = '100%';

      el.addEventListener('click', () => {
        window.alert(marker.properties.message);
      });

      // Add markers to the map.
      new mapboxgl.Marker(el)
        .setLngLat([marker.geometry.coordinates.long, marker.geometry.coordinates.lat])
        .addTo(this.mapa);
    }


    // Cuando el zoom cambia se usa un listener
    this.mapa.on('zoom', (event) => {
      // console.log('zoom')
      // console.log(event);
      // const zoomActual = this.mapa.getZoom();
      // console.log(zoomActual);
      this.zoomLevel = this.mapa.getZoom(); //Obtener zoom actual
    });
    //Limitar zoom a 18
    this.mapa.on('zoomend', (event) => {
      if (this.mapa.getZoom() > 18) {
        this.mapa.zoomTo(18);
      }
    });
    // Movimiento de mapa y posición central
    this.mapa.on('move', (event) => {
      // console.log(event)
      const target = event.target;
      console.log(target.getCenter());
      const { lng, lat } = target.getCenter();
      this.center = [lng, lat];
    });


  }
  zoomIn() {
    this.mapa.zoomIn()

  }
  zoomOut() {
    this.mapa.zoomOut()

  }

  zoomCambio(valor: string) {
    //Para valores de range
    // console.log(valor) 
    this.mapa.zoomTo(Number(valor))
  }
}



