import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Cart from '../Cart';
import Root from '../../Root';

configure({adapter: new Adapter()});

describe('New cart test', () => {
    const wrapper = mount(
        <Root>
            <Cart />
        </Root>
    );

    it('is empty initially', () => {
        expect(wrapper.find('.cart-empty').length).toEqual(1);
    });

    it('has zero total price', () => {
        expect(wrapper.find('.cart-footer').text()).toEqual('Total Price: $0');
    })
});