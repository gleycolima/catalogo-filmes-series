import React from 'react';
import { Trash2, Edit2 } from 'lucide-react';

interface ContentItem {
  id?: number;
  title: string;
  type: 'filme' | 'série';
  genre: string;
  year: number;
  rating: number;
  watched: boolean;
}

interface CardProps {
  item: ContentItem;
  onEdit: (item: ContentItem) => void;
  onDelete: (id: number) => void;
}

export default function Card({ item, onEdit, onDelete }: CardProps): JSX.Element {
  const stars = (rating: number): string => '⭐'.repeat(Math.min(rating, 5));

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">{item.title}</h3>
        <span className={`badge ${item.type === 'filme' ? 'badge-filme' : 'badge-serie'}`}>
          {item.type}
        </span>
      </div>
      
      <div className="card-content">
        <p><strong>Gênero:</strong> {item.genre}</p>
        <p><strong>Ano:</strong> {item.year}</p>
        <p className="rating"><strong>Avaliação:</strong> {stars(item.rating)}</p>
        <p className={item.watched ? 'watched' : 'not-watched'}>
          {item.watched ? '✓ Assistido' : '○ Não assistido'}
        </p>
      </div>

      <div className="card-actions">
        <button
          onClick={() => onEdit(item)}
          className="action-btn edit-btn"
          title="Editar"
        >
          <Edit2 size={18} />
        </button>
        <button
          onClick={() => item.id && onDelete(item.id)}
          className="action-btn delete-btn"
          title="Deletar"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}