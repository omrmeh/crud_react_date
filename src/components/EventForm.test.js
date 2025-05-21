import { render, screen, fireEvent } from '@testing-library/react';
import EventForm from './EventForm';

describe('EventForm', () => {
  const mockAdd = jest.fn();
  const mockUpdate = jest.fn();

  it('affiche le formulaire pour un nouvel événement et appelle onAdd', () => {
    render(<EventForm onAdd={mockAdd} onUpdate={mockUpdate} current={null} />);

    // Récupère les champs
    const titleInput = screen.getByLabelText(/Titre/i);
    const datetimeInput = screen.getByLabelText(/Date & heure/i);
    const submitBtn = screen.getByRole('button', { name: /Ajouter/i });

    // Simule la saisie
    fireEvent.change(titleInput, { target: { value: 'Mon évènement' } });
    fireEvent.change(datetimeInput, { target: { value: '2025-06-01T10:30' } });

    // Soumet
    fireEvent.click(submitBtn);

    expect(mockAdd).toHaveBeenCalledTimes(1);
    const calledWith = mockAdd.mock.calls[0][0];
    expect(calledWith).toMatchObject({
      title: 'Mon évènement',
      datetime: '2025-06-01T10:30'
    });
  });

  it('préremplis et met à jour avec onUpdate', () => {
    const current = {
      id: 42,
      title: 'Origine',
      desc: 'Desc',
      datetime: '2025-07-07T15:00'
    };
    render(<EventForm onAdd={mockAdd} onUpdate={mockUpdate} current={current} />);

    // Vérifie le préremplissage
    expect(screen.getByDisplayValue('Origine')).toBeInTheDocument();
    expect(screen.getByDisplayValue('2025-07-07T15:00')).toBeInTheDocument();

    // Change titre
    fireEvent.change(screen.getByLabelText(/Titre/i), {
      target: { value: 'Modifié' }
    });
    fireEvent.click(screen.getByRole('button', { name: /Mettre à jour/i }));

    expect(mockUpdate).toHaveBeenCalledWith(
      expect.objectContaining({ id: 42, title: 'Modifié' })
    );
  });
});

