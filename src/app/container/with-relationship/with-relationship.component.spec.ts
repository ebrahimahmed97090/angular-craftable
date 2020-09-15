import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithRelationshipComponent } from './with-relationship.component';

describe('WithRelationshipComponent', () => {
  let component: WithRelationshipComponent;
  let fixture: ComponentFixture<WithRelationshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithRelationshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithRelationshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
