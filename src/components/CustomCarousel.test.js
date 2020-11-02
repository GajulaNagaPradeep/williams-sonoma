import React from 'react';
import { shallow } from 'enzyme';
import CustomCarousel from './CustomCarousel';

it('renders CustomCarousel correctly', () => {
  const component = shallow(<CustomCarousel />);
  expect(component).toMatchSnapshot();
});
