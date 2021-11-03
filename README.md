# Angular Adblock Detect
Super simple compact adblock detector for Angular 8+.  Angular Universal/SSR compatible.  

## Usage

First, import the NgAdblockDetectModule to your module:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgAdblockDetectModule } from 'ng-adblock-detect';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app';

@NgModule({
  imports: [BrowserModule, NgAdblockDetectModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
```

The **adblockDetected** callback will be invoked after the view has loaded:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <h1>Home Page</h1>

    <ng-adblock-detect (adblockDetected)="detected($event)"></ng-adblock-detect>
  `
})
export class AppComponent {
  
  detected(isDetected: boolean) {
    console.log(`Adblock Detected: ` ${isDetected});
  }
}
```

By default, the adblockDetected callback is invoked after 1 second.  This can be configured by passing in a **timer** parameter to the component (milliseconds):

```
<ng-adblock-detect (adblockDetected)="detected($event)" timer="5000"></ng-adblock-detect>
```

## DEMO
With adblock enabled, [click this link and navigate to a temporary phone number](https://quackr.io/temporary-numbers)




