import React from "react" // eslint-disable-line no-unused-vars
import {Provider} from "react-redux"// eslint-disable-line no-unused-vars
import configureStore from "./app/service/ReduxStore"
import Route from "./app/viewmodel/Route"// eslint-disable-line no-unused-vars
import {SafeAreaView} from "react-native";// eslint-disable-line no-unused-vars

const store = configureStore()

const App = () => {
  return (
    <SafeAreaView>
      <Provider store = {store}>
        <Route/>
      </Provider>
    </SafeAreaView>
  )
}

export default App
