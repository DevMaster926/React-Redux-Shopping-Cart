import React from 'react';
import { render } from 'enzyme';
import CartTotal from '../CartTotal';

it('displays the total count and amount of cart', () => {
  const cartCountMock = {cartTotal: 200, cartItemCount: 10};
  // Using static rendering is enough.
  const wrapper = render(<CartTotal cartCount={cartCountMock} />);
  // Check for cart total amount.
  expect(wrapper.text()).toContain(cartCountMock.cartTotal);
  // Check for cart total count.
  expect(wrapper.text()).toContain(cartCountMock.cartItemCount);
});
