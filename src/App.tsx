/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useCallback, useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {applyMiddleware, compose} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import reducer from './redux/reducers';
import StorybookUIRoot from '../storybook';
import DevMenu from 'react-native-dev-menu';
import codePush from 'react-native-code-push';
import Router from './router';
const enhancer = compose(applyMiddleware(thunkMiddleware, logger));

const store = configureStore({
  reducer,
  enhancers: [enhancer],
});

const App = () => {
  const [storybookActive, setStorybookActive] = useState(false);

  const toggleStorybook = useCallback(
    () => setStorybookActive(active => !active),
    [],
  );

  useEffect(() => {
    if (__DEV__) {
      DevMenu.addItem('Toggle Storybook', toggleStorybook);
    }
  }, [toggleStorybook]);

  if (storybookActive) {
    return <StorybookUIRoot />;
  } else {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
};

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.MANUAL,
  updateDialog: false,
};

export default codePush(codePushOptions)(App);
