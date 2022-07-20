import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Photocard } from 'src/app/models/photocard';
import { PhotocardsService } from 'src/app/services/photocards.service';

@Component({
  selector: 'app-edit-photocard',
  templateUrl: './edit-photocard.component.html',
  styleUrls: ['./edit-photocard.component.css']
})
export class EditPhotocardComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: PhotocardsService, private router: Router) { }

  photocardDetails: Photocard = {
    id: '',
    url: '',
    comments: ["Cool Picture", "Pretty Nice Pic"] //sorry for hard code, it is need))
  }
  comments: Array<string> = this.photocardDetails.comments;
  singleComment: string = '';

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if(id){
          this.service.getSingleCard(id)
          .subscribe({
            next: (responce) => {
              this.photocardDetails = responce;
            }
          })
        }
      }
    })
  }

  onSubmit(){
    this.service.updateCard(this.photocardDetails.id, this.singleComment )
    .subscribe({
      next: (responce) => {
        
        this.router.navigate(['photocards']);
      }
    })
  }

  
}

