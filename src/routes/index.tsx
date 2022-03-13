import {
    HashRouter as Router, Route, Routes, Navigate,
} from 'react-router-dom';
import IndexPage from 'pages/index';
import Login from 'pages/login';

const allRouters = [
    {
        path: '/',
        exact: true,
        element: <Navigate to="/index" />,

    },
    {
        path: '/index',
        element: <IndexPage />,

    },
    {
        path: '/login',
        exact: true,
        element: <Login />,
    },
];

const RouteComponent = () => (
    <Router>
        <Routes>
            {allRouters.map((item) => (
                <Route key={item.path} path={item.path} element={item.element} />
            ))}
        </Routes>
    </Router>
);

export default RouteComponent;
