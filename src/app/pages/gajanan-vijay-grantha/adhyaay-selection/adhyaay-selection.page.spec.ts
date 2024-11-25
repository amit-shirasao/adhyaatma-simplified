import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdhyaaySelectionPage } from './adhyaay-selection.page';

describe('AdhyaaySelectionPage', () => {
  let component: AdhyaaySelectionPage;
  let fixture: ComponentFixture<AdhyaaySelectionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdhyaaySelectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
