'use client'
 

import Image from "next/image";
import { useEffect } from "react";
import Logo from "../../public/ultrashipLogo.svg";
import styles from "./navbar.module.css";

export default function Navbar() {
  useEffect(() => {
    // to add header background effect on scroll
    document.addEventListener("scroll", () => {
      const header = document.querySelector('header');

      if (window.scrollY > 0) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }, []);

  return (
    <nav className={styles.nav}>
      <header>
        {/* <div>logo</div> */}
        <Image
          src={Logo}
          height={45}
          // width={32}
        />
        <ul className={styles.nav_links}>
          <li>
            <a href="./index.html#">Home</a>
          </li>
          <li>
            <a href="./index.html#my-works">About Us</a>
          </li>
          <li>
            <a href="./timeline.html">Partnership</a>
          </li>
          <li>
            <a href="./index.html#blogs">Customers</a>
          </li>
          <li>
            <a href="./index.html#contact">
              <button className={styles.primaryButton}>Request a Demo</button>
            </a>
          </li>
          <li>
            <a href="./index.html#contact">Sign In</a>
          </li>
        </ul>
      </header>
    </nav>
  );
}
