
import { AbstractControl,ValidationErrors } from '@angular/forms';


export class passwordValidator {
    static notTheSamePassword(c:AbstractControl):Promise <ValidationErrors|null> {
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    if(c.value!=='1234'){
                        resolve({notTheSamePassword:true})
                    }else{
                        resolve(null)
                    }
                },1000)
                
            })
    }



    static passwordShouldMatch(control:AbstractControl):ValidationErrors|null{
//at this particular validator , AbstractControl is actually a formgroup, in another word, we need to apply this validator in the form level.

        if(control.get('newPassword').value!==control.get('confirmPassword').value){
          return {passwordShouldMatch:true}
        }else 
        {
          return null
        }
    }

}