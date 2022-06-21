import React from 'react';
import '@testing-library/jest-dom';
import { render, cleanup, waitFor } from '@testing-library/react';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import Fetch from '../components/Fetch';

describe('Fetch', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);

    axios.get = jest.fn().mockImplementation({});
    axios.get.mockResolvedValueOnce({ data: 'Render' });
  });

  afterEach(() => {
    cleanup();
    document.querySelector('div').remove();
    container = null;
  });

  it('Renderiza texto "Loading..." enquanto esperando a api', async () => {
    const url = '/api/greeting';
    const setData = jest.fn().mockImplementation(() => ({}));
    act(() => {
      container = render(
        <Fetch url={url} setData={setData}>
          <div>Fail</div>
        </Fetch>,
      );
    });

    const loading = await waitFor(() => container.getByText('Loading...'));
    expect(loading).toHaveTextContent('Loading...');
  });

  it('Quando a promesa é resolvida se retorna conteúdo esperado', async () => {
    const url = '/api/greeting';
    const setData = jest.fn().mockImplementation(() => ({}));
    act(() => {
      container = render(
        <Fetch url={url} setData={setData}>
          <div data-testid="resolved">Render</div>
        </Fetch>,
      );
    });

    const resolved = await waitFor(() => container
      .getByTestId('resolved')).then((element) => element.textContent);
    expect(resolved).toBe('Render');
  });
});
