import React from "react";
import ReactDOM from "react-dom/client";
import { persistStore } from "redux-persist";
import { configureStore } from "./redux/store";
import { Provider } from "react-redux";

import App from "./App";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";

const store  = configureStore();
const persistor = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById("root"));
// serverside rendering use root.hydrate
root.render(
	<React.StrictMode>
		<Provider  store={store}>
				<PersistGate
				loading={<div>	Loading...</div>}
				persistor={persistor}>
						<App />
				</PersistGate>

		</Provider>
	</React.StrictMode>
);
