import { Injectable } from '@angular/core';
import { LoginRequest } from './loginRequest';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUserData: BehaviorSubject<User> = new BehaviorSubject<User>({id:0,email:''})

  constructor(private http:HttpClient) { }

  login(credentials:LoginRequest):Observable<User>{
   return this.http.get<User>('././assets/data.json').pipe(
    tap( UserData => {
      this.currentUserData.next(UserData);
      this.currentUserLoginOn.next(true)
    }),
    catchError(this.handleError)
   )
  }

  private handleError(error:HttpErrorResponse){
    if(error.status===0){
      console.log('Se ha producio un error',error,error)
    }
    else{
      console.error('Backend retornó el codigo de estado',error.status,error,error);
    }
    return throwError(()=> new Error('Algo fallo. Por favor intente denuevo'))
  }

  get userDaata():Observable<User>{
    return this.currentUserData.asObservable();
  }

  get userLoginOn(): Observable<boolean>{
    return this.currentUserLoginOn.asObservable();
  }

}
