import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameReadyComponent } from './game-ready.component';

describe('GameReadyComponent', () => {
  let component: GameReadyComponent;
  let fixture: ComponentFixture<GameReadyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameReadyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameReadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
