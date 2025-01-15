import { Outlet, NavLink } from "react-router-dom";
import { getDiplomas } from "../api";
import { useState } from "react";

export default function Diplomas() {
  const diplomas = getDiplomas();
  const [searchTerm, setSearchTerm] = useState("");

  // Filter diplomas based on the search term
  const filteredDiplomas = diplomas.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Schools</h1>

      <input
        type="text"
        placeholder="Search schools..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <ul className="diplomas">
        {filteredDiplomas.map((cat) => (
          <li key={cat.id}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "category-active" : null
              }
              to={cat.id}
            >
              {cat.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
