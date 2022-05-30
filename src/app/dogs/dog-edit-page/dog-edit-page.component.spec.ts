import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogEditPageComponent } from './dog-edit-page.component';

describe('DogEditPageComponent', () => {
  let component: DogEditPageComponent;
  let fixture: ComponentFixture<DogEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogEditPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
