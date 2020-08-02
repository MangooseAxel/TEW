import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[forIf]'})
export class forIfDirective {

 constructor(
  private templateRef: TemplateRef<any>,
  private viewContainer: ViewContainerRef) { }

  @Input() set forIf(condition: boolean) {
   if (condition) {
     this.viewContainer.createEmbeddedView(this.templateRef);
   } else {
     this.viewContainer.clear();
   }
}

}
