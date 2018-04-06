import React from 'react';
import { shallow, mount } from 'enzyme';

import Redux, { mapStateToProps, mapDispatchToProps } from './redux';

describe('Redux component', () => {
  it('can render correctly', () => {
    shallow(<Redux items={[]} />);
  });

  describe('state to props', () => {
    it('can correctly filter search result items', () => {
      const state = {
        filters: [0],
        items: [
          { Name: 'zero', Facilities: [0] },
          { Name: 'one', Facilities: [1] }
        ]
      };
      const actual = mapStateToProps(state);

      expect(actual.items).toEqual([{ Name: 'zero', Facilities: [0] }]);
    });
  });

  describe('dispatch to props', () => {
    it('can correctly assign dispatch', () => {
      const actual = mapDispatchToProps(1);

      expect(actual.dispatch).toEqual(1);
    });
  });
});