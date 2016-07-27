import { Component} from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import { Movie }                from '../home/movie';
import { HomeService }         from '../home/home.service';
//@Component({
//    selector: 'about-home',
//    template: `<h3>About Home</h3>`
//})
//export class AboutHomeComponent { }

//@Component({
//    selector: 'about-item',
//    template: `<h3>About Item Id: {{id}}</h3>`
//})
//export class AboutItemComponent {
//    id: any;
//    paramsSub: any;

//    constructor(private activatedRoute: ActivatedRoute) { }

//    ngOnInit() {
//        this.paramsSub = this.activatedRoute.params.subscribe(params => this.id = +params['id']);
//    }

//    ngOnDestroy() {
//        this.paramsSub.unsubscribe();
//    }
//}

//@Component({
//    selector: 'app-about',
//    template: `
//      <h2>About</h2>
//      <a [routerLink]="['/about']">Home</a>
//	    <a [routerLink]="['/about/item', 1]">Item 1</a>
//	    <a [routerLink]="['/about/item', 2]">Item 2</a>
//      <div class="inner-outlet">
//        <router-outlet></router-outlet>
//      </div>
//    `,
//    directives: [ROUTER_DIRECTIVES]
//})
//export class AboutComponent { }


@Component({
    selector: 'app-about',
    templateUrl: 'app/html/create.html',
    directives: [ROUTER_DIRECTIVES]
})
export class AboutComponent {
    //model = new Movie(101,1, 'test', 'Chuck Overstreet');

    //submitted = false;

    //onSubmit() { this.submitted = true; }

    //// TODO: Remove this when we're done
    //get diagnostic() { return JSON.stringify(this.model); }

    //// Reset the form with a new hero AND restore 'pristine' class state
    //// by toggling 'active' flag which causes the form
    //// to be removed/re-added in a tick via NgIf
    //// TODO: Workaround until NgForm has a reset method (#6822)
    //active = true;

    //newHero() {
    //    this.model = new Movie(101,0, '', '');
    //    this.active = false;
    //    setTimeout(() => this.active = true, 0);
    //}

}