"use client";
import { useState } from "react";
import Image from "next/image";
import sampleOperator from "../../public/sampleOperator.svg";
import brokersIcon from "../../public/brokersIcon.svg";
import carriersIcon from "../../public/carriersIcon.svg";
import shippersIcon from "../../public/shippersIcon.svg";
import HeroRight from "../../public/heroRightImg.png";
import HeroSampleImg from "../../public/ultraship-sample.png";
import DynamicRateImg from "../../public/feature-icons/dynamic-mgmt.svg";
import LogoBlue from "../../public/ultrashipLogoBlue.svg";
import Navbar from "./navbar";
import styles from "./page.module.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { SocialIcon } from 'react-social-icons'
export default function Home() {
  // to get selected tab value and based on it active the blue border
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <>
      <main className={styles.main}>
        <Navbar />
        <div className={styles.heroContainer}>
          <div className={styles.hero}>
            <div className={styles.heroLeft}>
              <h1 className={styles.heroText}>
                The <span style={{ color: "#42B0FF" }}>Next-Gen TMS</span> to
                Optimize shipping
              </h1>
              <h3 className={styles.heroSubtext}>
                Navigate complexities effortlessly with scalable solutions.
                Experience unparalleled visibility, automation, revolutionizing
                supply chain management.
              </h3>
              <div className={styles.heroCtas}>
                <button className={styles.primaryButton}>Request a Demo</button>
                <button className={styles.secondaryButton}>Try for free</button>
              </div>
            </div>
            <div className={styles.heroRight}>
              <Image
                sizes="100vw"
                src={HeroRight}
                style={{
                  height: "auto"
                }}
              />
            </div>
          </div>
        </div>

        {/* BELOW HERO SECTION */}
        <div className={styles.sampleAnalytics}>
          <div>End-to-end analytics</div>
          <Image src={HeroSampleImg} height={550} />
        </div>
        {/* FEATURE SECTION */}
        <section>
          <div className={styles.featuresContainer}>
            <h1 style={{ color: "#083452" }}>
              Explore Our Comprehensive Features
            </h1>
            <div className={styles.featuresList}>
              <div className={styles.featureCard}>
                <Image src={DynamicRateImg} />
                <div className={styles.featureHeading}>
                  Dynamic Rate Management
                </div>
                <div className={styles.featureDesc}>
                  Adjust rates in real-time based on market conditions and
                  customer demands, maximizing profitability.
                </div>
                <button className={styles.btnUnderline}>Know more</button>
              </div>
              <div className={styles.featureCard}>
                <Image src={DynamicRateImg} />
                <div className={styles.featureHeading}>
                  Dynamic Rate Management
                </div>
                <div className={styles.featureDesc}>
                  Adjust rates in real-time based on market conditions and
                  customer demands, maximizing profitability.
                </div>
                <button className={styles.btnUnderline}>Know more</button>
              </div>
              <div className={styles.featureCard}>
                <Image src={DynamicRateImg} />
                <div className={styles.featureHeading}>
                  Dynamic Rate Management
                </div>
                <div className={styles.featureDesc}>
                  Adjust rates in real-time based on market conditions and
                  customer demands, maximizing profitability.
                </div>
                <button className={styles.btnUnderline}>Know more</button>
              </div>
              <div className={styles.featureCard}>
                <Image src={DynamicRateImg} />
                <div className={styles.featureHeading}>
                  Dynamic Rate Management
                </div>
                <div className={styles.featureDesc}>
                  Adjust rates in real-time based on market conditions and
                  customer demands, maximizing profitability.
                </div>
                <button className={styles.btnUnderline}>Know more</button>
              </div>
              <div className={styles.featureCard}>
                <Image src={DynamicRateImg} />
                <div className={styles.featureHeading}>
                  Dynamic Rate Management
                </div>
                <div className={styles.featureDesc}>
                  Adjust rates in real-time based on market conditions and
                  customer demands, maximizing profitability.
                </div>
                <button className={styles.btnUnderline}>Know more</button>
              </div>
            </div>
          </div>
        </section>
        {/* TRUSTED CHOICE SECTION */}
        <section className={styles.trustedChoice}>
          <h2>Trusted choice for 100+ logistics operators</h2>
          <div className={styles.trustedImages}>
            <Image
              src={sampleOperator}
              height={55}
              // width={32}
            />
            <Image
              src={sampleOperator}
              height={55}
              // width={32}
            />
            <Image
              src={sampleOperator}
              height={55}
              // width={32}
            />
            <Image
              src={sampleOperator}
              height={55}
              // width={32}
            />
            <Image
              src={sampleOperator}
              height={55}
              // width={32}
            />
          </div>
        </section>
        {/* FEATURE TOGGLE SECTION */}
        <section className={styles.featureToggle}>
          <h1
            style={{
              color: "#083452",
              textAlign: "center",
              marginTop: "4em",
              fontSize: "2em",
              maxWidth: "20em",
            }}
          >
            The shipper’s software with features you need and none of the fluff
            you don’t
          </h1>
          <Tabs
            focusTabOnClick={false}
            selectedIndex={tabIndex}
            defaultIndex={0}
            onSelect={(index) => setTabIndex(index)}
            className={styles.tabsContainer}
          >
            <TabList className={styles.tabButtons}>
              <Tab className={styles.tabButton}>
                <Image src={brokersIcon} />
                <span>
                  <span
                    style={
                      tabIndex == 0
                        ? { color: "#0090FF" }
                        : { color: "#083452" }
                    }
                  >
                    Brokers
                  </span>
                  <span
                    className={tabIndex == 0 ? styles.tabSelectedBorder : ""}
                  />
                </span>
              </Tab>
              <Tab className={styles.tabButton}>
                <Image src={carriersIcon} />
                <span>
                  <span
                    style={
                      tabIndex == 1
                        ? { color: "#0090FF" }
                        : { color: "#083452" }
                    }
                  >
                    Carriers
                  </span>
                  <span
                    className={tabIndex === 1 ? styles.tabSelectedBorder : ""}
                  />
                </span>
              </Tab>
              <Tab className={styles.tabButton}>
                <Image src={shippersIcon} />
                <span>
                  <span
                    style={
                      tabIndex == 2
                        ? { color: "#0090FF" }
                        : { color: "#083452" }
                    }
                  >
                    Shippers
                  </span>
                  <span
                    className={tabIndex === 2 ? styles.tabSelectedBorder : ""}
                  />
                </span>
              </Tab>
            </TabList>
            <hr style={{ borderTop: "1px solid #d4d4d4", width: "100vw" }} />
            <div className={styles.tabPanelContainer}>
              <TabPanel className={styles.tabPanel}>
                <div>
                  <Image src={HeroSampleImg} height={250} />
                </div>
                <div>
                  <div className={styles.tabPanelFeature}>
                    <span className={styles.tabPanelFeatureHeading}>
                      Load AI
                    </span>
                    <span className={styles.tabPanelFeatureDesc}>
                      Adjust rates in real-time based on market conditions and
                      customer demands, maximizing profitability.
                    </span>
                  </div>
                  <div className={styles.tabPanelFeature}>
                    <span className={styles.tabPanelFeatureHeading}>
                      Right Load at Right Price
                    </span>
                    <span className={styles.tabPanelFeatureDesc}>
                      Adjust rates in real-time based on market conditions and
                      customer demands, maximizing profitability.
                    </span>
                  </div>
                  <div className={styles.tabPanelFeature}>
                    <span className={styles.tabPanelFeatureHeading}>
                      Loadboard
                    </span>
                    <span className={styles.tabPanelFeatureDesc}>
                      Adjust rates in real-time based on market conditions and
                      customer demands, maximizing profitability.
                    </span>
                  </div>
                </div>
              </TabPanel>
              <TabPanel className={styles.tabPanel}>
                <h2>Any content 2</h2>
              </TabPanel>
              <TabPanel className={styles.tabPanel}>
                <h2>Any content 3</h2>
              </TabPanel>
            </div>
          </Tabs>
          <div className={styles.heroCtas}>
            <button className={styles.primaryButton}>Request a Demo</button>
            <button style={{color: "#0887E2"}}className={styles.secondaryButton}>Try for free</button>
          </div>
        </section>
        {/* NUMBERS SECTION */}
        <section className={styles.numbersSetion}>
          <div>
            <div className={styles.numberHeading}>250K+</div>
            <div className={styles.numberDesc}>Customers</div>
          </div>
          <div>
            <div className={styles.numberHeading}>90K+</div>
            <div className={styles.numberDesc}>Completed Loads</div>
          </div>
          <div>
            <div className={styles.numberHeading}>92%</div>
            <div className={styles.numberDesc}>reduction in data re-entry</div>
          </div>
          <div>
            <div className={styles.numberHeading}>5+</div>
            <div className={styles.numberDesc}>Years in business</div>
          </div>
        </section>
        {/* BLOGS SECTION */}
        <section className={styles.blogsSection}>
          <h1
            style={{
              color: "#083452",
              textAlign: "center",
              marginTop: "2em",
              fontSize: "2em",
            }}
          >
            Blogs
          </h1>
          <div className={styles.blogsContainer}>
            {/* BLOG CARD 1 */}
            <div className={styles.blogCard}>
              <div className={styles.blogTitle}>
                How Dock Scheduling Benefits the Paper Packaging Industry
              </div>
              <div className={styles.blogDesc}>
                From sourcing raw materials to delivering finished products,
                every aspect of the paper packaging supply chain needs to run on
                time to meet tight deadlines and keep costs in check. It’s a
                competitive business to be in. And, if you’re running a shipping
                operation within the industry, you probably know how managing
                your…
              </div>
              <button className={styles.btnUnderline}>Know more</button>
            </div>
            {/* BLOG CARD 2 */}
            <div className={styles.blogCard}>
              <div className={styles.blogTitle}>
                Behind the Shelves: Dock Scheduling’s Role in Retail Logistics
              </div>
              <div className={styles.blogDesc}>
                Most consumers take the work that goes into getting products
                onto store shelves for granted. As logistics professionals know,
                plenty can go wrong at any point in the retail supply chain — no
                matter how well it’s designed. Things just happen sometimes, but
                that doesn’t mean companies can’t do more to shore up
              </div>
              <button className={styles.btnUnderline}>Know more</button>
            </div>
            {/* BLOG CARD 3 */}
            <div className={styles.blogCard}>
              <div className={styles.blogTitle}>
                Loadsmart’s Look Ahead: An Analysis of Key Freight & Economic
                Indicators to Watch in July 2024
              </div>
              <div className={styles.blogDesc}>
                As usual, in this Monthly Market Update, we will (a) provide a
                brief update/analysis of the full truckload market and (b)
                present a compelling economic analysis to provide a
                macroeconomic view on the state of the freight…
              </div>
              <button className={styles.btnUnderline}>Know more</button>
            </div>
          </div>
          <button style={{ marginTop: "3em" }} className={styles.btnUnderline}>
            Read more articles on our blog
          </button>
        </section>
        {/* CONTACT US SECTION */}
        <section className={styles.contactSection}>
          <div className={styles.contactContainer}>
            <div className={styles.contactContent}>
              <div className={styles.contactHeading}>
                Turn your logistics network from cost center to secret weapon
              </div>
              <div className={styles.contactDesc}>
                Unlock the potential of your supply chain. Get started with an
                assessment and benchmark of your network.
              </div>
            </div>
            <form name="contact" className={styles.contactForm}>
              <div className={styles.inputContainer}>
                <label>Full Name</label>
                <input type="text" placeholder="Type full name"></input>
              </div>
              <div className={styles.inputContainer}>
                <label>Email Address</label>
                <input type="text" placeholder="Type email address"></input>
              </div>
              <div className={styles.inputContainer}>
                <label>Company Name</label>
                <input type="text" placeholder="Type company name"></input>
              </div>
              <button type="submit">Let's Talk</button>
            </form>
          </div>
        </section>
        {/* FOOTER SECTION */}
        <footer className={styles.footer}>
          <div className={styles.footerLogo}>
            <Image src={LogoBlue} height={60} />
          </div>
          <div className={styles.footerCenter}>
            <div className={styles.footerLinksColumn}>
              <div className={styles.footerColumnHeading}>
                Discover Ultraship
              </div>
              <div className={styles.footerLink}>Why Ultraship</div>
              <div className={styles.footerLink}>Partnership</div>
            </div>
            <div className={styles.footerLinksColumn}>
              <div className={styles.footerColumnHeading}>Solutions For</div>
              <div className={styles.footerLink}>Brokers</div>
              <div className={styles.footerLink}>Carriers</div>
              <div className={styles.footerLink}>Shippers</div>
            </div>
            <div className={styles.footerLinksColumn}>
              <div className={styles.footerColumnHeading}>Quick Links</div>
              <div className={styles.footerLink}>News</div>
              <div className={styles.footerLink}>Blogs</div>
              <div className={styles.footerLink}>Contact</div>
              <div className={styles.footerLink}>Help Center</div>
            </div>
          </div>
          <div className={styles.footerSocials}>
            <SocialIcon
              network="facebook"
              bgColor="transparent"
              url="https://react-social-icons.com"
            />
            <SocialIcon
              network="instagram"
              bgColor="transparent"
              url="https://react-social-icons.com"
            />
            <SocialIcon
              network="x"
              bgColor="transparent"
              url="https://react-social-icons.com"
            />
            <SocialIcon
              network="linkedin"
              bgColor="transparent"
              url="https://react-social-icons.com"
            />
          </div>
        </footer>
      </main>
    </>
  );
}
