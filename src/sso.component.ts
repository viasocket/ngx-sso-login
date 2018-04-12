import { Renderer2, ElementRef, Component, Optional, Inject, InjectionToken, Input, OnInit } from '@angular/core';
import { ISsoOptions } from '.';
import { SsoService } from './sso.service';

/**
 * Universal SsoComponent component that
 * login with and returned with redirect URI
 *
 * @export
 * @class SsoComponent
 * @implements {OnInit}
 */

@Component({
  selector: 'ngx-sso-btn',
  styleUrls: ['./sso.scss'],
  templateUrl: './sso.html'
})

export class SsoComponent implements OnInit {
  @Input() public config: ISsoOptions;
  public btnTxt: string = 'Sign in';
  public drawBtnUi: boolean = false;
  constructor(
    public renderer: Renderer2,
    public elementRef: ElementRef,
    private _ssoService: SsoService
  ) {
    // listen to click events on the root element
    // this.renderer.listen(this.elementRef.nativeElement, 'click', (event: any) => {
    //   console.log ('bingo', event);
    // });
  }

  public ngOnInit() {
    if (this.config && this.config.redirectUri && this.config.tokenKey) {
      this.drawBtnUi = true;
    }
  }

  public login() {
    this._ssoService.doAction(this.config);
  }

}
