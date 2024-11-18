import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DurgaAartiPage } from './durga-aarti.page';

describe('DurgaAartiPage', () => {
  let component: DurgaAartiPage;
  let fixture: ComponentFixture<DurgaAartiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DurgaAartiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
