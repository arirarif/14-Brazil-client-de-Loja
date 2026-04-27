import { useNavigate } from 'react-router-dom'
import { fmtPrice, pixPrice } from '../data/products'

export default function ProductCard({ product }) {
  const nav = useNavigate()
  const { name, cat, price, oldPrice, badge, pct, rating, reviews, img } = product

  return (
    <div className="pc">
      <div className="pc-img">
        {badge && (
          <div className="badge-wrap">
            <span className={`tag tag-${badge}`}>
              {badge === 'sale' ? `-${pct}%` : 'Novo'}
            </span>
          </div>
        )}
        <img src={img} alt={name} loading="lazy" />
        <div className="pc-acts">
          <button className="pa"><i className="fas fa-heart" /></button>
          <button className="pa"><i className="fas fa-eye" /></button>
          <button className="pa"><i className="fas fa-shuffle" /></button>
        </div>
        <button className="pc-add-btn" onClick={() => nav('/produto')}>
          <i className="fas fa-shopping-cart" /> Adicionar ao Carrinho
        </button>
      </div>
      <div className="pc-info">
        <p className="pc-cat">{cat}</p>
        <h3 className="pc-name" onClick={() => nav('/produto')}>{name}</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 7 }}>
          <span className="stars">{'★'.repeat(rating)}{'☆'.repeat(5 - rating)}</span>
          <span className="pc-rev">({reviews})</span>
        </div>
        <div className="pc-price">
          <span className="p-now">R$ {fmtPrice(price)}</span>
          {oldPrice && <span className="p-old">R$ {fmtPrice(oldPrice)}</span>}
        </div>
        <p className="p-pix"><i className="fas fa-bolt" /> R$ {pixPrice(price)} no Pix</p>
      </div>
    </div>
  )
}
