

/*const Navbar=() => {
  return(
    <div>
        <div className="wrapper">
      <nav className="nav">
        <div>
          <a href="/" className="logo">InterSTORY</a>
        </div>
        <div className="nav-items">
          <a href="/">Search by keyword</a>
          <a className="menu"href="/">Menu</a>
        </div>
      </nav>
      </div>
    </div>
  );
}

export default Navbar*/
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export default function App() {
  return (
  <div>
      <Navbar>
        <NavbarBrand>
          <Link className="font-bold text-inherit hover:cursor-pointer">InterSTORY</Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      </div>
  );
}