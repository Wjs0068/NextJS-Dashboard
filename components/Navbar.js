import Link from "next/link";
import styles from "../styles/navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.headerOne}>Dashboard</h1>
      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/stock">Portfolio</Link>
        <Link href="/news">News</Link>
      </div>
    </div>
  );
}

export default Navbar;
