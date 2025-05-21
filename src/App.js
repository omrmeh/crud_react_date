import React, { useState, useEffect } from "react";
import { getEvents, saveEvents } from "./services/eventService";
import EventForm from "./components/EventForm";
import EventList from "./components/EventList";

function App() {
  const [events, setEvents] = useState([]);
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    setEvents(getEvents());
  }, []);

  useEffect(() => {
    saveEvents(events);
  }, [events]);

  const handleAdd = event => setEvents(prev => [...prev, event]);
  const handleUpdate = updated => {
    setEvents(prev => prev.map(ev => ev.id === updated.id ? updated : ev));
    setCurrent(null);
  };
  const handleDelete = id => setEvents(prev => prev.filter(ev => ev.id !== id));
  const handleEdit = ev => setCurrent(ev);

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Gestion d'événements</h1>
      <EventForm key={current ? current.id : "new"} onAdd={handleAdd} onUpdate={handleUpdate} current={current} />
      <EventList events={events} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default App;
