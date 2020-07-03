import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit {
  petName = 'cat';
  petImage = 'http://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/01/03165939/Dogs.jpg';

  constructor() { }
  // tslint:disable-next-line:typedef
  updateName(name){
    this.petName = name;
  }
  // tslint:disable-next-line:typedef
  updateImage(image){
    this.petImage = image;
  }

  ngOnInit(): void {
  }

}
