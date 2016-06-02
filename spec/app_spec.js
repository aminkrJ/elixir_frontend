import React from 'react';
import { expect } from 'chai';
import App from '../app/js/app';
import TestUtils from 'react/lib/ReactTestUtils';

describe('App', () => {
  it('renders without problems', () => {
    TestUtils.renderIntoDocument(<App />);
  });
});
