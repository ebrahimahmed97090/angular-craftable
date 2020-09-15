import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithMediaComponent } from './with-media.component';

describe('WithMediaComponent', () => {
  let component: WithMediaComponent;
  let fixture: ComponentFixture<WithMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
