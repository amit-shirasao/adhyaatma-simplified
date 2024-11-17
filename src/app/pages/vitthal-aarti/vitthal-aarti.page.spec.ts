import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VitthalAartiPage } from './vitthal-aarti.page';

describe('VitthalAartiPage', () => {
  let component: VitthalAartiPage;
  let fixture: ComponentFixture<VitthalAartiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VitthalAartiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
