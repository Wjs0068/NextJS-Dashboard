import Navbar from "./Navbar";
import styles from "../styles/layout.module.css";

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Navbar />
      <div>{children}</div>
    </div>
  );
}

export default Layout;
