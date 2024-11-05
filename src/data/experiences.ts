import { LucideIcon } from 'lucide-react';

export interface Metric {
  icon: string;
  value: string;
  label: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  image: string;
  metrics: Metric[];
  tags: string[];
  achievements: string[];
}

export interface Award {
  title: string;
  organization: string;
  year: string;
  description: string;
  icon: 'trophy' | 'award' | 'target';
  impact: string[];
}

export const experiences: Experience[] = [
  {
    title: "Leading AI-Driven HRMS Innovation",
    company: "HROne",
    period: "Sep 2023 - Present",
    description: "Leading the development of HRMS solutions, including ONE AI, focusing on enhancing user experience through intelligent automation and personalized insights.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
    metrics: [
      { icon: 'zap', value: "30%", label: "Reduction in Manual Tasks" },
      { icon: 'users', value: "25%", label: "Increased Engagement" },
      { icon: 'trending-up', value: "15%", label: "Reduced Churn" }
    ],
    achievements: [
      "Launched ONE AI - an AI-powered HR assistant",
      "Improved user engagement by 40% through UX optimizations",
      "Led a team of 15 product managers and designers"
    ],
    tags: ["AI/ML", "HRMS", "Product Leadership"]
  },
  {
    title: "Revolutionizing Retail Finance",
    company: "Paytail",
    period: "Jul 2022 - Sep 2023",
    description: "Led the development of innovative EMI payment solutions, focusing on merchant onboarding and fraud prevention.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
    metrics: [
      { icon: 'trending-up', value: "40%", label: "User Adoption" },
      { icon: 'dollar-sign', value: "$5M", label: "Annual Revenue" },
      { icon: 'shield', value: "20%", label: "Cost Reduction" }
    ],
    achievements: [
      "Developed EMI solution used by 100+ merchants",
      "Increased customer conversion rate by 35%",
      "Streamlined merchant onboarding process"
    ],
    tags: ["Fintech", "EMI Solutions", "Fraud Prevention"]
  },
  {
    title: "Process Mining Innovation",
    company: "Soroco",
    period: "Sep 2021 - Mar 2022",
    description: "Spearheaded the development of process mining and RPA solutions for enterprise clients.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    metrics: [
      { icon: 'bar-chart', value: "25%", label: "Market Share Growth" },
      { icon: 'clock', value: "15%", label: "Dev Cycle Reduction" },
      { icon: 'users', value: "90%", label: "Client Satisfaction" }
    ],
    achievements: [
      "Led end-to-end development of RPA solutions",
      "Increased market share by 25% within one quarter",
      "Reduced development cycles by 15%"
    ],
    tags: ["RPA", "Process Mining", "Enterprise Solutions"]
  },
  {
    title: "Renewable Energy Innovation",
    company: "Mahindra TEQO",
    period: "Jun 2020 - Aug 2021",
    description: "Led the development of Solarpulse platform for remote monitoring and billing in renewable energy.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
    metrics: [
      { icon: 'trending-up', value: "30%", label: "Efficiency Increase" },
      { icon: 'dollar-sign', value: "$2M", label: "Revenue Growth" },
      { icon: 'clock', value: "20%", label: "Downtime Reduction" }
    ],
    achievements: [
      "Developed Solarpulse SCADA platform",
      "Achieved 90% technology adoption rate",
      "Reduced operational costs by 15%"
    ],
    tags: ["CleanTech", "SCADA", "Remote Monitoring"]
  },
  {
    title: "Digital Logistics Platform",
    company: "LogisticMart",
    period: "Apr 2017 - Aug 2019",
    description: "Developed innovative payment and billing systems for logistics operations.",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&q=80",
    metrics: [
      { icon: 'trending-up', value: "20%", label: "Transaction Growth" },
      { icon: 'users', value: "30%", label: "User Engagement" },
      { icon: 'shield', value: "25%", label: "Error Reduction" }
    ],
    achievements: [
      "Increased transaction volumes by 20%",
      "Improved user engagement by 30%",
      "Implemented robust payment systems"
    ],
    tags: ["Logistics", "Payments", "Digital Transformation"]
  },
  {
    title: "Business Management Software",
    company: "HCS Business Solutions",
    period: "Aug 2015 - May 2017",
    description: "Co-founded and scaled a startup providing comprehensive business management solutions for SMEs.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    metrics: [
      { icon: 'briefcase', value: "500+", label: "Active Clients" },
      { icon: 'code', value: "40%", label: "Development Speed" },
      { icon: 'users', value: "95%", label: "Client Retention" }
    ],
    achievements: [
      "Secured over 500 clients in first year",
      "Implemented agile methodologies",
      "Reduced time-to-market by 40%"
    ],
    tags: ["SaaS", "SME Solutions", "Entrepreneurship"]
  }
];

export const awards: Award[] = [
  {
    title: "Product King Award",
    organization: "Paytail",
    year: "2023",
    description: "Recognized for exceptional product leadership and innovation in fintech solutions",
    icon: "trophy",
    impact: [
      "Led product innovation increasing market share by 30%",
      "Developed AI-driven fraud detection system",
      "Improved user experience leading to 40% growth"
    ]
  },
  {
    title: "Mahindra Kaizen Award",
    organization: "Mahindra Group",
    year: "2021",
    description: "Awarded for developing TEQO NOC, saving ₹3.14Cr in investment costs",
    icon: "award",
    impact: [
      "Automated billing and monitoring systems",
      "Reduced operational costs by 15%",
      "Increased operational efficiency by 30%"
    ]
  },
  {
    title: "1st Rank - GrowthX Demo Day",
    organization: "GrowthX",
    year: "2022",
    description: "Created growth strategy for Zomato, increasing revenue from ₹6000Cr to ₹8300Cr",
    icon: "target",
    impact: [
      "Developed comprehensive growth strategy",
      "Increased revenue by ₹2300Cr",
      "Enhanced user acquisition and retention"
    ]
  }
];