export const products = [
  { id: 1, name: 'Vestido Floral Verão', cat: 'Feminino', price: 129.90, oldPrice: 185.90, badge: 'sale', pct: 30, rating: 5, reviews: 87, img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80' },
  { id: 2, name: 'Jaqueta Slim Fit Premium', cat: 'Masculino', price: 249.90, oldPrice: null, badge: 'new', pct: null, rating: 4, reviews: 42, img: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80' },
  { id: 3, name: 'Tênis Casual Moderno', cat: 'Calçados', price: 189.90, oldPrice: 237.90, badge: 'sale', pct: 20, rating: 5, reviews: 136, img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80' },
  { id: 4, name: 'Blazer Executivo Feminino', cat: 'Feminino', price: 319.90, oldPrice: null, badge: null, pct: null, rating: 5, reviews: 61, img: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&q=80' },
  { id: 5, name: 'Camisa Social Oxford', cat: 'Masculino', price: 89.90, oldPrice: 149.90, badge: 'sale', pct: 40, rating: 4, reviews: 29, img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&q=80' },
  { id: 6, name: 'Calça Jeans Skinny', cat: 'Feminino', price: 159.90, oldPrice: null, badge: 'new', pct: null, rating: 5, reviews: 94, img: 'https://images.unsplash.com/photo-1467043237213-65f2da53396f?w=500&q=80' },
  { id: 7, name: 'Bolsa Couro Sintético', cat: 'Acessórios', price: 199.90, oldPrice: null, badge: null, pct: null, rating: 4, reviews: 58, img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80' },
  { id: 8, name: 'Look Completo Casual', cat: 'Feminino', price: 274.90, oldPrice: 369.90, badge: 'sale', pct: 25, rating: 5, reviews: 113, img: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500&q=80' },
  { id: 9, name: 'Vestido Longo Elegante', cat: 'Feminino', price: 349.90, oldPrice: null, badge: 'new', pct: null, rating: 5, reviews: 71, img: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&q=80' },
  { id: 10, name: 'Shorts Esportivo Pro', cat: 'Masculino', price: 79.90, oldPrice: 93.90, badge: 'sale', pct: 15, rating: 4, reviews: 33, img: 'https://images.unsplash.com/photo-1542219550-37153d387c27?w=500&q=80' },
  { id: 11, name: 'Mochila Urban Premium', cat: 'Acessórios', price: 219.90, oldPrice: null, badge: null, pct: null, rating: 5, reviews: 88, img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&q=80' },
  { id: 12, name: 'Sapato Social Executivo', cat: 'Calçados', price: 219.90, oldPrice: 338.90, badge: 'sale', pct: 35, rating: 5, reviews: 52, img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&q=80' },
]

export const pixPrice = (p) => (p * 0.95).toFixed(2).replace('.', ',')
export const fmtPrice = (p) => p.toFixed(2).replace('.', ',')
