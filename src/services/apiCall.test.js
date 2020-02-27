import { fetchCats } from './apiCall';

describe('api gets called', () => {
  
  it('calls API', ()=> {
    fetchCats().then(res => {
      expect(res.body.length).toEqual(5);
    })
  });
});


