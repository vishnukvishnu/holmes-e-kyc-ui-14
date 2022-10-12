import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityMasterComponent } from './entity-master.component';

describe('EntityMasterComponent', () => {
  let component: EntityMasterComponent;
  let fixture: ComponentFixture<EntityMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
