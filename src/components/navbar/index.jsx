import React, { useContext, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { navItems } from '../../constants/constants';
import './navbar.css';
import { LanguageContext } from '../../context/context';
import { useState } from 'react';

const Navbar = ({ onAbrilModal }) => {
  const { empresa, configuracionData = {}, setFiltroInicial } =
    useContext(LanguageContext);

  const navigate = useNavigate();
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const isMobile = window.innerWidth < 992;

  const toggleSubmenu = (index) => {
    if (!isMobile) return;
    setOpenSubmenu(openSubmenu === index ? null : index);
  };
  useEffect(() => {

  }, [empresa]);

  const handleClick = (label) => {
    if (label === 'CONTACTO') {
      onAbrilModal();
    }

    const navCollapse = document.getElementById('navbarNavDropdown');
    if (navCollapse && navCollapse.classList.contains('show')) {
      const bsCollapse = new window.bootstrap.Collapse(navCollapse, {
        toggle: false,
      });
      bsCollapse.hide();
    }

    localStorage.setItem('producto', '');
  };

  const url_logo = '/images/LogomovimotosBlanco.png';

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark nav__menu"
      style={{ backgroundColor: '#000' }}
    >
      <div className="container d-flex justify-content-between align-items-center">
        <NavLink className="navbar-brand" to="/">
          <img src={url_logo} alt="Logo" className="me-2 logo_menu" />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto navbar-nav__menu__principal">

            {navItems.map((item, index) =>
              item.submenu ? (
                <li className="nav-item dropdown" key={index}>
                  <a
                    className="nav-link dropdown-toggle stylish-dropdown-toggle"
                    href="#"
                    id={`dropdown-${index}`}
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    {item.label}
                  </a>

                  <ul className="dropdown-menu custom-dropdown">

                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex} className="dropdown-submenu">


                        <a
                          href="#"
                          className="dropdown-item dropdown-toggle custom-dropdown-item"
                          onClick={(e) => {
                            e.preventDefault();
                            toggleSubmenu(subIndex);
                          }}
                        >
                          {subItem.label}
                        </a>

                        <ul
                          className={`dropdown-menu ${openSubmenu === subIndex ? "show" : ""
                            }`}
                        >
                          {subItem.submenu.map((marca, i) => (
                            <li key={i}>
                              <NavLink
                                className="dropdown-item custom-dropdown-item"
                                to="/"
                                onClick={(e) => {
                                  e.preventDefault();

                                  localStorage.setItem('producto', '');
                                  handleClick(marca);

                                  const filtro = marca.toUpperCase();
                                  setFiltroInicial(filtro);

                                  navigate('/');

                                  setTimeout(() => {
                                    const catalogo =
                                      document.getElementById('catalogo-motos');
                                    if (catalogo) {
                                      const yOffset = -90;
                                      const y =
                                        catalogo.getBoundingClientRect().top +
                                        window.pageYOffset +
                                        yOffset;

                                      window.scrollTo({
                                        top: y,
                                        behavior: 'smooth',
                                      });
                                    }
                                  }, 400);
                                }}
                              >
                                {marca}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}

                  </ul>
                </li>
              ) : (
                <li className="nav-item" key={index}>
                  <NavLink
                    to={item.ruta ? `/${item.ruta}` : '#'}
                    onClick={() => handleClick(item.label)}
                    className={({ isActive }) =>
                      `nav-link stylish-nav-link ${isActive ? 'active-menu' : ''}`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
