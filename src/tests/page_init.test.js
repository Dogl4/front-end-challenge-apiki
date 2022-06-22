import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { Card } from '../components';
import { mockObjDataCard, mockArrDataCard } from './mock';

describe('Componente Card', () => {
  it('Deve exixtir 10 Cards ou mais na tela', async () => {
    const { container } = await render(
      <div>
        { mockArrDataCard.map((item) => <Card key={item.id} data={item} />) }
      </div>,
    );

    const card = container.querySelectorAll('.card');
    expect(card.length).toBeGreaterThanOrEqual(10);
  });

  it('Contém apenas uma imagem', () => {
    const { container } = render(<Card data={mockObjDataCard} />);
    const card = container.getElementsByTagName('img');

    expect(card[0]).toBeInTheDocument();
    expect(card[1]).toBeUndefined();
  });

  it('Contém apenas um titulo h2', () => {
    const { container } = render(<Card data={mockObjDataCard} />);
    const card = container.getElementsByTagName('h2');

    expect(card[0]).toBeInTheDocument();
    expect(card[1]).toBeUndefined();
  });

  it('Contém um link', () => {
    const { container } = render(<Card data={mockObjDataCard} />);
    const card = container.getElementsByTagName('a');
    expect(card[0]).toBeInTheDocument();
  });
});
