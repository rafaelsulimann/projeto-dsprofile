export default function Header() {
  return (
    <>
      <div className="header-title">
        <a href="#">
          <h1>Dev Full Stack</h1>
        </a>
      </div>
      <div className="header-nav">
        <nav>
          <ul>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li className="header-nav-last-item">
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
