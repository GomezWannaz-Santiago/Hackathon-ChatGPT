import { Injectable } from '@angular/core';
import { OpenAIApi, Configuration } from 'openai';
import { filter, from, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatGptService {

  constructor() { }

  readonly configuration = new Configuration({
    apiKey: "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"
  });

  readonly openai = new OpenAIApi(this.configuration);

    getDataFromOpenAI(text: string) {
        return from(this.openai.createCompletion({
            model: 'text-davinci-003',
            // Agregamos a la conversación el mesansaje en cuestión
            prompt: text,
            temperature: 0.9,
            max_tokens: 150,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0.6,
            stop: [' Human:', ' AI:'],
        })).pipe(
          filter(resp => !!resp && !!resp.data),
          map(resp => resp.data),
          filter((data: any) => data.choices && data.choices.length > 0 && data.choices[0].text),
          map(data => data.choices[0].text)
        );
      }

}