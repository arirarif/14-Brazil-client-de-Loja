export default function Footer() {
  return (
    <>
      <footer>
        <div className="ft-grid">
          <div className="ft-brand">
            <span className="ft-brand-logo">VIVA<span>.</span>MODA</span>
            <p>Sua loja de moda online com as melhores tendências, entrega rápida e pagamento seguro em todo o Brasil.</p>
            <div className="ft-social">
              <a href="#"><i className="fab fa-instagram" /></a>
              <a href="#"><i className="fab fa-facebook-f" /></a>
              <a href="#"><i className="fab fa-tiktok" /></a>
              <a href="#"><i className="fab fa-whatsapp" /></a>
              <a href="#"><i className="fab fa-pinterest-p" /></a>
            </div>
          </div>
          <div className="ft-col">
            <h4>Atendimento</h4>
            <ul>
              <li><a href="#">Central de Ajuda</a></li>
              <li><a href="#">Rastrear Pedido</a></li>
              <li><a href="#">Trocas e Devoluções</a></li>
              <li><a href="#">Fale Conosco</a></li>
              <li><a href="#">WhatsApp</a></li>
            </ul>
          </div>
          <div className="ft-col">
            <h4>Institucional</h4>
            <ul>
              <li><a href="#">Sobre Nós</a></li>
              <li><a href="#">Blog de Moda</a></li>
              <li><a href="#">Política de Privacidade</a></li>
              <li><a href="#">Termos de Uso</a></li>
              <li><a href="#">Trabalhe Conosco</a></li>
            </ul>
          </div>
          <div className="ft-col">
            <h4>Minha Conta</h4>
            <ul>
              <li><a href="#">Minha Conta</a></li>
              <li><a href="#">Meus Pedidos</a></li>
              <li><a href="#">Lista de Desejos</a></li>
              <li><a href="#">Programa de Pontos</a></li>
              <li><a href="#">Cupons</a></li>
            </ul>
          </div>
        </div>
        <div className="ft-bot">
          <p>© 2025 VIVA.MODA — Todos os direitos reservados. CNPJ: 00.000.000/0001-00</p>
          <div className="pay-icons">
            <span className="pi pix">PIX</span>
            <span className="pi bol">BOLETO</span>
            <span className="pi">VISA</span>
            <span className="pi">MASTER</span>
            <span className="pi">ELO</span>
            <span className="pi">AMEX</span>
            <span className="pi">HIPERCARD</span>
          </div>
        </div>
      </footer>

      <a href="#" className="wa"><i className="fab fa-whatsapp" /></a>
    </>
  )
}
