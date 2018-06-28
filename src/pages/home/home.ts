import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TranslationProvider } from '../../providers/translation/translation'
import { TextToSpeech } from '@ionic-native/text-to-speech';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private result:string;

  constructor(public navCtrl: NavController,
    public provider: TranslationProvider,
    public tts: TextToSpeech
  ) {

  }

  doTranslation(input){
    this.result = input;

    // ziskame preklad pomoci provideru
    this.provider.getTranslation(input).subscribe(
      (data) => {
        // obsluha navratu dat z REST API
        console.log(data);
        data = JSON.parse(data._body);
        // vepiseme preklad do komponenty ion-card

        this.result = data.responseData.translatedText;
        this.tts.speak(this.result).then(
          () => {
            console.log('success');
          }
        ).catch(
          (error) => {
            console.log('moje APP: '+error);
          }
        );

      }
    );
  }

}
