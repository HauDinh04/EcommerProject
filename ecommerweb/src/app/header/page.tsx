import Link from "next/link";
const Header = () => {
 
  return (
    <header>
       header
      <nav>
        <ul>
          <li>
            <Link href={"/about"}>about</Link>
          </li>
          <li>
            <Link href={"/products"}>products</Link>
          </li>
        </ul>
      </nav>
     
    </header>
  );
};
export default Header;
