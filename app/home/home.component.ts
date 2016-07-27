import { Component, OnInit } from '@angular/core';
import { Movie }                from './movie';
import { HomeService }         from './home.service';
@Component({
    selector: 'app-home',
    templateUrl: 'app/html/home.html',
    providers: [HomeService ]
})
export class HomeComponent implements OnInit {
    errorMessage: string;
    movies: Movie[];
    selectedHero: Movie;
    mode = 'Promise';
    error: any;

    constructor(
        private mService: HomeService) { }

    ngOnInit() {
        this.getMovies();
    }

    getMovies() {
        this.mService.getMovies()
            .then(
            movies => this.movies = movies,
            error => this.errorMessage = <any>error);
    }

    addMovie(title: string, body: string, userId: number) {
        if (!userId) { return; }
        this.mService.addMovie(title, body, userId)
            .then(
            movie => this.movies.push(movie),
            error => this.errorMessage = <any>error);
    }

    deleteMovie(movie: Movie, event: any) {
        event.stopPropagation();
        this.mService
            .delete(movie)
            .then(res => {
                this.movies = this.movies.filter(h => h !== movie);
                if (this.selectedHero === movie) { this.selectedHero = null; }
            })
            .catch(error => this.error = error);
    }

    updateMovie(title: string, body: string, userId: number, id: number) {
        event.stopPropagation();
        this.mService
            .update(title, body, userId, id)
            .then(
            movie => this.movies.push(movie),
            error => this.errorMessage = <any>error);
    }

}