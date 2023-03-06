import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import polygonLogo from "../../assets/polygon-logo.png";
import addressLogo from "../../assets/address-logo1.png";
import yelPat from "../../../public/yellow_pat/yellow_pat.webp";
import Image from "next/image";
const Navbar = (props: any) => {
  const address = props.address;
  return (
    <>
      <header className={styles.navbar}>
        <Image src={yelPat} alt="Yellow Pattern" className={styles.logo} />
        <div className={styles.navbarTitle}>SQUAD</div>
        {props.navType == "primary" ? (
          <>
            <Link href="/" className={styles.navbarItem}>
              Home
            </Link>
            <Link href="/about" className={styles.navbarItem}>
              About
            </Link>
            <Link href="/contact" className={styles.navbarItem}>
              Contact Us
            </Link>
          </>
        ) : (
          <>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "3px",
                marginRight: "20px",
                marginTop: "10px",
              }}
            >
              <Image
                src={polygonLogo}
                alt=""
                style={{ height: "1.8rem", width: "1.8rem" }}
              />
              <span style={{ color: "white" }}>Polygon</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                style={{ fontSize: 25, color: "white", fontWeight: "300" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "3px",
                background: "#68468B",
                padding: "10px",
                borderRadius: "50px",
                marginTop: "10px",
                marginRight: "20px",
              }}
            >
              <Image
                src={addressLogo}
                alt=""
                style={{ height: "1.8rem", width: "1.8rem" }}
              />
              <span style={{ color: "white" }}>
                {address?.slice(0, 4)}...{address?.slice(-4)}
              </span>
              <FontAwesomeIcon
                icon={faChevronDown}
                style={{ fontSize: 25, color: "white", fontWeight: "300" }}
              />
            </div>
          </>
        )}
      </header>
    </>
  );
};

export default Navbar;
