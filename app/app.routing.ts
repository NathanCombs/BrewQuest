import { LoginComponent } from "./pages/login/login.component";
import { MapComponent } from "./pages/map/map.component";

export const routes = [
    {path: "", component: LoginComponent},
    {path: "map", component: MapComponent}
];

export const navigatableComponents = [
    LoginComponent,
    MapComponent
];