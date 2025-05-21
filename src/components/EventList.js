import React from "react";
import { format } from "date-fns";

function EventList({ events, onEdit, onDelete }) {
  if (events.length === 0) return <p>Aucun événement.</p>;
  const sorted = [...events].sort((a,b) => new Date(b.datetime) - new Date(a.datetime));
  return (
    <ul>
      {sorted.map(ev => (
        <li key={ev.id} className="bg-white p-4 mb-2 rounded shadow flex justify-between items-start">
          <div>
            <h2 className="font-semibold">{ev.title}</h2>
            <p className="text-sm text-gray-600">{format(new Date(ev.datetime), "dd/MM/yyyy HH:mm")}</p>
            <p className="mt-1">{ev.desc}</p>
          </div>
          <div className="flex space-x-2">
            <button onClick={() => onEdit(ev)} className="text-yellow-600 hover:underline">Éditer</button>
            <button onClick={() => onDelete(ev.id)} className="text-red-600 hover:underline">Supprimer</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default EventList;
