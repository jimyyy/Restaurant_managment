import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'espace'
})
export class EspacePipe implements PipeTransform {

  transform(chaine:string): string {
    
    
    let result="";
    for (let i = 0; i < chaine.length; i++) {
      if(chaine[i]==" "){
        result=result+"_";
      }
      else{
        result=result+chaine[i];

      }
      
    }
    return result;
  }

}
