import { useNavigate } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

const categories = [
  { label: 'Feminino', sub: 'Moda, elegância e estilo', count: '248 produtos', img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=85' },
  { label: 'Masculino', sub: 'Do casual ao executivo', count: '186 produtos', img: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?w=700&q=85' },
  { label: 'Calçados', sub: 'Tênis, sapatos e mais', count: '124 produtos', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&q=85' },
  { label: 'Acessórios', sub: 'Bolsas, cintos e joias', count: '93 produtos', img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=700&q=85' },
  { label: 'Promoções', sub: 'Descontos imperdíveis', count: 'Até 70% OFF', img: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=700&q=85', promo: true },
]

const testimonials = [
  { text: 'Amei a experiência de compra! O site é super fácil, achei o produto em segundos e o envio foi rápido demais. Já indiquei para várias amigas!', name: 'Ana Beatriz S.', city: 'São Paulo, SP', avatar: 'https://i.pravatar.cc/46?img=47' },
  { text: 'Qualidade incrível pelo preço! O vestido chegou em 3 dias e ficou lindo. O atendimento via WhatsApp foi excelente. Nota 10, super recomendo!', name: 'Carla Mendes', city: 'Rio de Janeiro, RJ', avatar: 'https://i.pravatar.cc/46?img=32' },
  { text: 'Paguei no Pix e ganhei desconto na hora! Consigo acompanhar todos os pedidos pelo painel. Loja muito organizada e produto de qualidade.', name: 'João Paulo R.', city: 'Belo Horizonte, MG', avatar: 'https://i.pravatar.cc/46?img=11' },
]

export default function Home() {
  const nav = useNavigate()

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-c">
          <div className="hero-tag">Nova Coleção 2025</div>
          <h1 className="hero-title">Estilo que<br />Fala por Você</h1>
          <p className="hero-sub">Descubra as últimas tendências com entrega rápida em todo o Brasil. Qualidade e estilo ao melhor preço.</p>
          <div className="ctas">
            <button className="btn btn-red" onClick={() => nav('/loja')}><i className="fas fa-shopping-bag" /> Comprar Agora</button>
            <button className="btn btn-ghost" onClick={() => nav('/loja')}>Ver Coleção</button>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="trust">
        <div className="trust-inner">
          <div className="ti"><i className="fas fa-truck-fast" /><div><strong>Entrega Rápida</strong><span>Correios e transportadoras parceiras</span></div></div>
          <div className="ti"><i className="fas fa-shield-halved" /><div><strong>Compra 100% Segura</strong><span>Certificado SSL — dados protegidos</span></div></div>
          <div className="ti"><i className="fas fa-rotate-left" /><div><strong>Troca Gratuita</strong><span>30 dias para trocar ou devolver</span></div></div>
          <div className="ti"><i className="fas fa-bolt" /><div><strong>Pix com 5% OFF</strong><span>Pagamento instantâneo e seguro</span></div></div>
        </div>
      </div>

      {/* CATEGORIES */}
      <section className="cats">
        <div className="wrap">
          <div className="cats-top">
            <div className="sec-head">
              <p className="sec-tag">Explore</p>
              <h2 className="sec-title">Compre por Categoria</h2>
              <p className="sec-sub">Encontre tudo o que você precisa, organizado e fácil de navegar</p>
            </div>
            <button className="btn-outline" onClick={() => nav('/loja')}>Ver Todas <i className="fas fa-arrow-right" /></button>
          </div>
          <div className="cat-grid">
            {categories.map((c, i) => (
              <div key={i} className="cat-card" onClick={() => nav('/loja')}>
                <img src={c.img} alt={c.label} loading="lazy" />
                <span className={`cat-count${c.promo ? ' promo' : ''}`}>{c.count}</span>
                <div className="cat-ov">
                  <div className="cat-info">
                    <h3>{c.label}</h3>
                    <p>{c.sub}</p>
                    <div className="cat-line" />
                  </div>
                  <div className="cat-cta">Explorar coleção <i className="fas fa-arrow-right" /></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <p className="sec-tag">Mais Vendidos</p>
            <h2 className="sec-title">Produtos em Destaque</h2>
            <p className="sec-sub">Os favoritos dos nossos clientes esta semana</p>
          </div>
          <div className="prod-grid">
            {products.slice(0, 8).map(p => <ProductCard key={p.id} product={p} />)}
          </div>
          <div style={{ textAlign: 'center', marginTop: 46 }}>
            <button className="btn btn-red" onClick={() => nav('/loja')}>
              Ver Todos os Produtos <i className="fas fa-arrow-right" />
            </button>
          </div>
        </div>
      </section>

      {/* PROMO BANNER */}
      <div className="promo">
        <div className="promo-c">
          <div className="promo-label">Liquidação de Temporada</div>
          <div className="promo-num">ATÉ <span>70</span>%</div>
          <p className="promo-txt">de desconto em centenas de produtos selecionados</p>
          <button className="btn btn-red" onClick={() => nav('/loja')}>Aproveitar Agora <i className="fas fa-tag" /></button>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <section className="testi">
        <div className="wrap">
          <div className="sec-head">
            <p className="sec-tag">Avaliações</p>
            <h2 className="sec-title">O que nossos clientes dizem</h2>
            <p className="sec-sub">Mais de 10.000 clientes satisfeitos em todo o Brasil</p>
          </div>
          <div className="testi-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="tc">
                <div className="tc-q">"</div>
                <div className="tc-stars">★★★★★</div>
                <p className="tc-text">{t.text}</p>
                <div className="tc-author">
                  <img src={t.avatar} alt={t.name} />
                  <div><strong>{t.name}</strong><span>{t.city}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <div className="nl">
        <h2>Receba Ofertas Exclusivas</h2>
        <p>Cadastre seu e-mail e seja o primeiro a saber das nossas promoções e lançamentos.</p>
        <form className="nl-form" onSubmit={e => e.preventDefault()}>
          <input type="email" placeholder="Seu melhor e-mail..." />
          <button type="submit">Quero Ofertas!</button>
        </form>
      </div>
    </>
  )
}
