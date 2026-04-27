import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

const cats = ['Todos os Produtos', 'Feminino', 'Masculino', 'Calçados', 'Acessórios']
const catCount = { 'Todos os Produtos': 651, 'Feminino': 248, 'Masculino': 186, 'Calçados': 124, 'Acessórios': 93 }
const sizes = ['PP', 'P', 'M', 'G', 'GG', 'XGG', '34', '36', '38', '40', '42', '44']
const swatches = ['#1a1a2e', '#e63946', '#fff', '#333', '#c8a882', '#4a7c59', '#f4c542', '#9b59b6']

export default function Shop() {
  const nav = useNavigate()
  const [activeCat, setActiveCat] = useState('Todos os Produtos')
  const [activeSz, setActiveSz] = useState('M')
  const [activeSw, setActiveSw] = useState(0)
  const [priceVal, setPriceVal] = useState(600)
  const [activePg, setActivePg] = useState(1)
  const [activeView, setActiveView] = useState(0)

  return (
    <>
      <div className="breadcrumb">
        <div className="bc-inner">
          <a onClick={() => nav('/')}>Início</a>
          <i className="fas fa-chevron-right" style={{ fontSize: 10 }} />
          <span>Loja</span>
        </div>
      </div>

      <div className="shop-hero">
        <h1>Nossa Loja</h1>
        <p>Explore nossa coleção completa com mais de 650 produtos</p>
      </div>

      <div className="shop-layout">
        {/* SIDEBAR */}
        <aside className="sidebar">
          {/* Categories */}
          <div className="sb-card">
            <div className="sb-head">Categorias <i className="fas fa-chevron-up" /></div>
            <div className="sb-body">
              <ul className="filter-cats">
                {cats.map(c => (
                  <li key={c}>
                    <a className={activeCat === c ? 'active' : ''} onClick={() => setActiveCat(c)}>
                      {c} <span className="fc-count">{catCount[c]}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Price */}
          <div className="sb-card">
            <div className="sb-head">Faixa de Preço <i className="fas fa-chevron-up" /></div>
            <div className="sb-body">
              <input type="range" className="price-slider" min={0} max={1000} value={priceVal} onChange={e => setPriceVal(e.target.value)} />
              <div className="price-labels"><span>R$ 0</span><span>R$ {priceVal}</span></div>
              <button style={{ width: '100%', marginTop: 12, padding: '10px', background: 'var(--accent)', color: '#fff', border: 'none', borderRadius: 5, fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>Filtrar</button>
            </div>
          </div>

          {/* Size */}
          <div className="sb-card">
            <div className="sb-head">Tamanho <i className="fas fa-chevron-up" /></div>
            <div className="sb-body">
              <div className="size-grid">
                {sizes.map(s => (
                  <div key={s} className={`sz ${activeSz === s ? 'active' : ''}`} onClick={() => setActiveSz(s)}>{s}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Color */}
          <div className="sb-card">
            <div className="sb-head">Cor <i className="fas fa-chevron-up" /></div>
            <div className="sb-body">
              <div className="color-swatches">
                {swatches.map((c, i) => (
                  <div key={i} className={`swatch ${activeSw === i ? 'active' : ''}`}
                    style={{ background: c, border: c === '#fff' ? '2px solid #ddd' : undefined }}
                    onClick={() => setActiveSw(i)} />
                ))}
              </div>
            </div>
          </div>

          {/* Brand */}
          <div className="sb-card">
            <div className="sb-head">Marca <i className="fas fa-chevron-up" /></div>
            <div className="sb-body">
              <ul className="check-list">
                {[['VivaStyle', 124], ['BrazilFit', 98], ['UrbanBR', 76], ['ModaTrend', 64], ['ClassiCo', 48]].map(([b, n]) => (
                  <li key={b}><input type="checkbox" defaultChecked={b === 'VivaStyle'} /> {b} ({n})</li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        {/* MAIN */}
        <main>
          <div className="shop-toolbar">
            <p className="results-count">Mostrando <b>12</b> de <b>651</b> produtos</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <select className="sort-select">
                <option>Mais Relevantes</option>
                <option>Mais Vendidos</option>
                <option>Menor Preço</option>
                <option>Maior Preço</option>
                <option>Mais Recentes</option>
              </select>
              <div className="view-btns">
                <button className={`vb ${activeView === 0 ? 'active' : ''}`} onClick={() => setActiveView(0)}><i className="fas fa-th-large" /></button>
                <button className={`vb ${activeView === 1 ? 'active' : ''}`} onClick={() => setActiveView(1)}><i className="fas fa-list" /></button>
              </div>
            </div>
          </div>

          <div className="shop-prod-grid">
            {products.map(p => <ProductCard key={p.id} product={p} />)}
          </div>

          <div className="pagination">
            <div className="pg-arrow"><i className="fas fa-chevron-left" /></div>
            {[1, 2, 3].map(n => (
              <div key={n} className={`pg ${activePg === n ? 'active' : ''}`} onClick={() => setActivePg(n)}>{n}</div>
            ))}
            <span style={{ color: 'var(--muted)', fontSize: 14 }}>...</span>
            <div className="pg" onClick={() => setActivePg(18)}>18</div>
            <div className="pg-arrow"><i className="fas fa-chevron-right" /></div>
          </div>
        </main>
      </div>
    </>
  )
}
