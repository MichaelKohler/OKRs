import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import Footer from '../src/Footer';

configure({ adapter: new Adapter() });

describe('Footer', () => {
  it('should render copyright', () => {
    expect(shallow(<Footer />).contains('© 2018 Michael Kohler')).toBe(true);
  });

  it('should have footer HTML tag', () => {
    expect(shallow(<Footer />).is('footer')).toBe(true);
  });
});
