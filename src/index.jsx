import App from './App'
import './style.css'
import ReactDOM from 'react-dom/client'
import 'animate.css'
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)