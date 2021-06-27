import { Component, OnInit } from '@angular/core';
import Address from 'src/app/models/Address';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  address: Address;
  constructor() {
    this.address = {
      cep: '',
      logradouro: '',
      complemento: '',
      bairro: '',
      localidade: '',
      uf: '',
      ibge: '',
      gia: '',
      ddd: '',
      siafi: ''
    }
  }

  ngOnInit(): void {
  }

}
