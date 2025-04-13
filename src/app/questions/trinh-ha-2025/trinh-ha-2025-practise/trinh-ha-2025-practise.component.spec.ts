import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrinhHa2025PractiseComponent } from './trinh-ha-2025-practise.component';

describe('TrinhHa2025PractiseComponent', () => {
  let component: TrinhHa2025PractiseComponent;
  let fixture: ComponentFixture<TrinhHa2025PractiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrinhHa2025PractiseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrinhHa2025PractiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
