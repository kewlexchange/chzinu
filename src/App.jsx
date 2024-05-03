import Navbar from './components/Navbar.jsx';
import { StyledAppContainer } from './components/styledComponents/Containers.jsx'
import AppRoutes from './routes/AppRoutes.jsx';

export default function App() {
    return (
        <StyledAppContainer>
            <Navbar/>
            <AppRoutes/>
        </StyledAppContainer>            
    );
}
