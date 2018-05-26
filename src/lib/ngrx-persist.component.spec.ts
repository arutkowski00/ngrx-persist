import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxPersistComponent } from './ngrx-persist.component';

describe('NgrxPersistComponent', () => {
  let component: NgrxPersistComponent;
  let fixture: ComponentFixture<NgrxPersistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgrxPersistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxPersistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
