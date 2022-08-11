import Home from "./../screens/Home";
import Error404 from "./../screens/Error404";
import PetsDating from "../screens/PetsDating";

export const Routes = [
	{path: "/", component: Home},
	{path: "/pets-namorando", component: PetsDating},
	{path: "/404", component: Error404},
];