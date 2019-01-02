import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

import Product from '../Product';
import Root from '../../Root';

    const testProduct = {
        "isPublished": "true",
        "productName": "Sony Xperia XA2",
        "productImage": "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/sony-xperia-xa2/sony_xperia_xa2_front_v1.png",
        "price": "19"
    };

    const wrapper = mount (
        <Root>
            <Product product={testProduct} />
        </Root>
    );


describe('Correct product definition', () => {
    it('has a description', () => {
        expect(wrapper.find('.product-name').length).toEqual(1);
    });

    it('has an image', () => {
        expect(wrapper.find('img').length).toEqual(1);
    });

    it('has a price', () => {
        expect(wrapper.find('.product-price').length).toEqual(1);
    });

    it('has a selection button', () => {
        expect(wrapper.find('.button').length).toEqual(1);
    });
});
