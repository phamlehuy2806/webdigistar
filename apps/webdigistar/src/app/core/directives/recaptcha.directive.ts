import { DOCUMENT } from '@angular/common';
import { Inject, OnDestroy, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { NgZone } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Directive } from '@angular/core';
import { environment } from '../../../environments/environment';

@Directive({
  selector: '[webdigistarorgRecaptcha]',
})
export class RecaptchaDirective implements OnInit, OnDestroy {
  @Output() recaptchaSuccess = new EventEmitter<string>();
  @Output() recaptchaExpired = new EventEmitter<unknown>();
  @Output() recaptchaError = new EventEmitter<unknown>();

  private readonly scriptId = 'recaptcha-script';
  private widgetId: number;

  constructor(
    private readonly elementRef: ElementRef,
    private readonly ngZone: NgZone,
    @Inject(DOCUMENT) private readonly dom: Document
  ) {}

  ngOnInit() {
    this.registerCaptchaCallback();
    this.addScript();
  }

  ngOnDestroy() {
    this.widgetId = null;
  }

  private registerCaptchaCallback() {
    window['recaptchaCallback'] = () => {
      const config = {
        sitekey: environment.recaptchaSitekey,
        callback: this.onSuccessCallback.bind(this),
        'error-callback': this.onErrorCallback.bind(this),
        'expired-callback': this.onExpiredCallback.bind(this),
      };
      this.widgetId = this.renderCaptcha(config);
    };
  }

  private renderCaptcha(config: any): number {
    return window['grecaptcha'].render(this.elementRef.nativeElement, config);
  }

  private addScript() {
    if (this.dom.getElementById(this.scriptId) != null) {
      return;
    }

    const script = this.dom.createElement('script');
    script.src =
      'https://www.google.com/recaptcha/api.js?onload=recaptchaCallback&render=explicit';
    script.id = this.scriptId;
    script.async = true;
    script.defer = true;
    this.dom.body.appendChild(script);
  }

  private onSuccessCallback(token: string) {
    this.ngZone.run(() => {
      this.recaptchaSuccess.emit(token);
    });
  }

  private onErrorCallback() {
    this.ngZone.run(() => {
      this.recaptchaError.emit();
    });
  }

  private onExpiredCallback() {
    this.ngZone.run(() => {
      this.recaptchaExpired.emit();
    });
  }
}
