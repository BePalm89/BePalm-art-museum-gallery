import "./Header.css";

import Logo from "../Logo/Logo";
import Link from "../Link/Link";

const Header = () => {
  const links = [
    { label: "home", path: "/" },
    { label: "gallery", path: "/gallery" },
  ];
  return (
    <header>
      <Logo />
      <nav>
        <ul>
          {links.map((link) => (
            <Link key={link.label} label={link.label} path={link.path} />
          ))}
        </ul>
      </nav>
      <input type="text" placeholder="search" style={{ height: "20px" }} />
    </header>
  );
};

export default Header;
