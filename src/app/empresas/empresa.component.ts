import { EmpresaCardComponent } from './empresaCard/empresaCard.component';
import { EmpresaModel } from './empresa.type';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EmpresaService } from './empresa.service';
import { MatDialog } from '@angular/material/dialog';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresa.component.html'
})
export class EmpresaComponent implements OnInit {
  displayedColumns: string[] = ['foiDeletada', 'id', 'cnpj', 'nomeFantasia', 'email', 'telefone', 'endereco', 'opcoes'];
  dataSource: MatTableDataSource<EmpresaModel>;

  constructor(
    private _empresaService: EmpresaService,
    public dialog: MatDialog
    ) {
    this._empresaService.findAll().subscribe((DTO) => {

      this.dataSource = new MatTableDataSource(DTO.content);

    });
  }
  ngOnInit(): void {}

  ngAfterViewInit() {
  }

  adicionarEmpresa(){
    const dialogRef = this.dialog.open(EmpresaCardComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  desativarEmpresa(empresa: EmpresaModel){

    empresa.foiDeletada = true;

    firstValueFrom(

    this._empresaService.saveEmpresa(empresa)
    
    ).then( empresa => {

      this._empresaService.findAll().subscribe((DTO) => {

        this.dataSource = new MatTableDataSource(DTO.content);
  
      });
      
    })

  }
}
