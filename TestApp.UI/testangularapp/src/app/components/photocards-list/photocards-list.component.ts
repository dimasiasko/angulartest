import { Component, OnInit } from '@angular/core';
import { Photocard } from 'src/app/models/photocard';
import { PhotocardsService } from 'src/app/services/photocards.service';

@Component({
  selector: 'app-photocards-list',
  templateUrl: './photocards-list.component.html',
  styleUrls: ['./photocards-list.component.css']
})
export class PhotocardsListComponent implements OnInit {

  constructor(private service: PhotocardsService) { }

  photocards: Photocard[] = [];

  ngOnInit(): void {
    this.service.getAllCards()
      .subscribe({
        next: (photocards) => {
          this.photocards = photocards;
        }
      })
  }

}
