import { Injectable } from '@angular/core';

@Injectable()
export class WindowRef {
  constructor() {
    //
  }

  public getNativeWindow() {
    return window;
  }
}
