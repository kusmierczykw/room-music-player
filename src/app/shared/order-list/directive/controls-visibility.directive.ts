import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  Renderer2,
} from '@angular/core';
import { isNil } from '../../../util/type/nullable';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[controlsVisibility]',
  standalone: true,
})
export class ControlsVisibilityDirective implements AfterViewInit {
  @Input() controlsVisibility: boolean = true;

  readonly CONTROLS_SELECTOR = '.p-orderlist-controls';

  private _controlsHtmlElement!: HTMLElement;

  constructor(
    private readonly renderer: Renderer2,
    private readonly elementRef: ElementRef,
  ) {}

  ngAfterViewInit(): void {
    this.configureControlsVisibility();
  }

  private configureControlsVisibility(): void {
    if (this.controlsVisibility) {
      return;
    }

    this.removeControlsFromUI();
  }

  private controlsHtmlElement(): HTMLElement {
    if (!isNil(this._controlsHtmlElement)) {
      return this._controlsHtmlElement;
    }

    this._controlsHtmlElement = this.elementRef.nativeElement.querySelector(
      this.CONTROLS_SELECTOR,
    );

    return this._controlsHtmlElement;
  }

  private removeControlsFromUI(): void {
    const parent = this.controlsHtmlElement().parentElement;

    this.renderer.removeChild(parent, this.controlsHtmlElement());
  }
}
