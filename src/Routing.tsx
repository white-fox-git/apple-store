import {Route, Routes} from 'react-router-dom';
import Main from './pages/main';

const Routing = () => {
    return(
        <Routes>
            <Route path="/" element={<Main />}/>
        </Routes>
    )
}

export default Routing;