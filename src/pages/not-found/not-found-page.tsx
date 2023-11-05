import { Link } from 'react-router-dom';
import './not-found.css';

export default function NotFound() {
  return (
    <div className="page-content page-content-not-found">
      <h1 className='error-h1'>404 Not Found</h1>
      <p className="zoom-area">Oops. Looks like you took a wrong turn.</p>
      <section className="error-container">
        <span className="four"><span className="screen-reader-text">4</span></span>
        <span className="zero"><span className="screen-reader-text">0</span></span>
        <span className="four"><span className="screen-reader-text">4</span></span>
      </section>
      <div className="link-container">
        <a className='more-link'><Link to={'/'}>Return to the homepage</Link></a>
      </div>
    </div>
  );
}
