import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'demo-app',
    templateUrl: 'app/html/header.html',
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent { }