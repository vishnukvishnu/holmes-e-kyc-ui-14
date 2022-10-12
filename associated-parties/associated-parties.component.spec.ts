import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociatedPartiesComponent } from './associated-parties.component';

describe('AssociatedPartiesComponent', () => {
  let component: AssociatedPartiesComponent;
  let fixture: ComponentFixture<AssociatedPartiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociatedPartiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociatedPartiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
