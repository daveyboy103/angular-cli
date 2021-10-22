import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PnlDataDisplayComponent } from './pnl-data-display.component';

describe('PnlDataDisplayComponent', () => {
  let component: PnlDataDisplayComponent;
  let fixture: ComponentFixture<PnlDataDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PnlDataDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PnlDataDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
