import { BrowserRouter, Route, Routes} from 'react-router-dom';

import UserProfile from '../Pages/UserProfile';
import PrivateListEvents from '../Pages/PrivateListEvents';
import PublicListEvents from '../Pages/PublicListEvents';
import Login from '../Pages/Login'
import Register from '../Pages/Register';
import MainMenu from '../Pages/MainMenu';
const Router = () => (
        <Routes>   
            <Route index element={<MainMenu/>} />

            <Route path="/user-profile" element={<UserProfile/>} />

            <Route path="/private-events" element={<PrivateListEvents/>} />

            <Route path="/public-events" element={<PublicListEvents/>} />
             { /* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}    
            <Route path="*" element={<div>404</div> } />
        </Routes>
);

export default Router;