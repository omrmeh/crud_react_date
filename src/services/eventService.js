const STORAGE_KEY = "events";

export function getEvents() {
  const raw = localStorage.getItem(STORAGE_KEY) || "[]";
  return JSON.parse(raw);
}

export function saveEvents(events) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
}
