export default {
  header: {
    menu: {
      home: "Home",
      about: "About",
      services: "Services",
      // blog: "Blog",
      contact: "Contact",
    },
    getInTouch: "Get in touch",
  },
  hero: {
    heading: "JoyPal Logistics",
    title: "Affordable Logistics That Simplify Your Life",
    subtitle:
      "JoyPal provides professional logistics services in Toronto, committed to optimizing your lifestyle through affordable, eco-friendly, and socially responsible solutions.",
    ctaButton: "Order Now",
    howWeWork: "How we work?",
  },
  about: {
    title: "About Us",
    heading: "Logistics with Heart",
    subtitle: "JoyPal - Your Local Expert Supporting Every Side of Life",
    content: [
      {
        sectionTitle: "Company Overview",
        text: "JoyPal is a logistics company committed to providing services with a high sense of social responsibility. We deliver more than packages—we deliver care. Our focus is convenience for our customers, while also supporting the environment and community welfare.",
      },
      {
        sectionTitle: "Service Scope",
        text: "From international shipping and local commercial delivery to second-hand furniture and appliance recycling, and free logistics for charitable donations — we offer a seamless, end-to-end logistics solution built for real-life needs.",
      },
      {
        sectionTitle: "Corporate Vision",
        text: "To build a smart, efficient, and eco-friendly citywide logistics network that truly enhances quality of life.",
      },
      {
        sectionTitle: "Team & Partners",
        text: "Our experienced local operations team, coupled with a robust partner network, ensures reliable, efficient, and trusted logistics services tailored to every client’s needs.",
      },
    ],
  },
  services: {
    title: "Comprehensive Logistics to Improve Everyday Life",
    subtitle: "From express delivery to eco-recycling, JoyPal has you covered",
    content: [
      {
        sectionTitle: "Personal Courier Services",
        text: "Door-to-door delivery, flexible scheduling, and full tracking for a worry-free experience tailored to individuals.",
        img: "/assets/images/service1.png",
      },
      {
        sectionTitle: "Business Logistics",
        text: "Tailored solutions for enterprise clients, including bulk shipping and large freight transportation to reduce cost and boost efficiency.",
        img: "/assets/images/service2.png",
      },
      {
        sectionTitle: "Eco-Friendly Recycling Services",
        text: "Furniture and appliance recycling with home pickup - promoting sustainability and reuse.",
        img: "/assets/images/service3.png",
      },
      {
        sectionTitle: "Charity Delivery Support",
        text: "Free logistics support for donation deliveries - spreading love through logistics.",
        img: "/assets/images/service4.png",
      },
    ],
  },
  features: {
    title: "Our Advantages",
    subtitle: "Why Choose JoyPal?",
    description:
      "Wide coverage, diverse service offerings, and a green philosophy - we are not just a logistics company, we're a lifestyle partner.",
    list: [
      "Citywide Toronto coverage",
      "Eco and charity services included",
      "Custom enterprise logistics solutions",
      "Support for both home and community logistics needs",
    ],
    image: {
      src: "/assets/images/demo-fancy/section-image-8.png",
      alt: "Features Image",
    },
  },
  testimonials: {
    title: "Testimonials",
    subtitle: "What Our Customers Say",
    description:
      "People love our efficient, compassionate, and socially responsible logistics service. Here's what they're saying:",
    list: [
      {
        text: "JoyPal isn't just fast - they care about the environment and the community.",
        author: "J. Thompson",
        position: "Customer",
        imgSrc: "/assets/images/testimonial1.jpg",
        altText: "J. Thompson",
      },
      {
        text: "I choose JoyPal not only for delivery speed, but for their heartfelt charity logistics support.",
        author: "E. Carter",
        position: "Business",
        imgSrc: "/assets/images/testimonial2.jpg",
        altText: "E. Carter",
      },
      {
        text: "Efficient and warm - exactly what I look for in a local delivery partner.",
        author: "M. Reed",
        position: "Customer",
        imgSrc: "/assets/images/testimonial3.jpg",
        altText: "M. Reed",
      },
      {
        text: "I always feel valued with JoyPal - that's rare in logistics.",
        author: "S. Williams",
        position: "Customer",
        imgSrc: "/assets/images/testimonial4.jpg",
        altText: "S. Williams",
      },
    ],
    facts: [
      { title: "500+", description: "Deliveries per day" },
      { title: "99%", description: "On-time performance" },
    ],
    brands: [
      {
        img: "/assets/images/brand1.png",
        brandAltText: "JoyPal Media",
      },
    ],
  },
  blogs: {
    title: "Our Blog",
    subtitle: "Discover our mission and social impact in action.",
    linkText: "Our blog",
    posts: [
      {
        id: "1",
        delay: "0.1s",
        imgSrc: "/assets/images/demo-fancy/blog/post-prev-1.jpg",
        imgAlt: "Blog Post 1",
        title: "Behind the Scenes of Smart Logistics",
        text: "Explore how JoyPal delivers eco-conscious, affordable solutions for urban residents.",
        authorImgSrc: "/assets/images/author1.jpg",
        authorImgAlt: "Author 1",
        author: "Mr. Zhang",
        date: "Jan 15, 2025",
      },
      {
        id: "2",
        delay: "0.2s",
        imgSrc: "/assets/images/demo-fancy/blog/post-prev-2.jpg",
        imgAlt: "Blog Post 2",
        title: "How We Deliver Donations for Free",
        text: "See how JoyPal partners with charities to provide free delivery services for community donations.",
        authorImgSrc: "/assets/images/author2.jpg",
        authorImgAlt: "Author 2",
        author: "Ms. Li",
        date: "Feb 10, 2025",
      },
      {
        id: "3",
        delay: "0.3s",
        imgSrc: "/assets/images/demo-fancy/blog/post-prev-3.jpg",
        imgAlt: "Blog Post 3",
        title: "Green Logistics in Action",
        text: "Learn how JoyPal implements its eco-friendly logistics model.",
        authorImgSrc: "/assets/images/author3.jpg",
        authorImgAlt: "Author 3",
        author: "Mr. Wang",
        date: "Mar 05, 2025",
      },
    ],
  },
  newsletter: {
    title: "Newsletter",
    subtitle: "Stay informed with our weekly updates.",
    description:
      "Get insights on sustainable logistics and examples of our charity partnerships—plus trends shaping the industry.",
    placeholder: "Enter your email",
    subscribeButton: "Subscribe",
    formTip:
      "By submitting this form, you agree to our Terms & Conditions and Privacy Policy.",
    image: {
      src: "/assets/images/demo-fancy/section-image-8.png",
      alt: "Image Description",
    },
  },
  contact: {
    header: {
      title: "Contact Us",
      subtitle: "We welcome partners who share our values.",
    },
    items: [
      {
        iconClass: "mi-map",
        title: "Address",
        text: "Massachusetts Ln, Markham, ON",
        link: {
          url: "https://maps.google.com",
          target: "_blank",
          rel: "noopener",
          text: "View on map",
        },
      },
      {
        iconClass: "mi-mobile",
        title: "Phone",
        text: "+1 647 687 6986",
        link: { url: "tel:+16476876986", target: "", rel: "", text: "Call us" },
      },
      {
        iconClass: "mi-email",
        title: "Email",
        text: "Joypallogistics@gmail.com",
        link: {
          url: "mailto:Joypallogistics@gmail.com",
          target: "",
          rel: "",
          text: "Send email",
        },
      },
      {
        iconClass: "mi-clock",
        title: "Working Hours",
        text: "Mon-Sun 9AM - 6PM",
        link: { url: "#about", target: "", rel: "", text: "Learn more" },
      },
    ],
    form: {
      formTitle: "Get in Touch",
      nameLabel: "Name",
      namePlaceholder: "Enter your name",
      emailLabel: "Email",
      emailPlaceholder: "Enter your email",
      messageLabel: "Message",
      messagePlaceholder: "Enter your message",
      submitButton: "Send Message",
      formTip:
        "All fields are required. By submitting this form, you agree to our Terms & Conditions and Privacy Policy.",
    },
  },
  footer: {
    paragraph:
      "JoyPal Logistics is a responsible and community-minded courier company based in Toronto. We offer efficient, convenient, and sustainable delivery solutions that improve everyday life.",
    phoneLabel: "T.",
    emailLabel: "E.",
    widget: {
      company: "Company",
      social: "Social Media",
      legal: "Legal & Press",
    },
    navCompany: [
      { href: "#about", text: "About" },
      { href: "#services", text: "Services" },
      // { href: "#blog", text: "Blog" },
      { href: "#contact", text: "Contact" },
    ],
    navLegal: [
      { href: "#", text: "Privacy Policy" },
      { href: "#", text: "Terms & Conditions" },
    ],
    copyright: "© JoyPal Logistics",
    basedIn: "Based in Toronto, Canada.",
    backToTop: "Scroll to top",
  },
};
