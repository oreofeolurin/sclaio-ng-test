import {Injectable} from '@angular/core';
import {CanLoad, Route, UrlSegment} from '@angular/router';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanLoad {
    constructor(private http: HttpClient) {

    }

    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
        const credentials = {login: 'username', password: 'pass'};
        return this.http.post(`${environment.API_BASE}/login`, credentials)
            .pipe(
                map(res => true),
                catchError(err => of(false))
            );
    }
}
