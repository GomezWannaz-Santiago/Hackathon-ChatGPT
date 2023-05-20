import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PasswordGeneratingService } from '../services/password-generating.service';
import { PasswordResponse } from '../models/password-response.model';

@Component({
  selector: 'password-Segurity',
  templateUrl: './passwordSegurity.component.html',
  styleUrls: ['./passwordSegurity.component.scss']
})
export class PasswordSegurityComponent implements OnInit {

  form : any
  response : any;

  constructor(private fb : FormBuilder, private securitySvc : PasswordGeneratingService) { 
    this.form = fb.group({
      palabraClave1 : [],
      palabraClave2 : [],
      palabraClave3 : [],
      intercalarMayus : [],
      agregarSimbolos : [],
      noUsarMayusculas : [],
      agregarNumeros : []
    });
  }

  
  ngOnInit(): void {
  }

  submit() {
    this.response = undefined;
    if(!this.form.valid)
      return;

    let request  ={
      palabrasClave : [this.form.value.palabraClave1, this.form.value.palabraClave2, this.form.value.palabraClave3],
      alternarMayusculas : this.form.value.intercalarMayus,
      agregarSimbolos : this.form.value.agregarSimbolos,
      agregarNumeros : this.form.value.agregarNumeros
    }
    debugger;
    this.securitySvc.generatePassword(request).subscribe((data : any) =>{
      if(data){
        this.response = {password : data};
      }
        
    })


  }
}
