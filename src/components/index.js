//Importing and exporting a single file 
// Bcoz if you import all the components in the navbar it would look messy so the trick here is to import into inde.js file and export it as a single file.

import Navbar from "./Navbar";
import Billing from "./Billing";
import CardDeal from "./CardDeal";
import Business from "./Business";
import Clients from "./Clients";
import CTA from "./CTA";
import Stats from "./Stats";
import Footer from "./Footer";
import Testimonials from "./Testimonials";
import Hero from "./Hero";

export {
  Navbar,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Hero,
};