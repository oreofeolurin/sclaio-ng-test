import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {IndexComponent} from './index/index.component';

@NgModule({
    declarations: [IndexComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '', component: IndexComponent
            }
        ])
    ]
})
export class CarModule {
}
