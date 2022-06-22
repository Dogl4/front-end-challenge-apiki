import dataApi from '../services/api';

describe('Fetch', () => {
  it('testando api', async () => {
    const arraydata = await dataApi();
    expect(typeof arraydata).toBe('object');
    expect(arraydata.length).toBe(10);
    expect(arraydata).not.toBeNull();
    expect(arraydata).not.toBeUndefined();
  });
});
