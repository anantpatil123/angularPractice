import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {
// starContainer :any= document.querySelector(".stars") ;
stars:any| number = 100;

ngOnInit(){
  // for (let i = 0; i < 100; i++) {
  //   this.starContainer.innerHTML += `<div class="star"></div>`;
  // }
}


}
