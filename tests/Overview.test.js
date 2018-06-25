import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

import Overview from '../src/Overview';

configure({ adapter: new Adapter() });

describe('Overview', () => {
  it('should render all OKR tables', () => {
    expect(shallow(<Overview />).find('OKRTable').length).toBe(11);
  });

  it('should be wrapped in container class element', () => {
    expect(shallow(<Overview />).is('.container')).toBe(true);
  });

  it('should be wrapped in a section element', () => {
    expect(shallow(<Overview />).find('section').length).toBe(1);
  });

  it('should have Q1 OKRs', () => {
    expect(shallow(<Overview />).contains('2018 - Q1')).toBe(true);
  });

  it('should have yearly OKRs', () => {
    expect(shallow(<Overview />).contains('General Yearly OKRs - 2018')).toBe(true);
  });
});
