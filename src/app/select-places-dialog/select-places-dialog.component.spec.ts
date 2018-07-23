import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPlacesDialogComponent } from './select-places-dialog.component';

describe('SelectPlacesDialogComponent', () => {
  let component: SelectPlacesDialogComponent;
  let fixture: ComponentFixture<SelectPlacesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectPlacesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPlacesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
