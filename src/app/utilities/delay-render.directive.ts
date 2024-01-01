import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appDelayRender]'
})
export class DelayRenderDirective implements OnInit {
    @Input('appDelayRender') delay: number = 100;

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef
    ) { }

    ngOnInit() {
        setTimeout(() => {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }, this.delay);
    }
}
