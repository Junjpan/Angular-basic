import { ErrorHandler } from '@angular/core';

//global error handling-Consuming HTTP serve,
//need to register as indpendence as a provider in the AppModule
//the default ErrorHandler prints error messages to the console. to intercept e
export class AppErrorHandler implements ErrorHandler{
    handleError(error){
        alert('An unexpected error occurred!!!');
                  console.log(error);
    }
    
}