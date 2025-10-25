import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Column, Text, Icon } from "@once-ui-system/core";
import { GB, BR, ES, NL } from "country-flag-icons/react/3x2";

const person: Person = {
  firstName: "YourFirstName",
  lastName: "YourLastName",
  name: "YourFirstName YourLastName",
  role: "Your Role - A brief description of what you do.",
  avatar: "/images/avatar.jpg",
  email: "your.email@example.com",
  location: "Europe/Amsterdam", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [
    {
      name: "English",
      level: "fluent",
      flagIcon: <GB width={15} height={10} aria-label="GB" />,
    },
    {
      name: "Portuguese",
      level: "fluent",
      flagIcon: <BR width={15} height={10} aria-label="BR" />,
    },
    {
      name: "Spanish",
      level: "advanced",
      flagIcon: <ES width={15} height={10} aria-label="ES" />,
    },
    {
      name: "Dutch",
      level: "intermediate",
      flagIcon: <NL width={15} height={10} aria-label="NL" />,
    },
  ], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}&apos;s newsletter</>,
  description: <>Occasionally posting about life, projects and ideas, or whatever I feel like it</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/yourusername",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/yourprofile/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Website`,
  description: `${person.name}'s Website: think skills, projects, and life...`,
  headline: <>Your Headline Here</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Featured work</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          coming soon!
        </Text>
      </Row>
    ),
    href: "/work/building-my-portfolio",
  },
  subline: (
    <>
      <Column gap="8" center>
        <Text variant="body-default-l">I&apos;m Andre, I help teams succeed</Text>
        <Text variant="body-default-xs">(and I&apos;m known for being easy to work with)</Text>
      </Column>
      <br />
      <Text variant="body-default-m">
        When outside of working hours, I immerse myself in personal projects, gaming{" "}
        <Icon name="gamepad" />, and my beloved furrballs.
        <Icon name="cat" />
      </Text>
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About - ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  // controls whether to display the table of contents in the About page. Set subItems to true to display sub titles.
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/your-calendar",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        {person.firstName} is a Netherlands-based IT generalist who is focused on driving real
        change and helping companies and teams succeed. They leverage their skills in devops,
        design, and programming to solve complex challenges and deliver effective solutions that
        drive innovation.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Atlassian",
        timeframe: "2024 - 2025",
        role: "Tech Lead - Senior Support Engineer",
        responsibilities: [
          {
            type: "Key Achievements",
            tasks: [
              'Received the Atlassian "Extreme Impact" award for significant contributions to change management during the adoption of a new product, while maintaining top KPIs.',
              "Mentored Atlassian Support Engineers, increasing ticket intake efficiency by over 50% and enhancing KPIs through personalized mentorship strategies.",
              "Significantly reduced initial customer contact times by improving ticket routing accuracy, resulting in a 60% reduction in internal misrouting.",
              "Established an internal recurrent team awards program to boost morale and encourage positive behaviors. The diverse, non-metric-focused categories highlighted team members excelling in areas such as peer support, covering for colleagues on leave, and fostering a positive team environment. This process was later adopted by other teams globally.",
              "Revised and automated manual processes, saving hundreds of hours of manual work.",
            ],
          },
          {
            type: "Tasks",
            tasks: [
              "Led the development of processes to enhance internal practices, standardizing tasks into clear and actionable deliverables.",
              "Acted as the EMEA focal point for Atlassian Platform, guiding the adoption of new practices and changes while consistently conducting impact assessments on processes, operations, and customer experiences.",
              "Managed high-friction customer interactions by identifying appropriate escalation channels and delivering tailored solutions.",
              "Developed and customized management reports using Databricks and Google Sheets, creating dashboards to support data-driven decision-making. Ensured accurate capacity planning to maintain optimal support coverage.",
              "Created and maintained several applications and scripts to support the team in achieving efficiency KPIs.",
            ],
          },
        ],

        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/about/atlassian-example-doc.png",
            alt: "Third-party login documentation",
            width: 12,
            height: 9,
          },
        ],
      },
      {
        company: "Atlassian",
        timeframe: "2022 - 2024",
        role: "Senior Support Engineer I / II",
        responsibilities: [
          {
            type: "Key Achievements",
            tasks: [
              "Developed custom scripts to overcome product limitations, automating user management tasks and reducing processing time from several hours to just a few minutes.",
              "Assisted enterprise-level customers (10,000+ users) in migrating their user base to Atlassian Cloud and integrating their products with identity providers (IDPs).",
              "Mentored and provided technical guidance to a team of over 40 support engineers, helping skill development and maintaining high technical standards.",
            ],
          },
          {
            type: "Tasks",
            tasks: [
              "Assist customers in resolving complex SAML and SCIM integration issues.",
              "Handle high-priority and technically complex customer cases escalated internally by other support engineers.",
              "Serve as Major Incident Manager (MIM), coordinating between development and support teams during critical platform incidents.",
              "Design and implement custom scripts (Python, SQL, Bash, JavaScript) to help customers work around product limitations.",
              "Create and maintain technical documentation, addressing content gaps and producing new resources for both internal teams and external users.",
              "Translate customer feedback into actionable insights by submitting feature requests and bug reports to development teams.",
              "Conduct technical interviews for potential new hires and lead onboarding efforts to ensure they reach the required proficiency for handling customer interactions and providing effective user support.",
            ],
          },
        ],
        images: [
          {
            src: "/images/about/atlassian-saml-config.png",
            alt: "SAML Documentation",
            width: 12,
            height: 9,
          },
          {
            src: "/images/about/atlassian-scim-config.png",
            alt: "SCIM Documentation",
            width: 12,
            height: 9,
          },
        ],
      },
      {
        company: "SAP",
        timeframe: "Jan 2021 - Dec 2021",
        role: "Java Software Developer",
        responsibilities: [
          {
            type: "Tasks",
            tasks: [
              "Developed new features and implemented bug fixes for the legacy desktop Java application helping data parsing.",
              "Revised legacy UI issues in Javascript.",
              "Helped with app structure mapping.",
              "Facilitated effective communication between support and development teams, enhancing the process of knowledge sharing between developers and support staff.",
              "Improved the team's onboarding process to bridge the gap between desired timelines and expected skills, reducing delays and uncertainties for new hires.",
            ],
          },
        ],

        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
      {
        company: "Dell EMC",
        timeframe: "2017 - 2021",
        role: "Advisor Application Management - Site Reliability Engineer (SRE)",
        responsibilities: [
          {
            type: "Key Achievements",
            tasks: [
              "Architected and launched a patch scheduling platform (Python and React) to orchestrate the patching of 200+ physical Windows servers, cutting patch-planning time from a full week to just 2–3 hours and reducing operational risk.",
              "Led and executed production server patching and dry-runs, ensuring zero downtime and smooth deployment of critical updates.",
              "Directed a small development team dedicated to automation, reducing manual intervention in critical server patching processes and improving reliability.",
            ],
          },
          {
            type: "Tasks",
            tasks: [
              "Monitored and optimized Dell Store server infrastructure (Windows/Linux) using Splunk, Kibana, and proprietary tools to proactively detect issues, prevent major incidents, and minimize service disruptions.",
              "Planned and executed large-scale infrastructure resilience tests, identifying potential points of failure and validating disaster recovery strategies.",
              "Hired, mentored, and conducted one-on-one sessions with team members, fostering a culture of continuous improvement and operational excellence.",
              "Served as Major Incident Manager (MIM) for high-severity incidents with strict SLAs, coordinating multiple teams to drive rapid resolution and minimize business impact.",
              "Produced and delivered customer-facing Root Cause Analysis (RCA) reports for complex technical issues, ensuring transparency and actionable follow-up.",
              "Established and promoted a knowledge-sharing culture, improving documentation practices and accelerating onboarding and troubleshooting across teams.",
              "Acted as primary liaison for new feature implementations and defect remediation, aligning application changes with reliability and performance standards.",
            ],
          },
        ],

        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Pontificia Universidade Catolica do Rio Grande do Sul - PUCRS",
        description: "Bachelor's degree in Computer Science.",
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Software Developement, Automation & Scripting",
        description: (
          <>
            Extensive experience in writing code, scripts, and automation tools. Created reporting
            views, interfaces, APIs, CLIs, and chatbots.
          </>
        ),
        tags: [
          {
            name: "Java",
            icon: "java",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "SQLAchemy",
            icon: "sqlalchemy",
          },
          {
            name: "Pandas",
            icon: "pandas",
          },
          {
            name: "Flask",
            icon: "flask",
          },
          {
            name: "React",
            icon: "react",
          },
          {
            name: "Bash",
            icon: "bash",
          },
          {
            name: "PowerShell",
            icon: "powershell",
          },
          {
            name: "C#",
            icon: "csharp",
          },
          {
            name: "SQL",
            icon: "sql",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "DevOps - Observability & Cloud",
        description: (
          <>
            Experience in observability and monitoring. Profficient in setting up, using and
            tweaking monitoring tools and dashboards to ensure system performance and reliability.
            Analyzed logs and system metrics to diagnose and prevent problems.
          </>
        ),
        tags: [
          {
            name: "Splunk",
            icon: "splunk",
          },
          {
            name: "Grafana",
            icon: "grafana",
          },
          {
            name: "Kibana",
            icon: "kibana",
          },
          {
            name: "Databricks",
            icon: "databricks",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Support, Solutions, CSM & ITSM",
        description: (
          <>
            Worked as support engineer for SMB and Enterprise customer segments. Experience in
            building custom solutions to resolve complex solutions and address technical gaps.
            Excellent project management and stakeholder communication skills.
          </>
        ),
        tags: [
          {
            name: "Project Management",
            icon: "document",
          },
          {
            name: "Stakeholder / Customer Handling",
            icon: "users",
          },
          {
            name: "Presentations / Solution Demos",
            icon: "presentation",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about life, and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Creations – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Cat Fine Arts",
  title: "Your Gallery",
  description: `A photo collection by ${person.name}`,
  images: [], // Will be loaded dynamically in the component
};

export { person, social, newsletter, home, about, blog, work, gallery };
