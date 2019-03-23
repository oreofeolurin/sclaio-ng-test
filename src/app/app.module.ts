import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {AuthGuard} from './core/guards/auth.guard';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot([
            {path: 'cars', loadChildren: './features/car/car.module#CarModule', canLoad: [AuthGuard]},
            {path: 'trucks', loadChildren: './features/truck/truck.module#TruckModule', canLoad: [AuthGuard]},
        ]),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
