// src/components/EventForm.js
import React, { useState, useEffect } from "react";
import { formatISO } from "date-fns";

function EventForm({ onAdd, onUpdate, current }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [datetime, setDatetime] = useState(
    formatISO(new Date()).slice(0, 16)
  );

  useEffect(() => {
    if (current) {
      setTitle(current.title);
      setDesc(current.desc);
      setDatetime(current.datetime);
    }
  }, [current]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const ev = {
      id: current ? current.id : Date.now(),
      title,
      desc,
      datetime,
    };
    current ? onUpdate(ev) : onAdd(ev);
    setTitle("");
    setDesc("");
    setDatetime(formatISO(new Date()).slice(0, 16));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6">
      <div className="mb-2">
        <label htmlFor="title" className="block mb-1">
          Titre
        </label>
        <input
          id="title"
          type="text"
          className="w-full border px-2 py-1 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-2">
        <label htmlFor="desc" className="block mb-1">
          Description
        </label>
        <textarea
          id="desc"
          className="w-full border px-2 py-1 rounded"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          rows={3}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="datetime" className="block mb-1">
          Date & heure
        </label>
        <input
          id="datetime"
          type="datetime-local"
          className="w-full border px-2 py-1 rounded"
          value={datetime}
          onChange={(e) => setDatetime(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {current ? "Mettre à jour" : "Ajouter"}
      </button>
    </form>
  );
}

export default EventForm;

