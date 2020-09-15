import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithExportComponent } from './with-export.component';

describe('WithExportComponent', () => {
  let component: WithExportComponent;
  let fixture: ComponentFixture<WithExportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithExportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
