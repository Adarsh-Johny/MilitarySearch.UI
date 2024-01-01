import { NgModule } from '@angular/core';
import { DelayRenderDirective } from './delay-render.directive';

@NgModule({
    declarations: [
        DelayRenderDirective,
    ],
    exports: [
        DelayRenderDirective,
    ],
})
export class DelayRenderModule { }
