import { Injectable } from '@angular/core';
import { WindowRef } from './sso.window';

const TITLE: string = 'Login with Socket';
const OPTIONS: any = {
  height: 684, // sets the height in pixels of the window.
  width: 585, // sets the width in pixels of the window.
  toolbar: 0, // determines whether a toolbar (includes the forward and back buttons) is displayed {1 (YES) or 0 (NO)}.
  scrollbars: 0, // determines whether scrollbars appear on the window {1 (YES) or 0 (NO)}.
  status: 0, // whether a status line appears at the bottom of the window {1 (YES) or 0 (NO)}.
  resizable: 0, // whether the window can be resized {1 (YES) or 0 (NO)}. Can also be overloaded using resizable.
  left: 0, // left position when the window appears.
  top: 0, // top position when the window appears.
  center: 0, // should we center the window? {1 (YES) or 0 (NO)}. overrides top and left
  createnew: 0, // should we create a new window for each occurance {1 (YES) or 0 (NO)}.
  location: 0, // determines whether the address bar is displayed {1 (YES) or 0 (NO)}.
  menubar: 0 // determines whether the menu bar is displayed {1 (YES) or 0 (NO)}.
};

declare var screen: any;
/**
 * Provides utilities methods
 */
@Injectable()
export class SsoService {
  private nativeWindow: any;
  private options: any = OPTIONS;
  private title: string = TITLE;
  private opts: any;
  constructor(
    private winRef: WindowRef
  ) {
    this.nativeWindow = winRef.getNativeWindow();
  }

  public doAction(opts: any) {
    this.opts = opts;

    const loginWindow = this.nativeWindow.open(this.URI, this.title, this.params);
    // Puts focus on the newWindow
    if (this.nativeWindow.focus) {
      loginWindow.focus();
    }
  }

  get URI() {
    return `https://viasocket.com/sso?token_required=true&redirect_uri=${this.opts.redirectUri}`;
  }

  get params() {
    // tslint:disable-next-line:max-line-length
    return `location=${this.options.location},menubar=${this.options.menubar},height=${this.options.height},width=${this.options.width},toolbar=${this.options.toolbar},scrollbars=${this.options.scrollbars},status=${this.options.status},resizable=${this.options.resizable},screenX=${this.options.left},screenY=${this.options.top},left=${this.leftPosition},top=${this.topPosition}`;
  }

  get screenLeftPosition() {
    return this.nativeWindow.screenLeft !== undefined ? this.nativeWindow.screenLeft : screen.left;
  }

  get screenTopPosition() {
    return this.nativeWindow.screenTop !== undefined ? this.nativeWindow.screenTop : screen.top;
  }

  get leftPosition() {
    return ((this.availableWidth / 2) - (this.options.width / 2)) + this.screenLeftPosition;
  }

  get topPosition() {
    return ((this.availableHeight / 2) - (this.options.height / 2)) + this.screenTopPosition;
  }

  get availableWidth() {
    // tslint:disable-next-line:max-line-length
    return this.nativeWindow.innerWidth ? this.nativeWindow.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
  }

  get availableHeight() {
    // tslint:disable-next-line:max-line-length
    return this.nativeWindow.innerHeight ? this.nativeWindow.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
  }
}
