import { TestBed, ComponentFixture } from "@angular/core/testing";
import { HeroComponent } from "../hero/hero.component";
import { NO_ERRORS_SCHEMA } from "../../../node_modules/@angular/core";
import { By } from "@angular/platform-browser";

describe('Testy shallow', () => {
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(HeroComponent);
  });

  it('hero name', () => {
    fixture.componentInstance.hero = { id: 1, name: 'super BOHEN', strength: 3 };
    expect(fixture.componentInstance.hero.name).toEqual('super BOHEN');
  });

  it('html test', () => {
    fixture.componentInstance.hero = { id: 1, name: 'super BOHEN', strength: 3 };
    fixture.detectChanges();

    let deA = fixture.debugElement.query(By.css('a'));
    expect(deA.nativeElement.textContent).toContain('super BOHEN');
    expect(fixture.nativeElement.querySelector('a').textContent).toContain('super BOHEN');
  });
});
