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
  location: "Europe/London", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [
    // Add your languages here
    // optional: Leave the array empty if you don't want to display languages
    // Example of entry for language: you can customize the flag icon to your needs.
    {
      name: "English",
      level: "fluent",
      flagIcon: <GB width={15} height={10} aria-label="GB" />,
    },
  ],
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
        <Text variant="body-default-l">I&apos;m a developer</Text>
      </Column>
      <br />
      <Text variant="body-default-m">I develop apps and make people's life easy</Text>
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
    description: <>{person.firstName} is a professional...</>,
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Company Name",
        timeframe: "2023 - Present",
        role: "Your Current Role",
        responsibilities: [
          {
            type: "Key Achievements",
            tasks: [
              "Describe your key achievements and accomplishments in this role.",
              "Highlight specific metrics, awards, or recognitions you've received.",
              "Mention any leadership or mentoring responsibilities you've taken on.",
            ],
          },
          {
            type: "Tasks",
            tasks: [
              "List your main responsibilities and daily tasks.",
              "Include technical skills you've applied or developed.",
              "Mention any tools, technologies, or methodologies you've used.",
            ],
          },
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          { src: "/images/projects/project-01/cover-01.jpg", alt: "cover", width: 12, height: 9 },
        ],
      },
      {
        company: "Previous Company",
        timeframe: "2020 - 2023",
        role: "Previous Role",
        responsibilities: [
          {
            type: "Key Achievements",
            tasks: [
              "Describe significant accomplishments from this position.",
              "Include any projects you've led or major contributions you've made.",
              "Mention any process improvements or innovations you've implemented.",
            ],
          },
          {
            type: "Tasks",
            tasks: [
              "Detail your responsibilities in this role.",
              "Highlight technical expertise and problem-solving skills demonstrated.",
              "Include any cross-functional collaboration or team leadership experience.",
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
        name: "Your University Name",
        description: "Your degree and field of study.",
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Your Primary Skill Area",
        description: (
          <>
            Describe your expertise and experience in this technical area. Highlight key
            technologies, tools, and achievements.
          </>
        ),
        tags: [
          // Add your technical skills here
          // Available icons can be found at ./icons.ts. More can be added on-demand.
          {
            name: "Technology 1",
            icon: "icon-name",
          },
          {
            name: "Technology 2",
            icon: "icon-name",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Your Secondary Skill Area",
        description: (
          <>
            Describe another area of technical expertise. Include relevant experience, tools used,
            and any notable accomplishments.
          </>
        ),
        tags: [
          // Add your technical skills here
          {
            name: "Technology 3",
            icon: "icon-name",
          },
          {
            name: "Technology 4",
            icon: "icon-name",
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
  label: "Gallery",
  title: "Your Gallery",
  description: `A photo collection by ${person.name}`,
  images: [], // Will be loaded dynamically in the component
};

export { person, social, newsletter, home, about, blog, work, gallery };
