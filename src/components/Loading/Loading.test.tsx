import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Loading from './Loading';

describe('Loading component', () => {
  it('has default message', () => {
    const { getByText } = render(<Loading />);

    getByText('Загрузка...');
  });

  test('snapshot', () => {
    const { container } = render(<Loading />);
    expect(container).toMatchSnapshot();
  });

  it('displays custom message', () => {
    const loadingMessage = 'Пожалуйста, подождите';
    const { getByText } = render(<Loading message={loadingMessage} />);

    getByText(loadingMessage);
  });
});
