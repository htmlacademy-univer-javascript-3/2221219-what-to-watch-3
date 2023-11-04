import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="page-content">
      <h1>404. Страница не найдена</h1>
      <p>Похоже, запрашиваемая вами страница не найдена.</p>
      <Link to={'/'}>Вернуться на главную</Link>
    </div>
  );
}
