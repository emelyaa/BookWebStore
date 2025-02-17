import React, { useState } from 'react';
import './VerticalNavbar.css';

function VerticalNavbar({ setCurrentPage }) {
  const [activeDropdown, setActiveDropdown] = useState(null); 
  const [isMenuVisible, setIsMenuVisible] = useState(false); 

  const navItems = [
    { label: 'All Recipes', page: 'RecipeDetails', href: '/#all-recipes' },
    {
      label: 'Cakes & Pastries',
      page: 'RecipeDetails',
      href: '/#cakes-and-pastries',
      dropdown: [
        { label: 'Layer Cakes', href: '/#layer-cakes' },
        { label: 'Roll Cakes', href: '/#roll-cakes' },
        { label: 'Cupcakes', href: '/#cupcakes' },
      ],
    },
    {
      label: 'Cookies & Bars',
      page: 'RecipeDetails',
      href: '/#cookies-and-bars',
      dropdown: [
        { label: 'Chewy', href: '/#chewy' },
        { label: 'Crispy', href: '/#crispy' },
        { label: 'Soft', href: '/#soft' },
      ],
    },
    {
      label: 'Pies & Tarts',
      page: 'RecipeDetails',
      href: '/#pies-and-tarts',
      dropdown: [
        { label: 'Mini Tarts', href: '/#mini-tarts' },
        { label: 'Galettes', href: '/#galettes' },
        { label: 'Traditional Pies', href: '/#traditional-pies' },
      ],
    },
    {
      label: 'Savory Desserts & Sweet Loaves',
      page: 'RecipeDetails',
      href: '/#savory-desserts-and-loaves',
      dropdown: [
        { label: 'Muffins', href: '/#muffins' },
        { label: 'Salted Desserts', href: '/#salted-desserts' },
        { label: 'Coffee Cake', href: '/#coffee-cake' },
      ],
    },
    { label: 'Recipe Books', page: 'RecipeBook', href: '/#recipe-books' },
  ];

  const handleLinkClick = (e, page, targetHref, hasDropdown) => {
    e.preventDefault();


    if (hasDropdown && window.innerWidth <= 600) {
      toggleDropdown(page);
      return;
    }

    setCurrentPage(page);
    if (targetHref) {
      const targetId = targetHref.substring(2);
      setTimeout(() => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) targetElement.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }

    if (closeMenu) {
      setIsMenuVisible(false); // Close the menu only if user specified
  }
  };

  const toggleDropdown = (label) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <nav className="vertical-navbar">
      {/* Hamburger Button */}
      <button
        className="hamburger-button"
        onClick={() => setIsMenuVisible((prev) => !prev)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Navbar Items */}
      <ul className={`vertical-navbar-list ${isMenuVisible ? 'visible' : ''}`}>
        {navItems.map(({ label, page, href, dropdown }) => (
          <li key={label} className="vertical-navbar-item">
            <a
              href={href}
              className="vertical-navbar-link"
              onClick={(e) => handleLinkClick(e, page, href)}
            >
              {label}
            </a>
            {dropdown && (
              <ul className="vertical-dropdown-menu">
                {dropdown.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, page, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default VerticalNavbar;
