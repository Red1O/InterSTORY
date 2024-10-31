

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


scrap/use for later
    <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
  );
}*/
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import { Link } from 'react-router-dom';


export default function App() {
  return (
  <div className="w-3000px">
      <Navbar className="bg-gray-800">
        <NavbarBrand>
          <Link to="/Home" className="text-xl font-bold text-inherit hover:cursor-pointer">InterSTORY</Link>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex  ">
            <Link className="text-white" href="#">About</Link>
          </NavbarItem>
          <NavbarItem className="hidden lg:flex">
            <Link  className="text-white" href ="#">Menu</Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      </div>
  );
}