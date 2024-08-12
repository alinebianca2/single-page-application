import { Component, OnInit } from '@angular/core';
import { MunicipioService } from '../../../src/services/municipio.service';

@Component({
  selector: 'app-municipio-selector',
  templateUrl: './municipio-selector.component.html',
  styleUrls: ['./municipio-selector.component.css'],
})
export class MunicipioSelectorComponent implements OnInit {
  ufs = ['SP', 'RJ', 'MG', 'ES'];
  municipios: any = [];

  constructor(private municipioService: MunicipioService) {}

  ngOnInit(): void {}

  onUfChange(uf: string) {
    this.municipioService.getMunicipios(uf).subscribe((data) => {
      this.municipios = data;
    });
  }
}
