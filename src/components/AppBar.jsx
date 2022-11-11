
import { Link,Header} from '../App.styled'

//import { Home } from 'pages/Home';

const navItems = [
  { href: 'home', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

export const AppBar = () => {
    return (
        <Header>
        <nav>
          {navItems.map(({ href, text }) => (
            <Link to={href} key={href}>{text}</Link>
          ))}
        </nav>
      </Header>
    );
}