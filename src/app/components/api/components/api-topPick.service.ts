import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Postman, POSTMAN } from '../postman';
import { ApiService } from '../common/api.service';
import { ParamTopPick } from '../params/topPick';


@Injectable({
  providedIn: 'root'
})
export class TopPickService {

  constructor(private apiService: ApiService, @Inject(POSTMAN) public postman: Postman) { }

  getTopPicks(): Observable<ParamTopPick[]> {
    return this.apiService.get(this.postman.topPick().getAll);
  }
}
