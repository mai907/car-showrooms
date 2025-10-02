import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowroomUpdateComponent } from './showroom-update.component';

describe('ShowroomUpdateComponent', () => {
  let component: ShowroomUpdateComponent;
  let fixture: ComponentFixture<ShowroomUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowroomUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowroomUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
