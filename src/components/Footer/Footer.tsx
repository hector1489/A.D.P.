import logo from '../../assets/img/logo_amigosDelPuangue.png'

const Footer = () => {

  return (
    <footer className="footer p-10 bg-base-200 text-base-content mt-4">
      <aside>
        <div className="avatar">
          <div className="w-24 rounded">
            <img src={logo} />
          </div>
        </div>
        <p>Promoviendo el cuidado ambiental<br /> Y la cultura desde el 2000.</p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
      </nav>
    </footer>
  )
}

export default Footer