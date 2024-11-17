import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RamDhawaPage } from './ram-dhawa.page';

describe('RamDhawaPage', () => {
  let component: RamDhawaPage;
  let fixture: ComponentFixture<RamDhawaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RamDhawaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
