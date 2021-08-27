import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gangster } from '@mafias/api-interfaces';
import { mapTo } from 'rxjs/operators';

export const BASE_URL = 'https://db-30x30.herokuapp.com/';

@Injectable({
  providedIn: 'root',
})
export class GangstersService {
  private model = 'gangsters';
  constructor(private httpClient: HttpClient) {}

  all() {
    return this.httpClient.get<Gangster[]>(this.getUrl());
  }

  find(id: string) {
    return this.httpClient.get<Gangster>(this.getUrlById(id));
  }

  create(gangster: Gangster) {
    return this.httpClient.post<Gangster>(this.getUrl(), gangster);
  }

  update(gangster: Gangster) {
    return this.httpClient.patch<Gangster>(
      this.getUrlById(gangster.id),
      gangster
    );
  }

  delete(gangster: Gangster) {
    return this.httpClient
      .delete<Gangster>(this.getUrlById(gangster.id))
      .pipe(mapTo(gangster));
  }

  private getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  private getUrlById(id: string) {
    return `${this.getUrl()}/${id}`;
  }
}
