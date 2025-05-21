import { getEvents, saveEvents } from './eventService';

describe('eventService', () => {
  const STORAGE_KEY = 'events';

  beforeEach(() => {
    localStorage.clear();
  });

  it('devrait retourner un tableau vide si rien en stockage', () => {
    expect(getEvents()).toEqual([]);
  });

  it('devrait sauvegarder et récupérer les événements', () => {
    const data = [{ id: 1, title: 'T', desc: 'D', datetime: '2025-05-21T12:00' }];
    saveEvents(data);
    expect(localStorage.getItem(STORAGE_KEY)).toBe(JSON.stringify(data));
    expect(getEvents()).toEqual(data);
  });
});

