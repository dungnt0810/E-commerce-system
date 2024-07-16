import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCircleXmark, faSearch } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import { useRef, useState } from 'react';

const cx = classNames.bind(styles);

function Header() {
    const [searchQuery, setSearchQuery] = useState('');
    const inputRef = useRef();

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchClick = () => {
        // Handle the search click event here
        console.log('Search query:', searchQuery);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    {/* <img src={images.logo} alt="logo" /> */}
                    <span className={cx('title')}>Brand-name</span>
                </div>

                {/* Sub menu */}
                <div className={cx('sub-menu')}>
                    <div className={cx('item')}>Home</div>
                    <div className={cx('item')}>About</div>
                    <div className={cx('item')}>Contact</div>
                    <div className={cx('item')}>Stores</div>
                </div>
                {/* Sub menu */}

                {/* Action Area */}

                <div className={cx('action')}>
                    <div className={cx('search')}>
                        <input
                            type="text"
                            placeholder="What are you looking for ?"
                            spellCheck="false"
                            value={searchQuery}
                            ref={inputRef}
                            onChange={handleSearchChange}
                        />
                        {!!searchQuery && (
                            <button
                                className={cx('clear-btn')}
                                onClick={() => {
                                    inputRef.current.focus();
                                    setSearchQuery('');
                                }}
                            >
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                        )}
                        <button className={cx('search-btn')} onClick={handleSearchClick}>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                    <button className={cx('fav-btn')}>
                        <FontAwesomeIcon icon={faHeart} />
                    </button>
                    <button className={cx('cart-btn')}>
                        <FontAwesomeIcon icon={faCartShopping} className={cx('cart-icon')} />
                        <div className={cx('badge')}>0</div>
                    </button>

                    <button className={cx('user-btn')}>
                        <FontAwesomeIcon icon={faUser} />
                    </button>
                </div>
                {/* Action Area */}
            </div>
        </div>
    );
}

export default Header;
