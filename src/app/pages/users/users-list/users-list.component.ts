import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CardsService } from '../../../services/cards.service';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
})
export class UsersListComponent implements OnInit {

  myData: any;
 
  constructor(private cardsService: CardsService, private route: ActivatedRoute, public router: Router) { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  viewCardDetail(myObj){
    this.router.navigate(['/'+myObj.id]);
  }  

  ngOnInit() {

    this.myData = this.cardsService.getAll().subscribe(
      data => {

        this.myData = data;

      },
      err => {

        console.log(err);

      } 
    )
  
  }

}
