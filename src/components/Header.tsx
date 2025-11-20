import { Film } from 'lucide-react';

interface HeaderProps {
  totalItems: number;
  watchedItems: number;
}

export default function Header({ totalItems, watchedItems }: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-top">
          <div className="header-title">
            <Film size={36} />
            <div>
              <h1>ReactFlix</h1>
              <p className="header-tagline">Seu catálogo de filmes e séries com CRUD em React</p>
            </div>
          </div>
          <div className="header-stats">
            <div className="stat">
              <span className="stat-number">{totalItems}</span>
              <span className="stat-label">Títulos</span>
            </div>
            <div className="stat">
              <span className="stat-number">{watchedItems}</span>
              <span className="stat-label">Assistidos</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}