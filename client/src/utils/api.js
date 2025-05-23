// src/utils/api.js
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

export async function fetchMeals() {
  const response = await fetch(${BASE_URL}/meals);
  if (!response.ok) throw new Error('Failed to fetch meals');
  return await response.json();
}

export async function fetchMealDetails(id) {
  const response = await fetch(${BASE_URL}/meals/);
  if (!response.ok) throw new Error('Failed to fetch meal details');
  return await response.json();
}
