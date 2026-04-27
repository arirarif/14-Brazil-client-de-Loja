import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const { pathname } = useLocation()

  const links = [
    { to: '/', label: 'Início' },
    { to: '/loja', label: 'Loja' },
    { to: '/loja', label: 'Feminino' },
    { to: '/loja', label: 'Masculino' },
    { to: '/loja', label: 'Promoções' },
    { to: '#', label: 'Contato' },
  ]

  return (
    <>
      <div className="ann">
        🚚 Frete grátis acima de <b>R$ 299</b> &nbsp;·&nbsp; 12x sem juros &nbsp;·&nbsp; <b>5% OFF no Pix</b>
      </div>

      <header className="site-header">
        <div className="hdr">
          <Link to="/" className="logo">VIVA<span>.</span>MODA</Link>

          <nav className="nav-desktop">
            <ul>
              {links.map((l, i) => (
                <li key={i}>
                  <Link to={l.to} className={pathname === l.to ? 'active' : ''}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hdr-right">
            <button className="hdr-icon"><i className="fas fa-search" /></button>
            <button className="hdr-icon"><i className="fas fa-heart" /></button>
            <button className="hdr-icon" style={{ position: 'relative' }}>
              <i className="fas fa-shopping-bag" />
              <span className="hdr-badge">3</span>
            </button>
            <button className="hdr-icon"><i className="fas fa-user" /></button>
            <button className="burger" onClick={() => setDrawerOpen(true)}>
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      <div className={`drawer-overlay ${drawerOpen ? 'open' : ''}`} onClick={e => { if (e.target === e.currentTarget) setDrawerOpen(false) }}>
        <div className="drawer">
          <div className="drawer-close">
            <button onClick={() => setDrawerOpen(false)}><i className="fas fa-times" /></button>
          </div>
          <nav className="drawer-nav">
            {links.map((l, i) => (
              <Link key={i} to={l.to} onClick={() => setDrawerOpen(false)}>{l.label}</Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}
