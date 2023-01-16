import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../empresa.service';
import { MatTableDataSource } from '@angular/material/table';
import { Qsa } from '../empresa.type';
import { firstValueFrom } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-empresaCard',
  templateUrl: './empresaCard.component.html'
})
export class EmpresaCardComponent implements OnInit {

  formEmpresa: FormGroup;
  formEndereco: FormGroup;

  displayedColumns: string[] = ['socios'];

  dataSource: MatTableDataSource<Qsa>;

  constructor(
    private _empresaService: EmpresaService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formEmpresa = this.formBuilder.group({

      mercado: ['', [Validators.required]],
      site: [''],
      razaoSocial: ['', [Validators.required]],
      nomeFantasia: ['', [Validators.required]],
      capitalSocial: ['', [Validators.required]],
      cnpj: ['', [Validators.required, Validators.maxLength(14), Validators.minLength(14), Validators.pattern("^[0-9]*$")]],
      cnae: ['', [Validators.required, Validators.maxLength(7), Validators.minLength(7), Validators.pattern("^[0-9]*$")]],
      cnaeDescricao: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      telefone: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      endereco: ['']

    })

    this.formEndereco = this.formBuilder.group({

      cep: ['', [Validators.required]],
      uf: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
      bairro: ['', [Validators.required]],
      longradouro: ['', [Validators.required]],
      numero: ['', [Validators.required]],
      complemento: ['']

    })

  }

  buscarEmpresa() {

    this._empresaService.findByBrasilAPI(this.formEmpresa.controls['cnpj'].value).subscribe((empresa) => {

      this.formEmpresa.patchValue({
        razaoSocial: empresa.razao_social,
        nomeFantasia: empresa.nome_fantasia,
        capitalSocial: empresa.capital_social,
        email: empresa.email,
        telefone: empresa.ddd_telefone_1,
        cnae: empresa.cnae_fiscal,
        cnaeDescricao: empresa.cnae_fiscal_descricao

      });

      this.dataSource = new MatTableDataSource(empresa.qsa);

      this._empresaService
        .findCEPByBrasilAPI(empresa.cep)
        .subscribe((endereco) => {

          this.formEndereco.patchValue({
            cep: endereco.cep,
            uf: endereco.state,
            cidade: endereco.city,
            bairro: endereco.neighborhood,
            longradouro: endereco.street,
    
          });
        });
    });

  }

  adicionarEmpresa() {

    firstValueFrom(

      this._empresaService.saveEndereco(this.formEndereco.value)

    ).then(endereco => {

      this.formEmpresa.patchValue({
        endereco: endereco
      })

      firstValueFrom(

        this._empresaService.saveEmpresa( this.formEmpresa.value)

      ).then(empresa => {

        window.location.reload();

      })


    });



  }

}
