import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPhotocardComponent } from './edit-photocard.component';

describe('EditPhotocardComponent', () => {
  let component: EditPhotocardComponent;
  let fixture: ComponentFixture<EditPhotocardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPhotocardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPhotocardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
