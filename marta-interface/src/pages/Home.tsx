import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>MARTA</h1>

      <nav>
        <Link to="/about">About MARTA</Link>
      </nav>

      <h2>View Route Schedule</h2>

      <ul>
        <li>
          <Link to="/lines/gold">Gold Line</Link>
        </li>
        <li>
          <Link to="/lines/red">Red Line</Link>
        </li>
        <li>
          <Link to="/lines/green">Green Line</Link>
        </li>
        <li>
          <Link to="/lines/blue">Blue Line</Link>
        </li>
      </ul>
    </div>
  );
}