import React, { useEffect, useState } from 'react';
import { FaBook, FaEnvelope, FaFacebook, FaFlag, FaLinkedin, FaTwitter, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Login from '../pages/Login';
import Dropdown from 'react-bootstrap/Dropdown';

const Header = () => {
  const [user, setUser] = useState({});
  const [loginUser, setLoginUser] = useState(JSON.parse(localStorage.getItem('user')))



  const myPromise = new Promise((resolve, reject) => {
    if(JSON.parse(localStorage.getItem('user')) !== null){
      resolve(JSON.parse(localStorage.getItem('user')));
    }
  });

  useEffect(()=>{
    myPromise.then(res=>{
      setLoginUser(res)
    })
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser({});
  };

  return (
    <div className="top-bar">
      <div className="top-container">
        <div className="top-left">
          <ul>
            <li>
              <FaEnvelope className="topbar-item1 m-2" /> kevinozsimsek@gmail.com
            </li>
            <li>
              <span className="kampanya ms-2">200₺ üzeri alışverişte ücretsiz kargo</span>
            </li>
          </ul>
        </div>

        <div className="top-center">
          <ul>
            <li>
              <Link to="/">
                <FaTwitter className="topbar-item2" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaFacebook className="topbar-item2" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaLinkedin className="topbar-item3" />
              </Link>
            </li>
          </ul>
        </div>

        <div className="top-right">
          <ul>
            <li>
              <Link to="/language">
                <button className="btn btn-primary">
                  <FaFlag className="m-1 " />
                  Dil Değiştir
                </button>
              </Link>
            </li>

            <li>
              {loginUser ? (
                <Dropdown>
                  <Dropdown.Toggle variant="dark" id="dropdown-basic">
                  <FaUser className="m-1 mb-1" /> Merhaba {loginUser.username}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/" onClick={handleLogout}>
                      Çıkış Yap
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <Link to="Login">
                  <button className="btn btn-dark">
                    <FaUser className='m-1' />
                    Giriş Yap
                  </button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
