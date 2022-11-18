/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/App';
import {NavigationContainer} from '@react-navigation/native';
// Note: test renderer must be required after react-native.
import {act} from 'react-test-renderer';
import {render} from '@testing-library/react-native';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

it('renders correctly', async () => {
  render(<App />);
});

describe('<NavigationContainer />', () => {
  it('should match snapshot', async () => {
    const result = render(<NavigationContainer />);
    await act(async () => {
      expect(result).toMatchSnapshot();
    });
  });
});
