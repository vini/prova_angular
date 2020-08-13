import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

import { CardsService } from '../../../services/cards.service';


@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
})
export class UsersDetailComponent implements OnInit {

  paramId: any;
  myData: any;
  response: any;
  getUserById: any;

  constructor(private cardsService: CardsService, private route: ActivatedRoute, public router: Router) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.paramId = params.get('id')
    })

    this.myData = this.cardsService.getAll().subscribe(
      data => {

        this.response = data;
        this.myData = this.response.filter(u => u.id == this.paramId);

      },
      err => {

        console.log(err);
        
      } 
    )

  }

}
