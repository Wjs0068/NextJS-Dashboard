import Link from "next/link";
import styles from "../styles/navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.headerOne}>My Dashboard</h1>
      <div className={styles.links}>
        <Link href="/">Home</Link>

        <Link href="/weather">Weather</Link>
        <Link href="/news">News</Link>
        <Link href="/stock">Stock</Link>
      </div>
    </div>
  );
}

export default Navbar;
