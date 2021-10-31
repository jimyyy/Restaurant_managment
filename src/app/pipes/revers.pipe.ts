import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'revers'
})
export class ReversPipe implements PipeTransform {

  transform(chaine: string,): string {
     let i:any;
     let aux="";

    


    for(i=0;i<=chaine.length;i++){
      aux=chaine[i]+aux;
    }
    chaine=aux


    return chaine;
  }

}
