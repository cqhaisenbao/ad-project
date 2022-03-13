import React from 'react';

interface IHeaderProps {
  title: string;
}

const Header:React.FC<IHeaderProps> = () => {
    return (
        <header>
            <h1>Header</h1>
        </header>
    );
};

export default Header;
