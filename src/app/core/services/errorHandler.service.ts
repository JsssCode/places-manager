import { ErrorHandler, Injectable} from '@angular/core';
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor() { }
  handleError(error) {
     alert(error)
     throw error;
  }
  
}