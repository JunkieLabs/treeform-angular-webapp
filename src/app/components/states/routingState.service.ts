import { Injectable, Inject } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class RoutingStateService {

    private history = [];

    constructor(
        private router: Router
    ) {}

    public loadRouting(): void {
        this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(({urlAfterRedirects}: NavigationEnd) => {
            this.history = [...this.history, urlAfterRedirects];
        });
    }

    public getHistory(): string[] {
        return this.history;
    }

    public getPreviousUrl(): string {
        return this.history[this.history.length - 2] || '';
    }

}
