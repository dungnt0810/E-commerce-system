import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSearch } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
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
                        <input type="text" placeholder="Search accounts and video" spellCheck="false" />
                        <button className={cx('clear-btn')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                    <button>Favourite</button>
                    <button>Cart</button>
                </div>
                {/* Action Area */}
            </div>
        </div>
    );
}

export default Header;
