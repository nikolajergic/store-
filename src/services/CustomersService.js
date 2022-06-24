class CustomersService {
constructor(){
  this.customers = {ime:'Marko', prezime:'Markovic', id:1},
  {ime:'Perica', prezime:'Peric', id:2},
  {ime:'Nikola', prezime:'Jergic', id:3},
  {ime:'Ivica', prezime:'Ivic',id:4}
}

    getAll() {
      return this.customers;
    }
    get(id) {
      // send request to get video with id from server through http client
    }
  }
  export default new CustomersService;