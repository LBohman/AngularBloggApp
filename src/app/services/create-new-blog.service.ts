import { Injectable } from '@angular/core';
import { Blog } from '../models/Blog';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateNewBlogService {

  constructor(private httpCall: HttpClient) { }

}
