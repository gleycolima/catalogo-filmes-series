import React from 'react';
import { Plus } from 'lucide-react';

interface ContentItem {
  id?: number;
  title: string;
  type: 'filme' | 'série';
  genre: string;
  year: number;
  rating: number;
  watched: boolean;
}

interface FormProps {
  formData: ContentItem;
  editingId: number | null;
  onFormChange: (field: keyof Omit<ContentItem, 'id'>, value: any) => void;
  onSubmit: () => void;
  onCancel: () => void;
}

export default function Form({ 
  formData, 
  editingId, 
  onFormChange, 
  onSubmit, 
  onCancel 
}: FormProps): JSX.Element {
  return (
    <section className="form-section">
      <h2 className="form-title">
        {editingId ? '✏️ Editar Conteúdo' : '➕ Adicionar Novo Título'}
      </h2>
      
      <div className="form-grid">
        <input
          type="text"
          placeholder="Título"
          value={formData.title}
          onChange={(e) => onFormChange('title', e.target.value)}
          className="form-input"
        />
        
        <select
          value={formData.type}
          onChange={(e) => onFormChange('type', e.target.value)}
          className="form-input"
        >
          <option value="filme">Filme</option>
          <option value="série">Série</option>
        </select>

        <input
          type="text"
          placeholder="Gênero"
          value={formData.genre}
          onChange={(e) => onFormChange('genre', e.target.value)}
          className="form-input"
        />

        <input
          type="number"
          placeholder="Ano"
          value={formData.year}
          onChange={(e) => onFormChange('year', parseInt(e.target.value))}
          className="form-input"
        />

        <select
          value={formData.rating}
          onChange={(e) => onFormChange('rating', parseInt(e.target.value))}
          className="form-input"
        >
          {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n} ⭐</option>)}
        </select>

        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={formData.watched}
            onChange={(e) => onFormChange('watched', e.target.checked)}
          />
          <span>Já assisti</span>
        </label>
      </div>

      <div className="button-group">
        <button onClick={onSubmit} className="btn btn-primary">
          <Plus size={20} /> {editingId ? 'Atualizar' : 'Adicionar'}
        </button>
        {editingId && (
          <button onClick={onCancel} className="btn btn-cancel">
            Cancelar
          </button>
        )}
      </div>
    </section>
  );
}