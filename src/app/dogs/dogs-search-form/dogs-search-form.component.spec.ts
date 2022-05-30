import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsSearchFormComponent } from './dogs-search-form.component';

describe('DogsSearchFormComponent', () => {
  let component: DogsSearchFormComponent;
  let fixture: ComponentFixture<DogsSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogsSearchFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogsSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
