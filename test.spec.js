
    import { render } from '@testing-library/react';

describe('jest test', () => {
  it('works with isVisible', () => {
    const { container } = render(<div />);
    expect(container).toBeVisible();
  })
})