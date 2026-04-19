import React, { useState, useMemo } from "react";
import "../styles/Grid.css";

function Grid({ data, columns, onFilterChange }) {
  const [filters, setFilters] = useState({});
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [openFilter, setOpenFilter] = useState(null); // Track which filter is open

  // Get unique values for each column for dropdown options
  const getUniqueValues = (columnKey) => {
    const values = data.map(item => item[columnKey]).filter(Boolean);
    return [...new Set(values)].sort();
  };

  // Filter data based on current filters
  const filteredData = useMemo(() => {
    return data.filter(item => {
      return Object.keys(filters).every(key => {
        if (!filters[key]) return true;
        return item[key].toString().toLowerCase().includes(filters[key].toLowerCase());
      });
    });
  }, [data, filters]);

  // Sort data
  const sortedData = useMemo(() => {
    if (!sortConfig.key) return filteredData;
    
    return [...filteredData].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [filteredData, sortConfig]);

  const handleFilterChange = (columnKey, value) => {
    const newFilters = { ...filters, [columnKey]: value };
    setFilters(newFilters);
    if (onFilterChange) onFilterChange(newFilters);
  };

  const handleSort = (columnKey) => {
    setSortConfig(prev => ({
      key: columnKey,
      direction: prev.key === columnKey && prev.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  const toggleFilter = (columnKey) => {
    setOpenFilter(openFilter === columnKey ? null : columnKey);
  };

  return (
    <div className="grid-container">
      {/* Table */}
      <div className="grid-table-container">
        <table className="grid-table">
          <thead>
            <tr>
              {columns.map(column => (
                <th key={column.key} className="sortable-header">
                  <div className="header-content">
                    <div className="header-main">
                      <span 
                        className="header-title"
                        onClick={() => handleSort(column.key)}
                      >
                        {column.label}
                        {sortConfig.key === column.key && (
                          <span className="sort-indicator">
                            {sortConfig.direction === 'asc' ? ' ↗' : ' ↘'}
                          </span>
                        )}
                      </span>
                      <span 
                        className={`filter-arrow ${openFilter === column.key ? 'active' : ''}`}
                        onClick={() => toggleFilter(column.key)}
                      >
                        ▼
                      </span>
                    </div>
                    
                    {/* Filter dropdown */}
                    {openFilter === column.key && (
                      <div className="filter-dropdown">
                        <input
                          type="text"
                          className="filter-search"
                          placeholder={`Search ${column.label}...`}
                          value={filters[column.key] || ''}
                          onChange={(e) => handleFilterChange(column.key, e.target.value)}
                          autoFocus
                        />
                        <div className="filter-options">
                          <div 
                            className="filter-option"
                            onClick={() => {
                              handleFilterChange(column.key, '');
                              setOpenFilter(null);
                            }}
                          >
                            All
                          </div>
                          {getUniqueValues(column.key).map(value => (
                            <div 
                              key={value} 
                              className="filter-option"
                              onClick={() => {
                                handleFilterChange(column.key, value);
                                setOpenFilter(null);
                              }}
                            >
                              {value}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row, index) => (
              <tr key={index}>
                {columns.map(column => (
                  <td key={column.key}>
                    {column.render ? column.render(row[column.key], row) : row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid-footer">
        Total: {sortedData.length} items
      </div>
    </div>
  );
}

export default Grid;