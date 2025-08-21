import './styles.css'

export const Footer=({}) => {

    return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="company-name">SockStyle</h2>
        <ul className="contact-info">
          <li>
            <a href="" target="_blank">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                alt="WhatsApp"
              />
              WhatsApp: +51 960 615 995
            </a>
          </li>
          <li>
            <a href="">
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                alt="Correo"
              />
              norma.saul20@gmail.com
            </a>
          </li>
          <li>
            <a href="https://instagram.com/daniveloper" target="_blank">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                alt="Instagram"
              />
              @daniveloper
            </a>
          </li>
        </ul>
        <h3>2025 Todos los derechos reservados</h3>
      </div>
    </footer>
    )

}