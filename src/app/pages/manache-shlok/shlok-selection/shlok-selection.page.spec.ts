import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShlokSelectionPage } from './shlok-selection.page';

describe('ShlokSelectionPage', () => {
  let component: ShlokSelectionPage;
  let fixture: ComponentFixture<ShlokSelectionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ShlokSelectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
