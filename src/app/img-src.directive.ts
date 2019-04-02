import { Directive,ElementRef ,HostListener} from '@angular/core';

@Directive({
  selector: '[appImgSrc]'
})
export class ImgSrcDirective {
  @HostListener('click') onclick() {
    this.highlight('yellow');
  }
  private highlight(color: string) {
   document.querySelector('#A1').setAttribute('src','adac');
 
  console.log(document.querySelector('#A1') );
  }
  constructor(private imageEl: ElementRef) { 


  }

}
