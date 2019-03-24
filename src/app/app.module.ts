import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {AuthGuard} from './core/guards/auth.guard';
import {HttpClientModule} from '@angular/common/http';
import { DonationComponent } from './features/donation/donation.component';

@NgModule({
    declarations: [
        AppComponent,
        DonationComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot([
            {path: 'donation', component: DonationComponent},
            {path: 'cars', loadChildren: './features/car/car.module#CarModule', canLoad: [AuthGuard]},
            {path: 'trucks', loadChildren: './features/truck/truck.module#TruckModule', canLoad: [AuthGuard]},
        ]),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
