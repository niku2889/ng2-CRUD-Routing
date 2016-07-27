import { XHRBackend } from '@angular/http';
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { AppComponent } from './app.component';
import { HTTP_PROVIDERS } from '@angular/http';

bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS, HTTP_PROVIDERS
]);