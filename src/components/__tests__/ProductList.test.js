import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Root from '../../Root';
import Product from '../Product';
import ProductList from '../ProductList';

configure({adapter: new Adapter()});

const wrapper = mount(
    <Root>
        <ProductList />
    </Root>
);

describe('Product List', () => {
   it('has five published products defined by the mock json', () => {
       expect(wrapper.find(Product).length).toEqual(5);
   })
});