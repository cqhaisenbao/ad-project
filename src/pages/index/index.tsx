import { useLocation } from 'react-router';

const IndexPage = () => {
    // 获取路由信息
    const router = useLocation();
    console.log(router);
    return (
        <div>
            <h1>Hello indexPage</h1>
        </div>
    );
};

export default IndexPage;
