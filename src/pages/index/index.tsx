import { useLocation } from 'react-router';
import { useEffect } from 'react';
import axios from 'axios';
import utils from '@utils/index';
import styles from './style.module.scss';

const IndexPage = () => {
    useEffect(() => {
        const x = utils.getUrlParam('name');
        console.log(x);
        axios.get('/api/blog/list').then((res) => {
            console.log(res.data);
        });
    }, []);
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
