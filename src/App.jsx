import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CV from './pages/CV';
import Consultancies from './pages/Consultancies';
import Courses from './pages/Courses';

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="consultancies" element={<Consultancies />} />
                    <Route path="cv" element={<CV />} />
                    <Route path="courses" element={<Courses />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
