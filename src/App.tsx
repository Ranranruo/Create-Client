import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "./stores/Store";
import router from "./routers/Router";
import GlobalStyles from "./styles/GlobalStyles";

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      <GlobalStyles />
    </Provider>
  )
}

export default App;