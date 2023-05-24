import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelLevelPreferencesComponent } from './channel-level-preferences.component';

describe('ChannelLevelPreferencesComponent', () => {
  let component: ChannelLevelPreferencesComponent;
  let fixture: ComponentFixture<ChannelLevelPreferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChannelLevelPreferencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChannelLevelPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
