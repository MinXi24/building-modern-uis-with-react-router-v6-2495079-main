import { useParams, NavLink, Outlet } from "react-router-dom";
import { getCategory } from "../api";
import { useState } from "react";

export default function Category() {
  const { catId } = useParams();
  const category = getCategory(catId);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter sessions based on the search term
  const filteredSessions = category?.sessions.filter((session) =>
    session.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    session.speaker.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h2>{category.name} Diploma</h2>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search sessions..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {/* Sessions list */}
      <ul className="session-list">
        {filteredSessions?.map((session) => (
          <li className="session" key={session.id}>
            <NavLink
              className={({ isActive }) => (isActive ? "session-active" : null)}
              to={session.id}
            >
              <p className="session-name">
                {session.speaker.course} | {session.name}
              </p>
            </NavLink>
          </li>
        ))}
      </ul>

      <Outlet />
    </>
  );
}
