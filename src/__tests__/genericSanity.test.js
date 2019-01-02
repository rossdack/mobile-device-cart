/**
 * A basic sanity suite
 */

import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Root from '../Root';
import SelfCareContainer from '../components/SelfCareContainer';
import Product from '../components/Product';
import Button from '../components/Button';
import CartItem from '../components/CartItem';

configure({adapter: new Adapter()});

let wrapper = null;

beforeEach(() => {
    wrapper = mount(
      <Root>
          <SelfCareContainer />
      </Root>
    );
});

describe('Basic app sanity test', () => {
    it('does not show a `no products message`', () => {
        expect(wrapper.find('.product-list-no-products').length).toEqual(0);
    });

    it('has a product list', () => {
        expect(wrapper.find(Product).length).toEqual(5);
    });

    it('has an empty cart', () => {
        expect(wrapper.find('.cart-empty').length).toEqual(1);
    });
});

describe('Functional test', () => {
    it('tests adding an item to the cart', () => {
        wrapper.find('.product-list-wrapper').find(Button).first().simulate('click');
        expect(wrapper.find(CartItem).length).toEqual(1);
        expect(wrapper.find('.cart-footer').text()).not.toEqual('Total Price: $0');
        expect(wrapper.find(Product).length).toEqual(4);

        // remove the item from the cart
        wrapper.find(CartItem).find(Button).first().simulate('click');
        expect(wrapper.find(CartItem).length).toEqual(0);
        expect(wrapper.find('.cart-footer').text()).toEqual('Total Price: $0');
        expect(wrapper.find(Product).length).toEqual(5);
    })
});