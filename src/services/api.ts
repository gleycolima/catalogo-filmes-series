const API_BASE_URL = 'http://localhost:3000';
const ENDPOINT = '/content';

export interface ContentItem {
  id?: number;
  title: string;
  type: 'filme' | 'série';
  genre: string;
  year: number;
  rating: number;
  watched: boolean;
}

export async function getAllContent(): Promise<ContentItem[]> {
  try {
    const response = await fetch(`${API_BASE_URL}${ENDPOINT}`);
    if (!response.ok) throw new Error('Erro ao buscar dados');
    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar conteúdo:', error);
    throw error;
  }
}

export async function getContentById(id: number): Promise<ContentItem> {
  try {
    const response = await fetch(`${API_BASE_URL}${ENDPOINT}/${id}`);
    if (!response.ok) throw new Error('Item não encontrado');
    return await response.json();
  } catch (error) {
    console.error(`Erro ao buscar conteúdo ${id}:`, error);
    throw error;
  }
}

export async function createContent(content: Omit<ContentItem, 'id'>): Promise<ContentItem> {
  try {
    const response = await fetch(`${API_BASE_URL}${ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(content)
    });
    if (!response.ok) throw new Error('Erro ao criar item');
    return await response.json();
  } catch (error) {
    console.error('Erro ao criar conteúdo:', error);
    throw error;
  }
}

export async function updateContent(id: number, content: Omit<ContentItem, 'id'>): Promise<ContentItem> {
  try {
    const response = await fetch(`${API_BASE_URL}${ENDPOINT}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(content)
    });
    if (!response.ok) throw new Error('Erro ao atualizar item');
    return await response.json();
  } catch (error) {
    console.error(`Erro ao atualizar conteúdo ${id}:`, error);
    throw error;
  }
}

export async function partialUpdateContent(
  id: number,
  content: Partial<Omit<ContentItem, 'id'>>
): Promise<ContentItem> {
  try {
    const response = await fetch(`${API_BASE_URL}${ENDPOINT}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(content)
    });
    if (!response.ok) throw new Error('Erro ao atualizar item');
    return await response.json();
  } catch (error) {
    console.error(`Erro ao atualizar parcialmente conteúdo ${id}:`, error);
    throw error;
  }
}

export async function deleteContent(id: number): Promise<void> {
  try {
    const response = await fetch(`${API_BASE_URL}${ENDPOINT}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (!response.ok) throw new Error('Erro ao deletar item');
  } catch (error) {
    console.error(`Erro ao deletar conteúdo ${id}:`, error);
    throw error;
  }
}

export async function getContentByType(type: 'filme' | 'série'): Promise<ContentItem[]> {
  try {
    const response = await fetch(`${API_BASE_URL}${ENDPOINT}?type=${type}`);
    if (!response.ok) throw new Error('Erro ao buscar por tipo');
    return await response.json();
  } catch (error) {
    console.error(`Erro ao buscar conteúdo do tipo ${type}:`, error);
    throw error;
  }
}

export async function getWatchedContent(): Promise<ContentItem[]> {
  try {
    const response = await fetch(`${API_BASE_URL}${ENDPOINT}?watched=true`);
    if (!response.ok) throw new Error('Erro ao buscar itens assistidos');
    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar conteúdo assistido:', error);
    throw error;
  }
}

export async function getUnwatchedContent(): Promise<ContentItem[]> {
  try {
    const response = await fetch(`${API_BASE_URL}${ENDPOINT}?watched=false`);
    if (!response.ok) throw new Error('Erro ao buscar itens não assistidos');
    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar conteúdo não assistido:', error);
    throw error;
  }
}