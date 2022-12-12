import React from 'react'
import { Icon } from 'semantic-ui-react'

const Navigation = () => {
  return (
    <nav style={styles.nav}>
      <a href="#" className="brand-logo">
        CrowdCoin
      </a>
      <ul id="nav-mobile" style={styles.navList}>
        <li style={styles.navListItem}>
          <a href="#">Campaigns</a>
        </li>
        <li style={styles.navListItem}>
          <a href="#">
            <Icon name="plus circle" />
          </a>
        </li>
      </ul>
    </nav>
  )
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    fontSize: '1.5rem',
    borderBottom: '1px solid #eee',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },

  navList: {
    display: 'flex',
    listStyle: 'none',
    gap: '20px',
  },
}

export default Navigation
