import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Routine } from "./routine";
import {  HttpClient } from "@angular/common/http"
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

//Funtions to communicate with API
export class RoutineService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    //Get Request from Http Client
    public getAllRoutines(): Observable<Routine[]> {
        return this.http.get<Routine[]>(`${this.apiServerUrl}/routine/all`);
     }
     //Post Request from Http Client
    public addRoutine(routine: Routine): Observable<Routine> {
            return this.http.post<Routine>(`${this.apiServerUrl}/routine/add`, routine);
    }
    //put request from http client
    public updateRoutine(routine: Routine): Observable<Routine> {
        return this.http.put<Routine>(`${this.apiServerUrl}/routine/update`, routine);
    }
    //delete a routine
    public deleteRoutine(routineId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/routine/delete/${routineId}`);
    }
}