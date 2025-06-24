import { Navigate, Route, Routes } from "react-router-dom";
import LearnPage from "./pages/LearnPage";
import NotFound from "./pages/NotFound";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigate to="/learn/ch1/pg1" replace />} />
			<Route path="/learn/:chapter/:page" element={<LearnPage />} />
			<Route path="/*" element={<NotFound />} />
		</Routes>
	);
};

export default App;
