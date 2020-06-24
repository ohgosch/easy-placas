import React from 'react';
import { shallow } from 'enzyme';

import { Loader } from '.';

describe('[Component] Loader', () => {
  it('Should renders without crashing', () => {
    shallow(<Loader />);
  });
});
