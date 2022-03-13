import { useLocation } from 'react-router';
import styles from './style.module.scss';

const IndexPage = () => {
    // 获取路由信息
    const router = useLocation();
    console.log(router);
    return (
        <div className={styles.wrapper}>
            <h1>Hello indexPage</h1>
        </div>
    );
};

export default IndexPage;
