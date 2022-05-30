import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogEditFormComponent } from './dog-edit-form.component';

describe('DogEditFormComponent', () => {
  let component: DogEditFormComponent;
  let fixture: ComponentFixture<DogEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
