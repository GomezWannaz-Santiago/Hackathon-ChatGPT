import { Injectable } from "@angular/core";
import { PasswordRequest } from "../models/password-request.model";
import { ChatGptService } from "./chat-gpt.service";

@Injectable({
    providedIn: 'root',
  })
  
  
export class PasswordGeneratingService {
  
    constructor(private chatGptService : ChatGptService) { }
  
    generatePassword(obj : PasswordRequest) : any{
      let stringRequest : string  ="Genera una contraseña que contenga las siguientes palabras clave: ";          
      obj.palabrasClave.forEach(p => {
        stringRequest += p +" ";
      })

      if(obj.agregarNumeros || obj.agregarSimbolos || obj.alternarMayusculas){
        stringRequest += "Y considera los siguientes parámetros: "
        
        stringRequest += (!obj.agregarNumeros ? "No agregues" : "Agrega " )+ "números";
        stringRequest += (!obj.agregarSimbolos ? "No agregues" : "Agrega " )+ "símbolos";
        stringRequest += (!obj.alternarMayusculas ? "No alternes" : "Alterna " )+ "mayúsculas y minúsculas";
      }
      

      return this.chatGptService.getDataFromOpenAI(stringRequest);        
    }


}
