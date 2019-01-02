import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CartItem from '../CartItem';
import Root from '../../Root';

configure({adapter: new Adapter()});

const testProduct = {
    "isPublished": "true",
    "productName": "Sony Xperia XA2",
    "productImage": "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/sony-xperia-xa2/sony_xperia_xa2_front_v1.png",
    "price": "19"
};

const wrapper = mount(
    <Root>
        <CartItem key={testProduct.productName} product={testProduct} buttonAction={null} />
    </Root>
);

describe('Cart Item test', () => {
    it('has a description', () => {
        expect(wrapper.find('.product-name').length).toEqual(1);
    });

    it('has an remove button', () => {
        expect(wrapper.find('.button').length).toEqual(1);
    });
});