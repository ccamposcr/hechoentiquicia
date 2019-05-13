import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppServicesComponent } from './app.services';

describe('AppServicesComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppServicesComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppServicesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'hechoentiquicia'`, () => {
    const fixture = TestBed.createComponent(AppServicesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('hechoentiquicia');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppServicesComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to hechoentiquicia!');
  });
});
