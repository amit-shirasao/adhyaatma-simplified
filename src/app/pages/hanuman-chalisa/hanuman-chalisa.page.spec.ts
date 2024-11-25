import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HanumanChalisaPage } from './hanuman-chalisa.page';

describe('HanumanChalisaPage', () => {
  let component: HanumanChalisaPage;
  let fixture: ComponentFixture<HanumanChalisaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HanumanChalisaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
