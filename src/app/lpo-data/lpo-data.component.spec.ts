import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LpoDataComponent } from './lpo-data.component';

describe('LpoDataComponent', () => {
  let component: LpoDataComponent;
  let fixture: ComponentFixture<LpoDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LpoDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LpoDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
