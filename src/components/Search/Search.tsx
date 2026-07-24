import type React from "react";
import "../Search/Search.scss";

interface SearchProps {
  value: string,
  onChange: (value: string) => void;
}

export const Search: React.FC<SearchProps> = ({ value, onChange }) => {

  return (
    <>
      <div className="search">
        <h3 className="search__title">Search a car</h3>
        <input
          type="text"
          className="search__input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search by brand or model"
        />
      </div>
    </>
  )
}