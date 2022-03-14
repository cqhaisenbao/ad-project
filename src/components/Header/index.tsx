import React from 'react';
import styles from './style.module.scss';
import { MENU_CONFIG } from '../../common/constants/menu';

interface IHeaderProps {
  title: string;
}

const Header:React.FC<IHeaderProps> = () => {
    return (
        <div className={styles.headerWrapper}>
            <div className={styles.logo} />
            <div className={styles.menu}>
                {MENU_CONFIG.map((item) => {
                    return (
                        <div key={item.name}>
                            <a href="/">{item.name}</a>
                        </div>
                    );
                })}
            </div>
            <div className="user-info">
                userinfo
            </div>
        </div>
    );
};

export default Header;
