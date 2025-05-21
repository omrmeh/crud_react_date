import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

test('flux complet CRUD', async () => {
  render(<App />);

  // Ajout
  fireEvent.change(screen.getByLabelText(/Titre/i), { target: { value: 'Test' } });
  fireEvent.click(screen.getByRole('button', { name: /Ajouter/i }));
  expect(await screen.findByText('Test')).toBeInTheDocument();

  // Édition
  fireEvent.click(screen.getByText(/Éditer/i));
  fireEvent.change(screen.getByLabelText(/Titre/i), { target: { value: 'Test2' } });
  fireEvent.click(screen.getByRole('button', { name: /Mettre à jour/i }));
  expect(await screen.findByText('Test2')).toBeInTheDocument();

  // Suppression
  fireEvent.click(screen.getByText(/Supprimer/i));
  await waitFor(() => {
    expect(screen.queryByText('Test2')).toBeNull();
  });
});

