import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalCareComponent } from './personal-care.component';

describe('ProfileComponent', () => {
  let component: PersonalCareComponent;
  let fixture: ComponentFixture<PersonalCareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalCareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
