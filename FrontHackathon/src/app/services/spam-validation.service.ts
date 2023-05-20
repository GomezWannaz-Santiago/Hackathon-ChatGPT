import { Injectable } from '@angular/core';
import { OpenAIApi, Configuration } from 'openai';
import { Observable, filter, from, map } from 'rxjs';
import { ValidateEmailRequest, ValidateEmailResponse } from '../models/email-validate';
import { ChatGptService } from './chat-gpt.service';

@Injectable({
  providedIn: 'root',
})

export class EmailValidationService {


    constructor(private chatGptSvc : ChatGptService) {    

    }

    isSpam(email : ValidateEmailRequest) : any{  
        debugger;
        
        let texto =  "necesito que me respondas si el siguiente mensaje es spam, la respuesta debe estar en un formato especifico, tiene que devolverme un JSON que tenga un parametro isSpam que sea verdadero si el mail es smap y falso si no lo es, luego una lista de razones, el email es:";
        texto += email.text;
        
        email.text = texto;        
        return this.chatGptSvc.getDataFromOpenAI(email.text)
    }


    extractJsonFromText(text : string) : ValidateEmailResponse{
        let result : ValidateEmailResponse = {
            text : "",
            isSpam : false,
            error : true
        };
        
        
        if(!text.indexOf("{") || !text.indexOf("}")){
            result.text = text;
        }
        else{
            try{
            text = text.substring(text.indexOf("{"), text.lastIndexOf("}")+1).replaceAll("\n", "");

            result = JSON.parse(text)    
        }catch{
            
        }        
        }
        return result;
    }

}
