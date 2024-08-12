import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Municipio {
  name: string;
  ibge_code: string;
}

@Injectable({
  providedIn: 'root',
})
export class MunicipioService {
  private baseUrl = 'https://brasilapi.com.br/api/ibge/municipios/v1';

  constructor(private http: HttpClient) {}

  getMunicipios(
    uf: string,
  ): Observable<Municipio[]> {
    const url = `${this.baseUrl}/municipios?uf=${uf}`;
    return this.http.get<Municipio[]>(url);
  }
}
