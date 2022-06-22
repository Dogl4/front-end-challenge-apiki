import dataFormatted from '../services/api';

describe('Fetch', () => {
  it('testando api', async () => {
    const { data } = await dataFormatted();
    expect(typeof data).toBe('object');
    expect(data.length).toBe(10);
    expect(data).not.toBeNull();
    expect(data).not.toBeUndefined();
  });
});
