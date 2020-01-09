import { AbstractControl, ValidationErrors } from '@angular/forms';


//in order to access the method of 'cannotContainSpace' outside without creating an instance of usernameValidator class, we can put static in front of the method
//and then we can use UsernameValidators.cannotContainSpace
export class UsernameValidators {
    //customize validator function
    static cannotContainSpace(c: AbstractControl): ValidationErrors | null {
        if ((c.value as string).indexOf(' ') >= 0) {
            return {
                cannotContainSpace: true //error's name you want to give,if you want to return detail value, simple boolean is enough
            }// if you want to put value for the error, here is the example
            //return { minlength:{
            //  requiredLength:10,
            //  actualLength:c.value.length
            // }}
        } else {
            return null
        }
    }

    //when you use asynchonous operations(calling the server or settimeout()), you need to use Promoise method
    static shouldBeUnique(c: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (c.value === "june") {
                    resolve ({ shouldBeUnique: true })
                } else {
                    resolve (null);
                }
            }, 2000)
        })

    }
}