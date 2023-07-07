import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';
import Navigation from './src/navigations';
import {store, persistor} from './src/store/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

enableScreens();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <SafeAreaView style={styles.app_view_container}>
            <StatusBar backgroundColor="#000" />
            <Navigation />
          </SafeAreaView>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  app_view_container: {
    flex: 1,
    // paddingTop: Platform.OS === 'android' ? StatusBarManager.HEIGHT : 0,
  },
});
