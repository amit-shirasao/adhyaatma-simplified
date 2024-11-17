import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuruDhawaPage } from './guru-dhawa.page';

describe('GuruDhawaPage', () => {
  let component: GuruDhawaPage;
  let fixture: ComponentFixture<GuruDhawaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GuruDhawaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
