import { Observable } from 'rxjs/Observable';
import axios from 'axios';

const api = {
  getCompanies() {
    return new Observable(observer => {
      axios.get('http://localhost:4000/companies')
        .then(response => {
          observer.next(response.data);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }
}

export default api;
