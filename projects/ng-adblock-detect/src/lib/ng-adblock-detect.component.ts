import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core'

@Component({
  selector: 'ng-adblock-detect',
  template: `
  <div id="wrapfabtest">
    <div #adBanner class="adBanner">
    </div>
  </div>
  `,
  styles: [`

  .adBanner {
    background-color: transparent;
    height: 1px;
    width: 1px;
}

  `]
})
export class NgAdblockDetectComponent implements OnInit, AfterViewInit {
  @ViewChild('adBanner', { static: false }) adBanner: ElementRef

  @Input() timer: number = 1000
  @Output() adblockDetected = new EventEmitter<boolean>()

  ngOnInit () {
  }

  ngAfterViewInit () {
    setTimeout(_ => this.adblockDetected.emit(this.adBanner.nativeElement.offsetHeight === 0), this.timer)
  }
}
