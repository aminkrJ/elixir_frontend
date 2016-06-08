import React from 'react';
import { expect } from 'chai';
import RecipeFilter from '../app/js/recipe_filter';
import TestUtils from 'react/lib/ReactTestUtils';

describe('RecipeFilter', () => {
  it('renders without problems', () => {
    TestUtils.renderIntoDocument(<RecipeFilter />);
  });
});
