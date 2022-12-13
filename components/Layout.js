import React from 'react'
import Link from 'next/link'
import 'semantic-ui-css/semantic.min.css'
import { Icon, Container } from 'semantic-ui-react'

const Layout = ({ children }) => {
  return (
    <>
      <nav style={styles.nav}>
        <Link href="/" className="brand-logo">
          CrowdCoin
        </Link>
        <ul id="nav-mobile" style={styles.navList}>
          <li style={styles.navListItem}>
            <a href="#">Campaigns</a>
          </li>
          <li style={styles.navListItem}>
            <Link href="/campaigns/new">
              <Icon name="plus circle" />
            </Link>
          </li>
        </ul>
      </nav>
      <Container style={styles.mt}>{children}</Container>
    </>
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

  mt: {
    marginTop: '20px',
  },
}

export default Layout
