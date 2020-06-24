import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Route, Link } from 'react-router-dom';

import { ROUTES } from 'logic/constants';

import { Header } from '.';
import { Logo, LogoutButton } from './styles';

describe('[Component] Header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter initialEntries={[ROUTES.main]}>
        <Route path={ROUTES.main}>
          <Header />
        </Route>
      </MemoryRouter>
    );
  });

  it('Should have a H1 element', () => {
    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('Should have a link', () => {
    expect(wrapper.find(Link)).toHaveLength(1);
  });

  it('Should have the logo', () => {
    expect(wrapper.find(Logo)).toHaveLength(1);
  });

  it('Should have the logo', () => {
    expect(wrapper.find(LogoutButton)).toHaveLength(1);
  });
});
