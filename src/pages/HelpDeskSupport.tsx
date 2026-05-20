import { motion } from "framer-motion";
import { Headphones, Check, Building2, Stethoscope, Scale, HardHat, Fuel, Briefcase, Printer, Server, Network, Cloud, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const industries = [
  { icon: Briefcase, label: "MSPs" },
  { icon: Stethoscope, label: "Dentist Offices" },
  { icon: Building2, label: "Tax Firms" },
  { icon: Scale, label: "Law Firms" },
  { icon: HardHat, label: "Construction Sites" },
  { icon: Briefcase, label: "Small Businesses" },
  { icon: Fuel, label: "Gas Stations" },
];

const platforms = [
  "Office 365", "QuickBooks", "Argus", "Wolters Kluwer", "Marshall & Swift",
  "Bluebeam", "Google Suite", "Canon Printer Support", "HP Printer", "Xerox Printer",
  