import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allcontact:any[],searchkey:string,FirstName:string,lastname:string): any[] {
    const result:any=[]
    if (!allcontact || searchkey == '' || FirstName == '' || lastname==''){
      return allcontact
    }
    allcontact.forEach((contact:any)=>{
      if((contact[FirstName]+contact[lastname]).trim().toLowerCase().includes(searchkey.trim().replace(/ +/g, '').toLowerCase())){
        result.push(contact)
      }
      else if ((contact[lastname]+contact[FirstName]).trim().toLowerCase().includes(searchkey.trim().replace(/ +/g, '').toLowerCase())){
        result.push(contact)
      }
        
    })
    return result
  }


}
