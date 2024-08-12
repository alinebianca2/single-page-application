import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MunicipioListComponent } from './municipio-list/municipio-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'spa-api-client';
  teste: any = "TESTE"

  options = [
    { value: 'option1', viewValue: 'Opção 1' },
    { value: 'option2', viewValue: 'Opção 2' },
    { value: 'option3', viewValue: 'Opção 3' }
  ];

  selectedOption: string | undefined;
}
