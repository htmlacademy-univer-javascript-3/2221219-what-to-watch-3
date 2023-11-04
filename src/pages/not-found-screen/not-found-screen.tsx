import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function NotFoundScreen(): JSX.Element {
  return (
    <div className="page-content">
      <Helmet>
        <title>WTW. Page not found</title>
      </Helmet>
      <h1>404. Страница не найдена</h1>
      <p>Похоже, запрашиваемая вами страница не найдена.</p>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
}
