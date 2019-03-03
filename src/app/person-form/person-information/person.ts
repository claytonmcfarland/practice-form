import { Identifiers } from '@angular/compiler';

class person {
    private name: string;
    private email: string;
    private number: string;
    private id: string;
  
    constructor(data) {
      Object.assign(this, data);
    }
  
    get Name() {
      return this.name;
    }
  
    get Email() {
      return this.email;
    }
    
    get Number () {
      return this.number;
    }

    set Id (e) {
      this.id = e;
    }
  }
  
export { person }