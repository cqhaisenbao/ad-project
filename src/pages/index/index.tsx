import { Header } from '@components/index';
import styles from './style.module.scss';

const IndexPage = () => {
    return (
        <div className={styles.wrapper}>
            <h1>Hello indexPage</h1>
            <Header title="indexPage" />
        </div>
    );
};

export default IndexPage;
