import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Random Images';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-12561-1bigmlf_bf3423d3.jpeg';
  image3 = 'https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png';

  constructor() { }

  ngOnInit() {
  }

}