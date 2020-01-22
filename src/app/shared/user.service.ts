import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./interfaces";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }



  getUserById(id: number): Observable<User> {
      return this.http.get<User>(`https://reqres.in/api/users/${id}`);
  }
}
