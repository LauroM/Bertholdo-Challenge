import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'carousel-presentation',
  templateUrl: './carousel-presentation.component.html',
  styleUrls: ['./carousel-presentation.component.scss']
})
export class CarouselPresentationComponent implements OnInit {
  //images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = ["initgondola1.jpeg", "wallpapersupermarket7.jpg", "gondolas.jpg"].map((n) => `../assets/Images/supermarket/${n}`);
  constructor() { }

  ngOnInit(): void {
  }

}
