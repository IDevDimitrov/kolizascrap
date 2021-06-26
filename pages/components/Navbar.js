import Link from "next/link";

const Navbar = () => {
  return (
    <div className='header'>
      
        <h1>Коли за скрап</h1>
      

      <ul className='nav'>
        <li>
          <Link href="/">
            <a>Начало</a>
          </Link>
          <Link href="/about">
            <a>За нас</a>
          </Link>
          <Link href="/service">
            <a>Услуги</a>
          </Link>
          <Link href="/contact/">
            <a>Контакти</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
