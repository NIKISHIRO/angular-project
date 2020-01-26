import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Page, singleUser, User} from "./classes";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<Page> {
    return this.http.get<Page>('https://reqres.in/api/users');
  }

  getUserById(id: number): Observable<singleUser> {
      return this.http.get<singleUser>(`https://reqres.in/api/users/${id}`);
  }

  updateUser(user: User) {
    return this.http.put(`https://reqres.in/api/users/${user.id}`, user);
  }

  deleteUserById(id: number): Observable<User> {
    return this.http.delete<User>(`https://reqres.in/api/users/${id}`);
  }
}
