import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component"
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication";

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
				<Route path="auth" element={<Authentication />} />
			</Route>
		</Routes>
	);
};

export default App;