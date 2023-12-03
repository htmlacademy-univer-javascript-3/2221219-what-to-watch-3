import { useAppDispatch } from '../../redux/hooks.ts';
import { fetchFilmsAction } from '../../redux/api-actions.ts';

function ErrorScreen() {
  const dispatch = useAppDispatch();

  const handleTryAgain = () => {
    dispatch(fetchFilmsAction());
  };

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
        <button onClick={handleTryAgain} className="replay replay--error more-link" type="button">return to the homepage</button>
      </div>
    </div>
  );
}

export default ErrorScreen;
