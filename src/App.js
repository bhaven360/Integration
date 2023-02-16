import React, { useEffect } from "react";
import "./App.css";
import { getInfo } from "./Utils/Network/Requests";

function App() {
	useEffect(() => {
		getInfo()
			.then((res) => {
				console.log(res?.data);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, []);

	return <div className="app">
  </div>;
}

export default App;
