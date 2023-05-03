// api.test.js
const axios = require('axios');
const fetchDataFromAPI = require('./api');

jest.mock('axios');

test('Teste de consumo da API', async () => {
  const mockData = { message: 'Hello, World!' };
  axios.get.mockResolvedValue({ data: mockData });

  const data = await fetchDataFromAPI();

  expect(data).toEqual(mockData);
  expect(axios.get).toHaveBeenCalledTimes(1);
  expect(axios.get).toHaveBeenCalledWith('https://api.example.com/data');
});
