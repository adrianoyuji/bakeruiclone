import Navigation, { DropdownType } from "interfaces/Navigation";

const navigationList: Navigation[] = [
  {
    id: "home",
    title: "HOME",
    dropdownType: DropdownType.SIMPLE,
    items: [
      { name: "Bagel", path: "" },
      { name: "Cupcake", path: "" },
      { name: "Croissant", path: "", featured: true },
      { name: "Pretzel", path: "" },
      { name: "Strudel", path: "", featured: true },
      { name: "Baguette", path: "", featured: true },
      { name: "Canapé", path: "" },
      { name: "Crouton", path: "", featured: true },
      { name: "Muffin", path: "" },
      { name: "Breadstick", path: "" },
      { name: "Crumpet", path: "" },
      { name: "Cannoli", path: "" },
      { name: "Landing", path: "" },
    ],
  },
  {
    id: "pages",
    title: "PAGES",
    dropdownType: DropdownType.SIMPLE,
    items: [
      { name: "About Me", path: "" },
      { name: "The Menu", path: "", featured: true },
      { name: "Our Team", path: "" },
      { name: "Our Services", path: "" },
      { name: "What We Offer", path: "" },
      { name: "Pricing Plans", path: "" },
      { name: "Contact Us", path: "" },
      { name: "Leave Us a Note", path: "" },
      { name: "404 Error Page", path: "" },
    ],
  },
  {
    id: "portfolio",
    title: "PORTFOLIO",
    dropdownType: DropdownType.SIMPLE,
    items: [
      {
        name: "Standard",
        path: "",
        items: [
          { name: "Three Columns", path: "" },
          { name: "Four Columns", path: "" },
          { name: "Three Columns Wide", path: "" },
          { name: "Four Columns Wide", path: "" },
        ],
      },
      {
        name: "Gallery",
        path: "",
        items: [
          { name: "Two Columns", path: "" },
          { name: "Three Columns", path: "" },
          { name: "Four Columns", path: "" },
          { name: "Four Columns Wide", path: "" },
          { name: "Five Columns Wide", path: "" },
        ],
      },
      {
        name: "Masonry",
        path: "",
        items: [
          { name: "Five Columns", path: "" },
          { name: "Five Columns Wide", path: "" },
        ],
      },
      {
        name: "Portfolio Single",
        path: "",
        items: [
          { name: "Small Images", path: "" },
          { name: "Smaller Slider", path: "" },
          { name: "Big Images", path: "" },
          { name: "Big Slider", path: "" },
          { name: "Gallery", path: "" },
          { name: "Masonry", path: "" },
        ],
      },
    ],
  },
  {
    id: "blog",
    title: "BLOG",
    dropdownType: DropdownType.SIMPLE,
    items: [
      {
        name: "Standard",
        path: "",
        items: [
          { name: "Left Sidebar", path: "" },
          { name: "Right Sidebar", path: "" },
          { name: "No Sidebar", path: "" },
        ],
      },
      {
        name: "Masonry",
        path: "",
        items: [
          { name: "With Sidebabr", path: "" },
          { name: "Three Columns Grid", path: "" },
          { name: "Four Columns Wide", path: "" },
        ],
      },
      {
        name: "Single Post",
        path: "",
        items: [
          { name: "Standard", path: "" },
          { name: "Gallery", path: "" },
          { name: "Quote", path: "" },
          { name: "Link", path: "" },
          { name: "Audio", path: "" },
          { name: "Video", path: "" },
        ],
      },
    ],
  },
  {
    id: "shop",
    title: "SHOP",
    dropdownType: DropdownType.SIMPLE,
    items: [
      {
        name: "Shop List",
        path: "",
      },
      {
        name: "Single Product",
        path: "",
      },
      {
        name: "Shop Pages",
        path: "",
        items: [
          { name: "My Account", path: "" },
          { name: "Shop", path: "" },
          { name: "Checkout", path: "" },
        ],
      },
      {
        name: "Shop Layouts",
        path: "",
        items: [
          { name: "Three Columns", path: "" },
          { name: "Four Columns", path: "" },
          { name: "Four Columns Wide", path: "" },
          { name: "Five Columns Wide", path: "" },
        ],
      },
    ],
  },
  {
    id: "elements",
    title: "ELEMENTS",
    dropdownType: DropdownType.WIDE,
    items: [
      {
        name: "CLASSIC",
        path: "",
        items: [
          { name: "Buttons", path: "" },
          { name: "Contact Form", path: "" },
          { name: "Call to Action", path: "" },
          { name: "Parallax", path: "" },
          { name: "Tabs", path: "" },
          { name: "Accordions", path: "" },
        ],
      },
      {
        name: "PRESENTATIONAL",
        path: "",
        items: [
          { name: "Testimonials", path: "" },
          { name: "Team", path: "" },
          { name: "Blog Post", path: "" },
          { name: "Interactive Banner", path: "" },
          { name: "Portfolio List", path: "" },
          { name: "Full Screen Sections", path: "" },
        ],
      },
      {
        name: "INFOGRAPHIC",
        path: "",
        items: [
          { name: "Progress Bar", path: "" },
          { name: "Pricing Table", path: "" },
          { name: "Countdown", path: "" },
          { name: "Pricing List", path: "" },
          { name: "Product List", path: "" },
          { name: "Google Maps", path: "" },
        ],
      },
      {
        name: "TYPOGRAPHY",
        path: "",
        items: [
          { name: "Typography", path: "" },
          { name: "Lists", path: "" },
          { name: "Dividers", path: "" },
          { name: "Image With Text", path: "" },
        ],
      },
    ],
  },
];

export default navigationList;
