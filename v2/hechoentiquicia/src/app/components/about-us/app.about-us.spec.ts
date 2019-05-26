import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppAboutUsComponent } from './app.about-us';

describe('AppAboutUsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppAboutUsComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppAboutUsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'hechoentiquicia'`, () => {
    const fixture = TestBed.createComponent(AppAboutUsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('hechoentiquicia');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppAboutUsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to hechoentiquicia!');
  });
});
