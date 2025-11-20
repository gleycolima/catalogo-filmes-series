import React, { useState, useEffect } from 'react';
import { getAllContent, deleteContent } from '../services/api';
import Card from '../components/Card';

interface ContentItem {
  id?: number;
  title: string;
  type: 'filme' | 'série';
  genre: string;
  year: number;
  rating: number;
  watched: boolean;
}

export default function List(): JSX.Element {
  const [items, setItems] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

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

  const handleEdit = (item: ContentItem): void => {
    console.log('Editar:', item);
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

  return (
    <div className="app">
      <main className="main">
        <section className="list-section">
          <h2 className="list-title">
            Todos os Títulos ({items.length})
          </h2>

          {loading ? (
            <p className="loading">Carregando...</p>
          ) : items.length === 0 ? (
            <p className="empty">Nenhum item encontrado. 🎬</p>
          ) : (
            <div className="grid">
              {items.map(item => (
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