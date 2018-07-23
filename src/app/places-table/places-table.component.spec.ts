
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesTableComponent } from './places-table.component';

describe('PlacesTableComponent', () => {
  let component: PlacesTableComponent;
  let fixture: ComponentFixture<PlacesTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacesTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
