import React from 'react';
import { MenuItemInfoType } from '@components/Header/types';

interface MenuItemProps {
    isActive?: boolean;
    onClick?: () => void;
    menuItemInfo: MenuItemInfoType;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
    const { isActive, onClick, menuItemInfo } = props;
    return (
        <div>
            <div className="menuItemTitle">
                {menuItemInfo.name}
                {menuItemInfo.menuChildren.length > 0 && <span className="menuItemTitleArrow">&#9662;</span>}
            </div>
            <div className="bottomLine">
                {
                    isActive && (<div className="bottomLineActive" />)
                }
            </div>
            <div className="menuChildrenWrapper">
                {
                    menuItemInfo.menuChildren.length > 0
                    && menuItemInfo.menuChildren.map((menuChild, index) => {
                        return (
                            <div className="menuChild" key={menuChild.label}>
                                <div className="menuChildTitle">{menuChild.label}</div>
                                <div className="menuChildDescription">{menuChild.label}</div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

MenuItem.defaultProps = {
    isActive: false,
    onClick: () => {
    },
};

export default MenuItem;
