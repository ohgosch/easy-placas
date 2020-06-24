import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('[Component] App', () => {
  let wrapper;

  it('Should renders without crashing', () => {
    wrapper = shallow(<App />);
  });
});
