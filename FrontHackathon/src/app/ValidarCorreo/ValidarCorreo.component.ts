import { Component, OnInit } from '@angular/core';
import { EmailValidationService } from '../services/spam-validation.service';
import { ValidateEmailRequest, ValidateEmailResponse } from '../models/email-validate';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'validar-correo',
  templateUrl: './validarCorreo.component.html',
  styleUrls: ['./validarCorreo.component.scss']
})
export class ValidarCorreoComponent implements OnInit {

  formValidar : any;
  response : ValidateEmailResponse;

  constructor(private spamService : EmailValidationService, 
              private fb : FormBuilder
          ) { 
    this. formValidar = fb.group({
      email : []
    })

    this.response = {text : "", isSpam : false};

  }
  
  ngOnInit(): void {

    

  
  }

  ValidarCorreo(){
    debugger;
    let obj : ValidateEmailRequest= {
      text : this.formValidar.controls.email.value,
      desconocido : false,
      tieneMuchosLinks : false     
    }
    debugger;
     this.response = {
      text: "",
      isSpam : false
    }
    this.spamService.isSpam(obj).subscribe((data : any) =>{
      debugger;
      this.response = this.spamService.extractJsonFromText(data);
    
  },
  (error : any) =>{
      this.response.text = "error";
      this.response.error = true;
      this.response.isSpam = false;
      
  });
  }
}