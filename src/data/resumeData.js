// Resume Data - Single Source of Truth
// Helper function for asset paths in production
import { getAssetPath } from '../utils/assetPath'

export const resumeData = {
  personal: {
    name: "Dhaval Vibhakar",
    title: "Data Analyst",
    location: "Jersey City, NJ",
    phone: "(551) 312-6290",
    email: "dhaval.vibhakar@yahoo.com",
    linkedin: "https://www.linkedin.com/in/dhavalvibhakar99",
    education: {
      degree: "Masters in Information Science - Data Science",
      school: "Pace University",
      year: 2023
    }
  },

  experience: [
    {
      id: "dual-fuel",
      company: "Dual Fuel Corp",
      logo: getAssetPath("assets/videos/DualFuel_Logo.png"),
      position: "Data Analyst",
      startDate: "2023-07",
      endDate: null, // null means current
      location: "Jersey City, NJ",
      description: "Leading data analytics initiatives for enterprise-level applications",
      achievements: [
        "Developed automated reporting systems that reduced manual analysis time from hours to minutes",
        "Architected data pipelines processing 100,000+ records daily",
        "Implemented robust data validation frameworks ensuring 99.9% accuracy",
        "Created dynamic dashboards serving executive teams with real-time KPIs",
        "Transformed legacy Excel-based workflows into scalable cloud solutions"
      ],
      skills: ["Python", "SQL", "AWS", "Power BI", "ETL", "Data Pipeline", "Dashboard Design", "Data Validation", "Cloud Solutions", "Automated Reporting"]
    },
    {
      id: "pace-career-services",
      company: "Pace University",
      logo: getAssetPath("assets/videos/pace-logo.jpeg"),
      position: "Career Service Operations And Employer Relations Intern",
      startDate: "2022-09",
      endDate: "2022-12",
      location: "New York, NY",
      description: "Supported career services operations through data analysis and reporting for alumni career outcomes",
      achievements: [
        "Compiled and organized extensive alumni data, ensuring data accuracy and relevance to produce meaningful insights for faculty and department use",
        "Leveraged data storytelling to create visual reports that aided in identifying key employment trends, allowing faculty to better support students' career aspirations",
        "Presented findings on alumni career trajectories to department stakeholders, enhancing understanding of post-graduation employment pathways",
        "Collaborated with team members to optimize the data collection and analysis process, streamlining operations within the Career Services department",
        "Assisted in preparing reports and presentations for the School of Performing Arts, contributing to strategic planning for career support initiatives"
      ],
      skills: ["Data Analysis", "Data Visualization", "Excel", "Data Storytelling", "Report Generation", "Stakeholder Presentation", "Data Collection", "Career Analytics"]
    },
    {
      id: "nys-ogs",
      company: "NYS Office of General Services",
      logo: getAssetPath("assets/videos/nys-ogs.png"),
      position: "Data Analyst Intern",
      startDate: "2022-06",
      endDate: "2022-09",
      location: "Albany, NY",
      description: "Worked within the Finance division of BSC, focusing on accounts payable, procurement reporting, and financial data validation to support statewide agencies",
      achievements: [
        "Extracted and validated transactional data using Microsoft Access and Excel, ensuring accurate reconciliation of financial records across multiple sources",
        "Audited over 500 vendor invoices monthly, identifying $20K+ in overcharges, strengthening compliance, and reducing downstream payment errors",
        "Reviewed and corrected Crystal Reports for procurement and reimbursement workflows, ensuring reports matched agency finance requirements",
        "Built interactive Tableau and Power BI dashboards to visualize procurement and SLA metrics, giving managers real-time insights that reduced resolution times by 25%",
        "Documented business requirements and translated findings into clear recommendations during cross-agency meetings, improving collaboration between analysts and finance teams"
      ],
      skills: ["Tableau", "Power BI", "SQL", "Python", "Microsoft Access", "Excel", "Crystal Reports", "Data Validation", "Financial Analysis", "Procurement Analysis", "Dashboard Design", "Data Visualization"]
    },
    {
      id: "insight-business",
      company: "Insight Business Machine",
      logo: getAssetPath("assets/videos/insight-logo.svg"),
      position: "Data Analyst Intern",
      startDate: "2020-03",
      endDate: "2021-04",
      location: "New York, NY",
      description: "Supported business intelligence initiatives and reporting automation",
      achievements: [
        "Created automated email reports using Python reducing manual reporting by 60%",
        "Developed Power BI dashboards for sales and inventory tracking",
        "Performed data quality audits identifying and resolving 500+ data inconsistencies",
        "Assisted in migrating legacy databases to modern SQL-based systems"
      ],
      skills: ["Power BI", "Python", "SQL", "Excel", "Data Quality", "Email Automation", "Database Migration", "Business Intelligence"]
    }
  ],

  projects: [
    {
      id: "cctv-surveillance",
      title: "Integrated CCTV Surveillance System for Public Transportation",
      image: getAssetPath("assets/videos/cctv-surveillance.jpg"),
      category: "Computer Vision & Security",
      description: "Published research on integrated CCTV system for crime detection and object identification in railway stations",
      details: {
        problem: "Mumbai Railway system serving 7.5 million daily commuters faced 2,700+ yearly fatalities and outdated CCTV infrastructure",
        solution: "Developed integrated high-resolution CCTV system with crime detection and missed object identification capabilities for 39 railway stations across 123.78 km network",
        impact: "Enhanced security infrastructure, improved person identification even in low-light conditions, published in International Journal of Engineering and Advanced Technology (IJEAT)"
      },
      technologies: ["Computer Vision", "CCTV Integration", "Object Detection", "Crime Detection", "High-Resolution Imaging", "Low-Light Enhancement"],
      duration: "6 months",
      teamSize: 4,
      links: {
        publication: "https://www.ijeat.org/",
        demo: null
      },
      publicationDate: "2021-02-10",
      journal: "International Journal of Engineering and Advanced Technology (IJEAT)"
    },
    {
      id: "sensor-dashboard",
      title: "Real-Time Sensor Dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop",
      category: "Full Stack Development",
      description: "Flask REST API with real-time sensor data visualization enabling 60% faster equipment diagnostics",
      details: {
        problem: "Manufacturing facility needed real-time monitoring of industrial sensors to prevent costly equipment failures",
        solution: "Built Flask REST API with WebSocket integration feeding live data to React dashboard with automated alerts",
        impact: "60% faster diagnostics, $500K saved in prevented downtime, 99.9% uptime"
      },
      technologies: ["Python", "Flask", "React", "PostgreSQL", "REST API", "WebSocket", "Docker", "AWS EC2"],
      duration: "3 months",
      teamSize: 1,
      links: {
        github: null,
        demo: null
      }
    },
    {
      id: "forecast-engine",
      title: "ARIMA-Keras Forecast Engine",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=225&fit=crop",
      category: "Machine Learning",
      description: "Hybrid time-series forecasting model combining ARIMA and deep learning achieving 15% accuracy improvement",
      details: {
        problem: "Existing forecasting models showed poor accuracy during seasonal demand spikes",
        solution: "Developed hybrid model combining ARIMA for trend detection with Keras LSTM for pattern recognition",
        impact: "15% accuracy boost, $750K inventory optimization, 25% reduction in stockouts"
      },
      technologies: ["Python", "TensorFlow", "Keras", "Pandas", "NumPy", "Scikit-learn", "ARIMA", "Time Series Analysis"],
      duration: "4 months",
      teamSize: 2,
      links: {
        github: null,
        demo: null
      }
    },
    {
      id: "aws-pipeline",
      title: "AWS Lambda Pipeline",
      image: "https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?w=400&h=225&fit=crop",
      category: "Cloud Architecture",
      description: "Serverless ETL pipeline processing 100K+ daily records with zero downtime and auto-scaling",
      details: {
        problem: "Legacy batch processing couldn't scale with growing data volumes causing delays",
        solution: "Architected serverless pipeline using Lambda, S3, and Step Functions with automated error handling",
        impact: "Zero downtime, 80% cost reduction, 5x faster processing, auto-scaling"
      },
      technologies: ["AWS Lambda", "AWS S3", "AWS Step Functions", "Python", "CloudWatch", "IAM", "EventBridge", "ETL"],
      duration: "2 months",
      teamSize: 1,
      links: {
        github: null,
        demo: null
      }
    },
    {
      id: "power-bi-suite",
      title: "Power BI Analytics Suite",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=225&fit=crop",
      category: "Business Intelligence",
      description: "Executive dashboard suite with 50+ KPIs enabling data-driven decisions and 25% faster issue resolution",
      details: {
        problem: "Leadership lacked visibility into real-time business metrics across departments",
        solution: "Designed comprehensive Power BI suite with automated data refresh and drill-down capabilities",
        impact: "25% faster resolution, 100+ hours saved monthly, executive adoption 95%"
      },
      technologies: ["Power BI", "DAX", "SQL Server", "Power Query", "Excel", "Data Modeling", "KPI Design"],
      duration: "3 months",
      teamSize: 1,
      links: {
        github: null,
        demo: null
      }
    }
  ],

  skills: [
    // Programming Languages
    {
      id: "python",
      name: "Python",
      category: "Programming Languages",
      icon: "🐍",
      proficiency: 95,
      yearsOfExperience: 4,
      description: "Advanced proficiency in Python for data analysis, automation, machine learning, and API development. Expert in libraries like Pandas, NumPy, Scikit-learn, TensorFlow, Flask, and data visualization tools.",
      experienceIds: ["dual-fuel", "nys-ogs", "insight-business"],
      projectIds: ["sensor-dashboard", "forecast-engine", "aws-pipeline"],
      certifications: [],
      relatedSkills: ["Pandas", "NumPy", "Flask", "TensorFlow", "Scikit-learn"]
    },
    {
      id: "sql",
      name: "SQL",
      category: "Programming Languages",
      icon: "🗄️",
      proficiency: 90,
      yearsOfExperience: 4,
      description: "Expert in SQL for complex queries, database design, optimization, and data manipulation. Proficient with PostgreSQL, MySQL, SQL Server, and cloud databases.",
      experienceIds: ["dual-fuel", "nys-ogs", "insight-business"],
      projectIds: ["sensor-dashboard", "power-bi-suite"],
      certifications: [],
      relatedSkills: ["PostgreSQL", "Database Design", "Query Optimization", "Data Modeling"]
    },
    {
      id: "r",
      name: "R",
      category: "Programming Languages",
      icon: "📊",
      proficiency: 75,
      yearsOfExperience: 2,
      description: "Proficient in R for statistical analysis, data visualization, and predictive modeling. Experience with ggplot2, dplyr, tidyr, and statistical packages.",
      experienceIds: ["nys-ogs"],
      projectIds: [],
      certifications: [],
      relatedSkills: ["Statistical Analysis", "Data Visualization", "ggplot2"]
    },
    {
      id: "javascript",
      name: "JavaScript",
      category: "Programming Languages",
      icon: "⚡",
      proficiency: 80,
      yearsOfExperience: 3,
      description: "Strong JavaScript skills for building interactive dashboards and web applications. Experience with React, Node.js, and modern ES6+ features.",
      experienceIds: ["dual-fuel"],
      projectIds: ["sensor-dashboard"],
      certifications: [],
      relatedSkills: ["React", "Node.js", "HTML", "CSS"]
    },

    // Cloud & DevOps
    {
      id: "aws",
      name: "AWS",
      category: "Cloud & DevOps",
      icon: "☁️",
      proficiency: 90,
      yearsOfExperience: 3,
      description: "AWS Certified Solutions Architect with expertise in Lambda, S3, EC2, RDS, Step Functions, CloudWatch, and IAM. Designed serverless architectures and cloud-native data pipelines.",
      experienceIds: ["dual-fuel"],
      projectIds: ["aws-pipeline", "sensor-dashboard"],
      certifications: ["AWS Solutions Architect - Associate"],
      relatedSkills: ["Lambda", "S3", "EC2", "CloudWatch", "Serverless"]
    },
    {
      id: "docker",
      name: "Docker",
      category: "Cloud & DevOps",
      icon: "🐳",
      proficiency: 80,
      yearsOfExperience: 2,
      description: "Containerization expert using Docker for reproducible environments and deployment. Experience with Docker Compose and container orchestration.",
      experienceIds: ["dual-fuel"],
      projectIds: ["sensor-dashboard"],
      certifications: [],
      relatedSkills: ["AWS", "CI/CD", "DevOps"]
    },
    {
      id: "git",
      name: "Git",
      category: "Cloud & DevOps",
      icon: "🔀",
      proficiency: 85,
      yearsOfExperience: 4,
      description: "Version control expert using Git and GitHub for collaboration, branching strategies, and code management.",
      experienceIds: ["dual-fuel", "nys-ogs", "insight-business"],
      projectIds: ["sensor-dashboard", "forecast-engine", "aws-pipeline", "power-bi-suite"],
      certifications: [],
      relatedSkills: ["GitHub", "Version Control", "Collaboration"]
    },

    // Data Visualization
    {
      id: "power-bi",
      name: "Power BI",
      category: "Data Visualization",
      icon: "📈",
      proficiency: 95,
      yearsOfExperience: 4,
      description: "Expert in Power BI for creating executive dashboards, KPI tracking, and interactive reports. Advanced DAX knowledge and data modeling expertise.",
      experienceIds: ["dual-fuel", "insight-business"],
      projectIds: ["power-bi-suite"],
      certifications: [],
      relatedSkills: ["DAX", "Data Modeling", "Dashboard Design", "KPI Design"]
    },
    {
      id: "tableau",
      name: "Tableau",
      category: "Data Visualization",
      icon: "📊",
      proficiency: 90,
      yearsOfExperience: 3,
      description: "Advanced Tableau skills for building interactive dashboards and data stories. Experience with calculated fields, parameters, and complex visualizations.",
      experienceIds: ["nys-ogs", "dual-fuel"],
      projectIds: [],
      certifications: [],
      relatedSkills: ["Data Visualization", "Dashboard Design", "Storytelling"]
    },
    {
      id: "qlik",
      name: "Qlik Sense",
      category: "Data Visualization",
      icon: "🎯",
      proficiency: 75,
      yearsOfExperience: 2,
      description: "Proficient in Qlik Sense for associative data analysis and dashboard development.",
      experienceIds: ["dual-fuel"],
      projectIds: [],
      certifications: [],
      relatedSkills: ["Data Visualization", "Dashboard Design"]
    },

    // Machine Learning & Analytics
    {
      id: "machine-learning",
      name: "Machine Learning",
      category: "Machine Learning & Analytics",
      icon: "🤖",
      proficiency: 85,
      yearsOfExperience: 3,
      description: "Strong machine learning background with experience in supervised/unsupervised learning, time series forecasting, and deep learning. Built production ML models with measurable business impact.",
      experienceIds: ["dual-fuel"],
      projectIds: ["forecast-engine"],
      certifications: [],
      relatedSkills: ["Python", "TensorFlow", "Scikit-learn", "Keras", "Neural Networks"]
    },
    {
      id: "statistical-analysis",
      name: "Statistical Analysis",
      category: "Machine Learning & Analytics",
      icon: "📉",
      proficiency: 90,
      yearsOfExperience: 4,
      description: "Expert in statistical methods including hypothesis testing, regression analysis, A/B testing, and experimental design.",
      experienceIds: ["dual-fuel", "nys-ogs"],
      projectIds: ["forecast-engine"],
      certifications: [],
      relatedSkills: ["R", "Python", "Data Science", "Hypothesis Testing"]
    },
    {
      id: "time-series",
      name: "Time Series Analysis",
      category: "Machine Learning & Analytics",
      icon: "⏱️",
      proficiency: 85,
      yearsOfExperience: 2,
      description: "Specialized in time series forecasting using ARIMA, SARIMA, and deep learning approaches for demand prediction and trend analysis.",
      experienceIds: ["dual-fuel"],
      projectIds: ["forecast-engine"],
      certifications: [],
      relatedSkills: ["ARIMA", "Python", "Machine Learning", "Forecasting"]
    },

    // Data Engineering
    {
      id: "etl",
      name: "ETL/Data Pipeline",
      category: "Data Engineering",
      icon: "🔄",
      proficiency: 90,
      yearsOfExperience: 3,
      description: "Expert in designing and implementing ETL pipelines for large-scale data processing. Experience with batch and real-time data ingestion.",
      experienceIds: ["dual-fuel", "insight-business"],
      projectIds: ["aws-pipeline", "sensor-dashboard"],
      certifications: [],
      relatedSkills: ["Python", "AWS", "SQL", "Data Validation"]
    },
    {
      id: "data-modeling",
      name: "Data Modeling",
      category: "Data Engineering",
      icon: "🏗️",
      proficiency: 85,
      yearsOfExperience: 3,
      description: "Strong data modeling skills for dimensional modeling, star schemas, and normalized database design.",
      experienceIds: ["dual-fuel", "insight-business"],
      projectIds: ["power-bi-suite"],
      certifications: [],
      relatedSkills: ["SQL", "Database Design", "Power BI", "ER Diagrams"]
    },
    {
      id: "data-cleaning",
      name: "Data Cleaning",
      category: "Data Engineering",
      icon: "🧹",
      proficiency: 95,
      yearsOfExperience: 4,
      description: "Expert in data cleaning, validation, and quality assurance. Developed automated frameworks ensuring 99.9% data accuracy.",
      experienceIds: ["dual-fuel", "nys-ogs", "insight-business"],
      projectIds: ["aws-pipeline"],
      certifications: [],
      relatedSkills: ["Python", "Pandas", "SQL", "Data Validation"]
    },

    // Frameworks & Libraries
    {
      id: "pandas",
      name: "Pandas",
      category: "Frameworks & Libraries",
      icon: "🐼",
      proficiency: 95,
      yearsOfExperience: 4,
      description: "Expert in Pandas for data manipulation, cleaning, and analysis. Daily use for ETL processes and exploratory data analysis.",
      experienceIds: ["dual-fuel", "nys-ogs", "insight-business"],
      projectIds: ["sensor-dashboard", "forecast-engine", "aws-pipeline"],
      certifications: [],
      relatedSkills: ["Python", "NumPy", "Data Cleaning"]
    },
    {
      id: "numpy",
      name: "NumPy",
      category: "Frameworks & Libraries",
      icon: "🔢",
      proficiency: 90,
      yearsOfExperience: 4,
      description: "Advanced NumPy skills for numerical computing, array operations, and mathematical functions.",
      experienceIds: ["dual-fuel", "nys-ogs"],
      projectIds: ["forecast-engine"],
      certifications: [],
      relatedSkills: ["Python", "Pandas", "Machine Learning"]
    },
    {
      id: "scikit-learn",
      name: "Scikit-learn",
      category: "Frameworks & Libraries",
      icon: "🔬",
      proficiency: 85,
      yearsOfExperience: 3,
      description: "Proficient in Scikit-learn for machine learning model development, evaluation, and feature engineering.",
      experienceIds: ["dual-fuel"],
      projectIds: ["forecast-engine"],
      certifications: [],
      relatedSkills: ["Python", "Machine Learning", "Data Science"]
    },
    {
      id: "tensorflow",
      name: "TensorFlow/Keras",
      category: "Frameworks & Libraries",
      icon: "🧠",
      proficiency: 80,
      yearsOfExperience: 2,
      description: "Experience building deep learning models using TensorFlow and Keras for time series forecasting and predictive analytics.",
      experienceIds: ["dual-fuel"],
      projectIds: ["forecast-engine"],
      certifications: [],
      relatedSkills: ["Python", "Machine Learning", "Neural Networks"]
    },
    {
      id: "flask",
      name: "Flask",
      category: "Frameworks & Libraries",
      icon: "🌶️",
      proficiency: 85,
      yearsOfExperience: 2,
      description: "Strong Flask skills for building REST APIs and microservices. Experience with API design, authentication, and deployment.",
      experienceIds: ["dual-fuel"],
      projectIds: ["sensor-dashboard"],
      certifications: [],
      relatedSkills: ["Python", "REST API", "Backend Development"]
    },

    // Business Tools
    {
      id: "excel",
      name: "Excel",
      category: "Business Tools",
      icon: "📑",
      proficiency: 90,
      yearsOfExperience: 5,
      description: "Advanced Excel user with expertise in VBA, pivot tables, complex formulas, and financial modeling.",
      experienceIds: ["dual-fuel", "nys-ogs", "insight-business"],
      projectIds: [],
      certifications: [],
      relatedSkills: ["VBA", "Data Analysis", "Pivot Tables"]
    },
    {
      id: "jira",
      name: "JIRA",
      category: "Business Tools",
      icon: "📋",
      proficiency: 80,
      yearsOfExperience: 3,
      description: "Proficient in JIRA for project management, sprint planning, and agile workflows.",
      experienceIds: ["dual-fuel"],
      projectIds: [],
      certifications: [],
      relatedSkills: ["Agile", "Project Management", "Scrum"]
    }
  ],

  certifications: [
    {
      id: "aws-saa",
      name: "AWS Solutions Architect - Associate",
      issuer: "Amazon Web Services",
      date: "2023",
      image: getAssetPath("assets/videos/aws.jpeg"),
      skillIds: ["aws"],
      credentialUrl: null
    }
  ]
}

// Helper functions to calculate data from resume
export const calculateYearsOfExperience = (startDate, endDate = null) => {
  const start = new Date(startDate)
  const end = endDate ? new Date(endDate) : new Date()
  const years = (end - start) / (1000 * 60 * 60 * 24 * 365.25)
  return Math.max(0, parseFloat(years.toFixed(1)))
}

export const getSkillExperience = (skillId) => {
  const skill = resumeData.skills.find(s => s.id === skillId)
  if (!skill) return null

  return {
    ...skill,
    experiences: skill.experienceIds.map(expId =>
      resumeData.experience.find(e => e.id === expId)
    ).filter(Boolean),
    projects: skill.projectIds.map(projId =>
      resumeData.projects.find(p => p.id === projId)
    ).filter(Boolean),
    certifications: resumeData.certifications.filter(cert =>
      cert.skillIds.includes(skillId)
    )
  }
}

export const getSkillsByCategory = () => {
  const grouped = {}
  resumeData.skills.forEach(skill => {
    if (!grouped[skill.category]) {
      grouped[skill.category] = []
    }
    grouped[skill.category].push(skill)
  })
  return grouped
}

export const getAllSkillsWithDetails = () => {
  return resumeData.skills.map(skill => getSkillExperience(skill.id))
}

// Certifications & Achievements Data
export const certifications = [
  {
    id: "aws-solutions-architect",
    title: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    issueDate: "2025-08-10",
    credentialId: "6c0f111b3e3646a19c377d1f1ab4d2a0",
    badgeUrl: "https://www.credly.com/badges/7f11a602-6448-4fe1-ba5a-cc0e606f4a0d",
    logo: getAssetPath("assets/videos/aws.jpeg"),
    type: "Professional Certification",
    skills: ["AWS Architecture", "Cloud Computing", "EC2", "S3", "RDS", "Lambda", "CloudFormation", "VPC", "IAM", "Cloud Security"],
    story: {
      challenge: "As cloud adoption accelerated across enterprises, I recognized the critical need to master AWS architecture patterns and best practices. The journey to becoming AWS certified required deep understanding of 10+ core services, security frameworks, and cost optimization strategies.",
      approach: "I immersed myself in hands-on labs, designed multi-tier architectures, and studied real-world case studies. The preparation involved architecting solutions for scalability, high availability, and fault tolerance across various business scenarios.",
      impact: "Earning this certification validated my ability to design and deploy scalable, highly available systems on AWS. It equipped me with the knowledge to architect enterprise-level cloud solutions, optimize costs, and implement security best practices that directly benefited my professional projects.",
      keyProjects: [
        {
          name: "SCA 003 Architecture Design",
          description: "Designed and implemented a secure, scalable AWS architecture for enterprise application deployment",
          technologies: ["AWS EC2", "VPC", "S3", "RDS", "CloudWatch"]
        }
      ]
    }
  },
  {
    id: "research-cctv-surveillance",
    title: "Published Research: Integrated CCTV Surveillance System",
    issuer: "International Journal of Engineering and Advanced Technology (IJEAT)",
    issueDate: "2021-02-28",
    publicationUrl: "/assets/files_ppt/08 - [23, 41, 56] - Published Paper - (Integrated CCTV Surveillance System for Public Transportation) (1).pdf",
    doi: "10.35940/ijeat.C2157.0210321",
    logo: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=225&fit=crop",
    type: "Research Publication",
    coAuthors: ["Suraj Jha", "Aditya Kamble", "Saurabh Suman"],
    skills: ["Computer Vision", "Facial Recognition", "IoT Security", "Video Analytics", "Network Architecture", "Python", "Machine Learning", "Research & Development"],
    story: {
      challenge: "Mumbai's railway system faced a critical security crisis - 2,700 commuters killed annually, rampant theft causing Rs.69 crore in losses, and outdated CCTV systems vulnerable to tampering. The existing surveillance infrastructure was ineffective, with 90% of devices lacking secure authentication and minimal real-time threat detection capabilities.",
      approach: "We designed an integrated IP-based surveillance system featuring high-resolution cameras with built-in SD card failover, facial recognition servers, and advanced video analytics. The architecture leveraged ONVIF protocols, MPLS networks, and machine learning algorithms to detect suspicious activities in real-time. Our system addressed both hardware vulnerabilities and software security flaws prevalent in traditional CCTV deployments.",
      impact: "The research was published in IJEAT (ISSN: 2249-8958) and presented a comprehensive solution for public transportation security. Our work demonstrated 99.9% uptime through network failover protection, real-time facial recognition matching against criminal databases, and automated alert systems for authorities. This project not only contributed to academic knowledge but also provided a practical blueprint for enhancing railway security infrastructure.",
      keyProjects: [
        {
          name: "Facial Recognition Server",
          description: "Developed AI-powered facial recognition system that cross-references live footage against criminal databases with real-time alerting",
          technologies: ["Python", "OpenCV", "Deep Learning", "Computer Vision"]
        },
        {
          name: "Network Failover Architecture",
          description: "Engineered resilient surveillance network with SD card backup ensuring zero data loss during network failures",
          technologies: ["ONVIF Protocol", "MPLS", "NVR Systems", "Network Architecture"]
        },
        {
          name: "Video Analytics Engine",
          description: "Built intelligent video analysis system for anomaly detection, crowd monitoring, and suspicious activity identification",
          technologies: ["Machine Learning", "Video Processing", "Pattern Recognition"]
        }
      ]
    }
  },
  {
    id: "ibm-data-science",
    title: "IBM Data Science Professional Certificate",
    issuer: "IBM",
    issueDate: "2023-03-28",
    credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/certificate/xyz",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop",
    type: "Professional Certificate Program",
    skills: ["Python", "SQL", "Machine Learning", "Data Visualization", "Jupyter Notebooks", "Pandas", "NumPy", "Scikit-learn", "Data Analysis", "Statistical Analysis"],
    story: {
      challenge: "The data science landscape demanded proficiency across the entire analytics pipeline - from data collection and cleaning to machine learning and visualization. I needed to master Python programming, SQL databases, statistical analysis, and ML algorithms to transform raw data into actionable insights.",
      approach: "Through IBM's comprehensive 9-course program, I built hands-on expertise in every phase of data science. I worked with real-world datasets, created predictive models, and developed interactive dashboards. The curriculum covered data wrangling with Pandas, statistical analysis, supervised and unsupervised learning, and cloud-based data science tools.",
      impact: "This certification transformed my approach to data problems. I completed multiple hands-on projects including the SpaceX launch success prediction capstone, where I applied the full data science methodology - from data collection via APIs to building classification models achieving 85%+ accuracy. The skills gained directly enhanced my ability to deliver data-driven insights in professional settings.",
      keyProjects: [
        {
          name: "SpaceX Launch Success Prediction",
          description: "Capstone project analyzing SpaceX launch data to predict Falcon 9 first stage landing success using classification algorithms",
          technologies: ["Python", "Pandas", "Scikit-learn", "SQL", "Plotly Dash", "Machine Learning"]
        },
        {
          name: "Real Estate Price Analysis",
          description: "Built regression models to predict housing prices using feature engineering and model optimization techniques",
          technologies: ["Python", "Linear Regression", "Data Visualization", "Statistical Analysis"]
        }
      ]
    }
  },
  {
    id: "pwc-power-bi",
    title: "Power BI Virtual Case Experience",
    issuer: "PwC Switzerland",
    issueDate: "2023-05-12",
    credentialUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/xyz",
    logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=225&fit=crop",
    type: "Virtual Experience Program",
    skills: ["Power BI", "Data Visualization", "DAX", "Business Intelligence", "KPI Design", "Dashboard Development", "Client Communication"],
    story: {
      challenge: "PwC presented real-world business scenarios requiring immediate insights from complex datasets. The challenge involved analyzing call center trends, customer retention patterns, and diversity & inclusion metrics - each demanding different analytical approaches and visualization strategies to communicate findings to executive stakeholders.",
      approach: "I tackled four comprehensive tasks mirroring actual PwC consulting projects. Starting with call center trend analysis, I built interactive Power BI dashboards tracking KPIs like average handle time and customer satisfaction. For customer retention, I developed predictive visualizations identifying at-risk customers. The diversity & inclusion analysis required sensitive data handling and impactful visual storytelling to drive organizational change.",
      impact: "Completed the full consulting lifecycle - from understanding client requirements to delivering executive-ready dashboards. My Power BI solutions provided actionable insights: identified peak call volumes requiring staffing adjustments, highlighted customer segments with 40% churn risk, and visualized D&I metrics that informed hiring strategies. This experience sharpened my ability to translate business questions into data solutions.",
      keyProjects: [
        {
          name: "Call Centre Performance Dashboard",
          description: "Created comprehensive Power BI dashboard tracking call center KPIs, agent performance metrics, and customer satisfaction trends",
          technologies: ["Power BI", "DAX", "Data Modeling", "KPI Visualization"]
        },
        {
          name: "Customer Retention Analytics",
          description: "Developed predictive retention dashboard identifying churn patterns and at-risk customer segments with actionable recommendations",
          technologies: ["Power BI", "Customer Analytics", "Churn Analysis", "Segmentation"]
        },
        {
          name: "Diversity & Inclusion Insights",
          description: "Built executive dashboard visualizing workforce diversity metrics, hiring trends, and gender representation across organizational levels",
          technologies: ["Power BI", "HR Analytics", "Data Storytelling", "Executive Reporting"]
        }
      ]
    }
  },
  {
    id: "accenture-data-analytics",
    title: "Data Analytics and Visualization Virtual Experience",
    issuer: "Accenture North America",
    issueDate: "2022-11-11",
    credentialUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/abc",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop",
    type: "Virtual Experience Program",
    skills: ["Data Analytics", "Data Cleaning", "Data Modeling", "Excel", "Data Visualization", "Client Presentation", "Business Storytelling"],
    story: {
      challenge: "Accenture's Social Buzz client needed urgent help analyzing massive content datasets to understand user engagement patterns. With thousands of content pieces across multiple categories, the challenge was to clean messy data, identify trending content types, and deliver insights that would shape their IPO strategy.",
      approach: "I followed Accenture's proven consulting methodology across four phases: Project Understanding (defining scope and requirements), Data Cleaning & Modeling (handling missing values, merging datasets, creating unified schemas), Data Visualization (designing compelling charts and insights), and Client Presentation (translating technical findings into business recommendations).",
      impact: "Successfully identified the top 5 content categories driving 80% of user engagement, revealing unexpected trends that informed Social Buzz's content strategy. My analysis uncovered that 'Animal' and 'Science' content outperformed expectations, while traditional assumptions about popular categories proved incorrect. The final presentation delivered actionable recommendations that influenced their pre-IPO content optimization strategy.",
      keyProjects: [
        {
          name: "Social Buzz Content Analysis",
          description: "Analyzed 25,000+ content reactions across 16 categories to identify top-performing content types and user engagement patterns",
          technologies: ["Excel", "Data Cleaning", "Statistical Analysis", "Data Visualization"]
        },
        {
          name: "Client Strategy Presentation",
          description: "Developed executive presentation with data-driven recommendations for content optimization and IPO readiness",
          technologies: ["PowerPoint", "Data Storytelling", "Business Communication", "Insight Generation"]
        }
      ]
    }
  }
]

export const getCertificationById = (id) => {
  return certifications.find(cert => cert.id === id)
}