import { Injectable, ChangeDetectorRef}     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Movie } from './movie';

@Injectable()
export class HomeService {
    private baseUrl = 'http://jsonplaceholder.typicode.com/posts';
    private mUrl = 'http://jsonplaceholder.typicode.com/posts?userId=1';  
    constructor(private http: Http) { }

    getMovies(): Promise<Movie[]> {
        return this.http.get(this.mUrl)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        console.log(body);
        if (body) {
            return body;
        }
        else {
            return [];
        }
    }


    addMovie(title: string, body: string, userId: number): Promise<Movie> {
        let body1 = JSON.stringify({
            title,
            body,
            userId
        });
        console.log(body1);
        let headers = new Headers(
            {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.baseUrl, body1, options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    delete(movie: Movie) {
        let headers = new Headers(
            {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            });

        let url = `${this.baseUrl}/${movie.id}`;
        console.log(movie.id);
        return this.http
            .delete(url, { headers: headers })
            .toPromise()
            .catch(this.handleError);
    }

    update(title: string, body: string, userId: number, id: number): Promise<Movie> {
        let body1 = JSON.stringify({
            title,
            body,
            userId,
            id
        });
        let headers = new Headers(
            {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            });

        let url = `${this.baseUrl}/${id}`;
        let options = new RequestOptions({ headers: headers });
        return this.http.put(url, body1, options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}