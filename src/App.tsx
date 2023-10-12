import { AppLayout } from "./layout/AppLayout";
import { NavMenu } from "./components/NavMenu";
import { Hiring } from "./pages/Hiring";
import { FormContextProvider } from "./context/formContext";
import { Routes, Route } from "react-router-dom";

export const App = () => {
	return (
		<FormContextProvider>
			<AppLayout>
				<NavMenu />
				<Hiring />
				{/* <Routes>
					<Route path="/" />
					<Route path="/kandideeri" element={<Hiring />} />
				</Routes> */}
			</AppLayout>
		</FormContextProvider>
	);
};
