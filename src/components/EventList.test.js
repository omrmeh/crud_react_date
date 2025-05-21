// src/components/EventList.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import EventList from './EventList';

describe('EventList', () => {
  const sample = [
    { id: 1, title: 'A', desc: 'D1', datetime: '2025-05-21T09:00' },
    { id: 2, title: 'B', desc: 'D2', datetime: '2025-05-21T11:00' }
  ];

  it('affiche un message si aucun événement', () => {
    render(<EventList events={[]} onEdit={() => {}} onDelete={() => {}} />);
    expect(screen.getByText(/Aucun événement/i)).toBeInTheDocument();
  });

  it('affiche et trie les événements, et appelle onEdit/onDelete', () => {
    const mockEdit = jest.fn();
    const mockDelete = jest.fn();

    render(
      <EventList events={sample} onEdit={mockEdit} onDelete={mockDelete} />
    );

    // Vérifie le tri : B (indice 0) puis A (indice 1)
    const items = screen.getAllByRole('listitem');
    expect(items[0]).toHaveTextContent('B');
    expect(items[1]).toHaveTextContent('A');

    // Éditer l'événement B (sample[1])
    fireEvent.click(screen.getAllByText(/Éditer/i)[0]);
    // Supprimer l'événement B
    fireEvent.click(screen.getAllByText(/Supprimer/i)[0]);

    expect(mockEdit).toHaveBeenCalledWith(sample[1]);
    expect(mockDelete).toHaveBeenCalledWith(2);
  });
});

