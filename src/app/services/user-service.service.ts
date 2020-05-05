import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  getUserList() {
    return this.http.get('assets/data.json')
  }

  addUserList(data) {
    return this.http.post('https://jsonplaceholder.typicode.com/users', data)
  }

  deleteUser(id: number) {
    return this.http.delete('http://dummy.restapiexample.com/api/v1/delete/2')
  }
}
