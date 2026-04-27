import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { products, fmtPrice, pixPrice } from '../data/products'

const galleryImgs = [
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=85',
  'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=85',
  'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&q=85',
  'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=85',
]

const colors = [
  { name: 'Azul Floral', hex: '#4a7cb6' },
  { name: 'Rosa Coral', hex: '#e63946' },
  { name: 'Verde Selva', hex: '#2d6a4f' },
  { name: 'Amarelo Sol', hex: '#f4c542' },
  { name: 'Branco Puro', hex: '#fff' },
  { name: 'Azul Marinho', hex: '#1a1a2e' },
]

const sizes = ['PP', 'P', 'M', 'G', 'GG', 'XGG']
const TABS = ['Descrição', 'Informações', 'Avaliações (87)', 'Envio & Trocas']

const reviews = [
  { name: 'Ana Beatriz S.', city: 'São Paulo, SP', date: '15 abr 2025', rating: 5, text: 'Amei demais o vestido! O tecido é super leve e macio, perfeito para o calor de São Paulo. A estampa floral é linda, igual às fotos. Entrega em 3 dias!', avatar: 'https://i.pravatar.cc/44?img=47' },
  { name: 'Carla Mendes', city: 'Rio de Janeiro, RJ', date: '8 abr 2025', rating: 5, text: 'Excelente qualidade pelo preço! Paguei no Pix com desconto, chegou em 4 dias. O vestido é ainda mais bonito pessoalmente.', avatar: 'https://i.pravatar.cc/44?img=32' },
  { name: 'Mariana Costa', city: 'Curitiba, PR', date: '2 abr 2025', rating: 4, text: 'Muito bonito e confortável. O azul é um tom mais claro do que aparece na tela, mas ficou muito lindo assim mesmo.', avatar: 'https://i.pravatar.cc/44?img=25' },
]

export default function Product() {
  const nav = useNavigate()
  const [mainImg, setMainImg] = useState(0)
  const [activeColor, setActiveColor] = useState(0)
  const [activeSize, setActiveSize] = useState('M')
  const [qty, setQty] = useState(1)
  const [activeTab, setActiveTab] = useState(0)
  const [cep, setCep] = useState('')
  const [freteShown, setFreteShown] = useState(false)
  const [added, setAdded] = useState(false)

  const handleAddCart = () => {
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const handleCep = (v) => {
    let val = v.replace(/\D/g, '')
    if (val.length > 5) val = val.slice(0, 5) + '-' + val.slice(5, 8)
    setCep(val)
  }

  return (
    <>
      <div className="breadcrumb">
        <div className="bc-inner">
          <a onClick={() => nav('/')}>Início</a>
          <i className="fas fa-chevron-right" style={{ fontSize: 10 }} />
          <a onClick={() => nav('/loja')}>Loja</a>
          <i className="fas fa-chevron-right" style={{ fontSize: 10 }} />
          <span>Vestido Floral Verão</span>
        </div>
      </div>

      <div className="product-section">
        <div className="product-layout">

          {/* GALLERY */}
          <div>
            <div className="gallery-main">
              <span className="gm-badge">-30% OFF</span>
              <img src={galleryImgs[mainImg]} alt="Produto" />
            </div>
            <div className="gallery-thumbs">
              {galleryImgs.map((img, i) => (
                <div key={i} className={`thumb ${mainImg === i ? 'active' : ''}`} onClick={() => setMainImg(i)}>
                  <img src={img.replace('w=800', 'w=200')} alt="" />
                </div>
              ))}
            </div>
          </div>

          {/* INFO */}
          <div>
            <p className="pinfo-brand">VivaStyle Collection</p>
            <h1 className="pinfo-title">Vestido Floral Verão Premium</h1>

            <div className="pinfo-rating">
              <span className="stars-lg">★★★★★</span>
              <span className="rating-count"><a>87 avaliações</a> &nbsp;|&nbsp; 312 vendidos</span>
              <span className="in-stock">Em Estoque</span>
            </div>

            <div className="pricing">
              <div className="price-main">
                <span className="price-now">R$ 129,90</span>
                <span className="price-old">R$ 185,90</span>
                <span className="price-off">ECONOMIZE R$ 56,00</span>
              </div>
              <div className="pay-options">
                <div className="pay-row">
                  <span className="pay-badge"><i className="fas fa-bolt" /> PIX</span>
                  <strong>R$ 123,40</strong>
                  <span style={{ color: 'var(--green)', fontSize: 12, fontWeight: 600 }}>5% de desconto à vista</span>
                </div>
                <div className="pay-row">
                  <span className="pay-badge bol">BOLETO</span>
                  <strong>R$ 123,40</strong>
                  <span style={{ color: 'var(--muted)', fontSize: 12 }}>5% de desconto</span>
                </div>
                <div className="pay-row">
                  <span className="pay-badge card"><i className="fas fa-credit-card" /> CARTÃO</span>
                  <strong>12x de R$ 10,83</strong>
                  <span style={{ color: 'var(--muted)', fontSize: 12 }}>sem juros</span>
                </div>
              </div>
            </div>

            {/* Color */}
            <div className="variant-section">
              <p className="variant-label">Cor: <span>{colors[activeColor].name}</span></p>
              <div className="color-swatches">
                {colors.map((c, i) => (
                  <div key={i} className={`swatch ${activeColor === i ? 'active' : ''}`}
                    style={{ background: c.hex, border: c.hex === '#fff' ? '2px solid #ddd' : undefined }}
                    onClick={() => setActiveColor(i)} title={c.name} />
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="variant-section">
              <p className="variant-label">Tamanho: <span>{activeSize}</span></p>
              <div className="size-btns">
                {sizes.map(s => (
                  <div key={s} className={`size-btn ${s === 'PP' ? 'out' : ''} ${activeSize === s ? 'active' : ''}`}
                    onClick={() => s !== 'PP' && setActiveSize(s)}>{s}</div>
                ))}
              </div>
              <button className="size-guide-btn"><i className="fas fa-ruler-horizontal" /> Guia de Tamanhos</button>
            </div>

            {/* Qty + Cart */}
            <div className="add-section">
              <div className="qty-ctrl">
                <button className="qty-btn" onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
                <div className="qty-val">{qty}</div>
                <button className="qty-btn" onClick={() => setQty(q => Math.min(10, q + 1))}>+</button>
              </div>
              <button className={`btn-cart-full ${added ? 'added' : ''}`} onClick={handleAddCart}>
                <i className={`fas fa-${added ? 'check' : 'shopping-cart'}`} />
                {added ? 'Adicionado!' : 'Adicionar ao Carrinho'}
              </button>
            </div>

            <button className="btn-buy-full">
              <i className="fas fa-bolt" /> Comprar Agora
            </button>

            <div className="secondary-actions">
              <button className="sa-btn"><i className="fas fa-heart" /> Favoritar</button>
              <button className="sa-btn"><i className="fas fa-shuffle" /> Comparar</button>
              <button className="sa-btn"><i className="fas fa-share-nodes" /> Compartilhar</button>
            </div>

            {/* Delivery */}
            <div className="delivery-box">
              <h4><i className="fas fa-truck" style={{ color: 'var(--accent)' }} /> Calcular Frete e Entrega</h4>
              <div className="delivery-form">
                <input type="text" placeholder="Digite seu CEP" maxLength={9} value={cep} onChange={e => handleCep(e.target.value)} />
                <button onClick={() => cep.replace(/\D/g, '').length >= 8 && setFreteShown(true)}>Calcular</button>
              </div>
              {freteShown && (
                <div className="delivery-result">
                  <div className="dr-row">
                    <span className="dr-carrier"><i className="fas fa-truck" /> Correios PAC</span>
                    <span className="dr-days">5–8 dias úteis</span>
                    <span className="dr-price">R$ 14,90</span>
                  </div>
                  <div className="dr-row">
                    <span className="dr-carrier"><i className="fas fa-bolt" /> Correios SEDEX</span>
                    <span className="dr-days">2–3 dias úteis</span>
                    <span className="dr-price">R$ 28,50</span>
                  </div>
                  <div className="dr-row">
                    <span className="dr-carrier"><i className="fas fa-check-circle" style={{ color: 'var(--green)' }} /> Frete Grátis</span>
                    <span className="dr-days">7–12 dias úteis</span>
                    <span className="dr-price" style={{ color: 'var(--green)' }}>GRÁTIS</span>
                  </div>
                </div>
              )}
            </div>

            <div className="prod-meta">
              <span><b>SKU:</b> VFS-AZL-M-2025</span>
              <span><b>Categorias:</b> <a onClick={() => nav('/loja')} style={{ color: 'var(--accent)', cursor: 'pointer' }}>Feminino</a>, <a onClick={() => nav('/loja')} style={{ color: 'var(--accent)', cursor: 'pointer' }}>Vestidos</a></span>
              <span><b>Tags:</b> vestido, floral, verão, feminino, casual</span>
            </div>
          </div>
        </div>

        {/* TABS */}
        <div className="tabs-section">
          <div className="tabs">
            {TABS.map((t, i) => (
              <button key={i} className={`tab-btn ${activeTab === i ? 'active' : ''}`} onClick={() => setActiveTab(i)}>{t}</button>
            ))}
          </div>

          {activeTab === 0 && (
            <div className="tab-content">
              <p>O <strong>Vestido Floral Verão Premium</strong> é a peça perfeita para os dias quentes do verão brasileiro. Com seu estampado floral exclusivo e tecido leve de alta qualidade, este vestido oferece conforto e elegância para qualquer ocasião.</p>
              <p>Desenvolvido com <strong>100% viscose</strong> de primeira linha, o tecido é macio, respirável e cai perfeitamente no corpo.</p>
              <ul>
                <li>Tecido 100% viscose premium — leve e respirável</li>
                <li>Estampa floral exclusiva da coleção Verão 2025</li>
                <li>Modelagem midi (comprimento até o joelho)</li>
                <li>Decote V com detalhe franzido</li>
                <li>Alças largas ajustáveis</li>
                <li>Lavável à máquina (água fria)</li>
                <li>Certificação OEKO-TEX® — livre de substâncias nocivas</li>
              </ul>
            </div>
          )}

          {activeTab === 1 && (
            <div className="tab-content">
              <table className="specs-table">
                <tbody>
                  {[['Material','100% Viscose'],['Modelagem','Midi — comprimento até o joelho'],['Decote','Decote V franzido'],['Manga','Alças largas ajustáveis'],['Cuidados','Lavar à máquina, água fria'],['Tamanhos','P, M, G, GG, XGG'],['Origem','Produzido no Brasil'],['Certificação','OEKO-TEX® Standard 100'],['SKU','VFS-AZL-M-2025']].map(([k, v]) => (
                    <tr key={k}><td>{k}</td><td>{v}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 2 && (
            <div className="tab-content">
              <div className="review-summary">
                <div style={{ textAlign: 'center' }}>
                  <div className="rev-big">4,9</div>
                  <div className="rev-stars-big">★★★★★</div>
                  <div className="rev-count-lbl">87 avaliações</div>
                </div>
                <div className="rev-bars">
                  {[[5, 82, 71],[4, 12, 10],[3, 5, 4],[2, 2, 2],[1, 0, 0]].map(([s, pct, n]) => (
                    <div key={s} className="rb-row">
                      <span className="rb-label">{s}★</span>
                      <div className="rb-bar"><div className="rb-fill" style={{ width: `${pct}%` }} /></div>
                      <span className="rb-count">{n}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="review-list">
                {reviews.map((r, i) => (
                  <div key={i} className="rv">
                    <div className="rv-head">
                      <div className="rv-avatar"><img src={r.avatar} alt={r.name} /></div>
                      <div className="rv-meta"><strong>{r.name}</strong><span>{r.city} · {r.date}</span></div>
                      <span className="rv-stars">{'★'.repeat(r.rating)}</span>
                      <span className="rv-verified">Compra Verificada</span>
                    </div>
                    <p className="rv-text">{r.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 3 && (
            <div className="tab-content">
              <p><strong>Opções de Envio:</strong></p>
              <ul>
                <li><strong>Correios PAC:</strong> 5 a 8 dias úteis — a partir de R$ 14,90</li>
                <li><strong>Correios SEDEX:</strong> 2 a 3 dias úteis — a partir de R$ 28,50</li>
                <li><strong>Frete Grátis:</strong> para pedidos acima de R$ 299,00</li>
              </ul>
              <p style={{ marginTop: 16 }}><strong>Política de Trocas e Devoluções:</strong></p>
              <ul>
                <li>Prazo de 30 dias para solicitar troca ou devolução</li>
                <li>O produto deve estar sem uso, com etiqueta e na embalagem original</li>
                <li>Trocas de tamanho são gratuitas (até 1 troca por pedido)</li>
                <li>Reembolso integral em caso de defeito ou erro no envio</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* RELATED */}
      <div className="related-section">
        <div className="sec-head">
          <p className="sec-tag">Você Também Vai Amar</p>
          <h2 className="sec-title">Produtos Relacionados</h2>
        </div>
        <div className="related-grid">
          {products.filter(p => p.cat === 'Feminino').slice(0, 4).map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>

      <div style={{ marginBottom: 60 }} />
    </>
  )
}
