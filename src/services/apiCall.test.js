import { fetchCats } from './apiCall';

describe('api gets called', () => {
  
  it('calls API and gets 200 code', ()=> {
    fetchCats().then(res => {
      expect(res.status).toEqual(200);
    })
  });

  it('calls API and gets 5 cats', ()=> {
    fetchCats().then(res => {
      expect(res.body.length).toEqual(5);
    })
  });
});


