import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterMobileModalPage } from './register-mobile-modal.page';

describe('RegisterMobileModalPage', () => {
  let component: RegisterMobileModalPage;
  let fixture: ComponentFixture<RegisterMobileModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterMobileModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterMobileModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
