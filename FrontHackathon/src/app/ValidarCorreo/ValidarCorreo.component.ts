import { Component, OnInit } from '@angular/core';
import { EmailValidationService } from '../services/spam-validation.service';
import { ValidateEmailRequest } from '../models/email-validate';

@Component({
  selector: 'validar-correo',
  templateUrl: './validarCorreo.component.html',
  styleUrls: ['./validarCorreo.component.scss']
})
export class ValidarCorreoComponent implements OnInit {

  constructor(private spamService : EmailValidationService) { }

  
  ngOnInit(): void {

    let obj : ValidateEmailRequest= {
      text : "Pasame tu numero de tarjeta. Esto es Spam" ,
      desconocido : false,
      tieneMuchosLinks : false     
    }
    this.spamService.isSpam(obj)


  }}