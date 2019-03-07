import { Identifiers } from '@angular/compiler';

export class car {
    private make: string;
    private model: string;
    private year: string;
    private id: string;
  
    constructor(data) {
      Object.assign(this, data);
    }
  
    get Make() {
      return this.make;
    }
  
    get Email() {
      return this.model;
    }
    
    get Year () {
      return this.year;
    }

    set Id (e) {
      this.id = e;
    }
  }