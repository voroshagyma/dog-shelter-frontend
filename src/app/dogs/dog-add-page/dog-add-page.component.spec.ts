import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogAddPageComponent } from './dog-add-page.component';

describe('DogAddPageComponent', () => {
  let component: DogAddPageComponent;
  let fixture: ComponentFixture<DogAddPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogAddPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
