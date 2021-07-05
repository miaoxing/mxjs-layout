import {render} from '@testing-library/react';
import {FooterBar} from '..';

describe('test', () => {
  test('basic', () => {
    const result = render(<FooterBar/>);
    expect(result.container).toMatchSnapshot();
  });
});

