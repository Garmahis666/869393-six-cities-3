import React from 'react';
import renderer from 'react-test-renderer';
import {ReviewForm} from './review-form';

it(`ReviewAdd correctly renders after relaunch`, () => {
  const tree = renderer
    .create(
        <ReviewForm
          hotelId={1}
          onAddComment={jest.fn()}
        />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
