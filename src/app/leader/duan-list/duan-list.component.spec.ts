import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuanListComponent } from './duan-list.component';

describe('DuanListComponent', () => {
  let component: DuanListComponent;
  let fixture: ComponentFixture<DuanListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DuanListComponent]
    });
    fixture = TestBed.createComponent(DuanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
