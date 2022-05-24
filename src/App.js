import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component"
import Navigation from "./routes/navigation/navigation.component";

const OutLet = () => {
	return (
		<h1>
			I am outlet page
		</h1>
	);
}

const App = () => {
	return ( 
		<Routes>
			<Route path="/" element={<Navigation/>}>
				<Route index element={<Home />}/>
				<Route path="shop" element={<OutLet />} />
			</Route>
		</Routes>
	);
};

export default App;