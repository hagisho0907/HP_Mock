'use client';

import { useState } from 'react';

interface WorksFilterProps {
  onFilterChange: (filter: string) => void;
  currentFilter: string;
}

export function WorksFilter({ onFilterChange, currentFilter }: WorksFilterProps) {
  const filters = [
    { id: 'all', label: 'すべて' },
    { id: '2025', label: '2025年' },
    { id: '2024', label: '2024年' },
    { id: 'theater', label: 'シアター' },
    { id: 'exhibition', label: '展示' },
    { id: 'event', label: 'イベント' }
  ];

  return (
    <div className="works-filter-container mb-12">
      <div className="works-filter-wrapper">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            className={`works-filter-button ${
              currentFilter === filter.id ? 'active' : ''
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
}