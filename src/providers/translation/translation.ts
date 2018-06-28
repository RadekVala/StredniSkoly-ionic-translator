import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
/*
  Generated class for the TranslationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TranslationProvider {

  constructor(public http: Http) {
    console.log('Hello TranslationProvider Provider');
  }

  getTranslation(text){
    let url = 'https://api.mymemory.translated.net/get?q='+encodeURI(text)+'!&langpair=cs|en';
    return this.http.get(url); //.map(res => res.json());
  }

}
