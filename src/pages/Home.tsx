import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import Card from '../components/Card';
import { getAllContent, createContent, updateContent, deleteContent } from '../services/api';

interface ContentItem {
  id?: number;
  title: string;
  type: 'filme' | 'série';
  genre: string;
  year: number;
  rating: number;
  watched: boolean;
}

type FilterType = 'todos' | 'filmes' | 'series' | 'assistidos' | 'nao-assistidos';

export default function Home(): JSX.Element {
  const [items, setItems] = useState<ContentItem[]>([]);
  const [formData, setFormData] = useState<ContentItem>({
    title: '',
    type: 'filme',
    genre: '',
    year: new Date().getFullYear(),
    rating: 5,
    watched: false
  });
  const [editingId, setEditingId] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [filter, setFilter] = useState<FilterType>('todos');

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async (): Promise<void> => {
    try {
      setLoading(true);
      const data = await getAllContent();
      setItems(data);
    } catch (error) {
      console.error('Erro ao carregar:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFormChange = (field: keyof Omit<ContentItem, 'id'>, value: any): void => {
    setFormData(prev => ({...prev, [field]: value}));
  };

  const handleSubmit = async (): Promise<void> => {
    if (!formData.title.trim()) {
      alert('Preencha o título!');
      return;
    }

    try {
      if (editingId) {
        const updated = await updateContent(editingId, formData);
        setItems(items.map(item => item.id === editingId ? updated : item));
        setEditingId(null);
      } else {
        const newItem = await createContent(formData);
        setItems([...items, newItem]);
      }
      
      setFormData({
        title: '',
        type: 'filme',
        genre: '',
        year: new Date().getFullYear(),
        rating: 5,
        watched: false
      });
    } catch (error) {
      console.error('Erro ao salvar:', error);
    }
  };

  const handleDelete = async (id: number): Promise<void> => {
    if (!confirm('Tem certeza que deseja deletar?')) return;
    
    try {
      await deleteContent(id);
      setItems(items.filter(item => item.id !== id));
    } catch (error) {
      console.error('Erro ao deletar:', error);
    }
  };

  const handleEdit = (item: ContentItem): void => {
    setFormData(item);
    setEditingId(item.id ?? null);
    window.scrollTo(0, 0);
  };

  const handleCancel = (): void => {
    setEditingId(null);
    setFormData({
      title: '',
      type: 'filme',
      genre: '',
      year: new Date().getFullYear(),
      rating: 5,
      watched: false
    });
  };

  const filteredItems = items.filter(item => {
    switch (filter) {
      case 'filmes':
        return item.type === 'filme';
      case 'series':
        return item.type === 'série';
      case 'assistidos':
        return item.watched;
      case 'nao-assistidos':
        return !item.watched;
      default:
        return true;
    }
  });

  const watchedCount = items.filter(i => i.watched).length;

  return (
    <div className="app">
      <Header totalItems={items.length} watchedItems={watchedCount} />

      <main className="main">
        <Form 
          formData={formData}
          editingId={editingId}
          onFormChange={handleFormChange}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />

        <div className="filter-section">
          {(['todos', 'filmes', 'series', 'assistidos', 'nao-assistidos'] as FilterType[]).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`filter-btn ${filter === f ? 'active' : ''}`}
            >
              {f === 'todos' && 'Todos'}
              {f === 'filmes' && 'Filmes'}
              {f === 'series' && 'Séries'}
              {f === 'assistidos' && '✓ Assistidos'}
              {f === 'nao-assistidos' && '○ Não Assistidos'}
            </button>
          ))}
        </div>

        <section className="list-section">
          <h2 className="list-title">
            Minha Coleção ({filteredItems.length})
          </h2>

          {loading ? (
            <p className="loading">Carregando...</p>
          ) : filteredItems.length === 0 ? (
            <p className="empty">Nenhum item encontrado. Adicione um novo! 🎬</p>
          ) : (
            <div className="grid">
              {filteredItems.map(item => (
                <Card
                  key={item.id}
                  item={item}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}