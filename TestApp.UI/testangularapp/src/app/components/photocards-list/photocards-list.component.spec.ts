import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotocardsListComponent } from './photocards-list.component';

describe('PhotocardsListComponent', () => {
  let component: PhotocardsListComponent;
  let fixture: ComponentFixture<PhotocardsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotocardsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotocardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
