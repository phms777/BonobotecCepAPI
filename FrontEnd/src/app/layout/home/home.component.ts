import { Component, OnInit } from '@angular/core';
import Address from 'src/app/models/Address';
import { AddressService } from 'src/app/Services/address.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  address: Address;
  constructor(private addressService: AddressService) {
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

  getAddress(cepEvent: any) 
  {
    var cep = cepEvent.target.value;
    cep = cep.replace(/\D/g,'');
    var validarCep = /^[0-9]{8}$/;
    validarCep.test(cep)
    if(validarCep.test(cep))
    {      
      this.addressService.getAddress(cep)
      .then(result =>
        this.address = result as Address
      )
    }    
  }
}
