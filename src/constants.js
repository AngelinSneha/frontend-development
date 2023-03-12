import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import HandshakeIcon from "@mui/icons-material/Handshake";
import CategoryIcon from "@mui/icons-material/Category";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import InfoIcon from "@mui/icons-material/Info";
import PaymentsIcon from "@mui/icons-material/Payments";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const companyInformation =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

const sideNavValues = [
  { name: "Dashboard", icon: <DashboardIcon /> },
  { name: "Orders", icon: <ShoppingCartIcon /> },
  { name: "Team Members", icon: <PeopleIcon /> },
  { name: "Partners", icon: <HandshakeIcon /> },
  { name: "Product Listings", icon: <CategoryIcon /> },
  { name: "Award & Honors", icon: <EmojiEventsIcon /> },
  { name: "About Us", icon: <InfoIcon /> },
  { name: "Payment Info", icon: <PaymentsIcon /> },
];
const contactInfo = [
  {
    team: "Sales Team",
    email: ["salesteam@br.in", "salesteam2@br.in"],
    phone: ["+91 8765434701", "8765434702"],
  },
  {
    team: "Marketing Team",
    email: ["salesteam@br.in", "salesteam2@br.in"],
    phone: ["+91 8765434701", "8765434702"],
  },
  {
    team: "HR Team",
    email: ["salesteam@br.in", "salesteam2@br.in"],
    phone: ["+91 8765434701", "8765434702"],
  },
  {
    team: "Engineering Team",
    email: ["salesteam@br.in", "salesteam2@br.in"],
    phone: ["+91 8765434701", "8765434702"],
  },
  {
    team: "Operations Team",
    email: ["salesteam@br.in", "salesteam2@br.in"],
    phone: ["+91 8765434701", "8765434702"],
  },
  {
    team: "DevOps Team",
    email: ["salesteam@br.in", "salesteam2@br.in"],
    phone: ["+91 8765434701", "8765434702"],
  },
];

const getTabs = [
  "Info",
  "FAQ",
  "Complaints and Feedback",
  "Privacy Policy",
  "Terms & Conditions",
];

const constant = {
  companyInformation,
  sideNavValues,
  contactInfo,
  getTabs,
};

export default constant;
