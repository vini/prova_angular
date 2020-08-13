import { Component, OnInit, Input } from '@angular/core';

import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styles: []
})
export class CardDetailComponent implements OnInit {

  @Input() cardDetail: any
  public mapSrc: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  sanitizeUrl(lat, lon) {
    let url = 'https://www.google.com/maps/embed/v1/place?q='+lat+','+lon+'&zoom=3&key=AIzaSyDkx-uUCuFBXJVZoJ9UO5IsnNWycVqvDb0';
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit() {
  }

}
