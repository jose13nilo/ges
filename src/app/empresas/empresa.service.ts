import { EmpresaBrasilAPI, EmpresaDTOModel, EmpresaModel, Endereco, EnderecoDTO } from './empresa.type';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private http: HttpClient) { }

  findAll():Observable<EmpresaDTOModel> {

    return this.http.get<EmpresaDTOModel>("api/empresa");

  }

  saveEmpresa(empresa: EmpresaModel){

    console.log(JSON.stringify(empresa))

    return this.http.post<EmpresaModel>("api/empresa/save", empresa)

  }

  findByBrasilAPI(cnpj: string){

      return this.http.get<EmpresaBrasilAPI>(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`);

  }

  findCEPByBrasilAPI(cep: string){

    return this.http.get<Endereco>(`https://brasilapi.com.br/api/cep/v1/${cep}`);

}

saveEndereco(endereco: EnderecoDTO){

  return this.http.post<EnderecoDTO>(`api/endereco/save`, endereco)

}

}
