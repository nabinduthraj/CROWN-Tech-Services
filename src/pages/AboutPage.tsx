import React from 'react';
import { Crown, Users, Code, Star, Award, Mail, Github, Linkedin } from 'lucide-react';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Amair',
      role: 'UI/UX Designer & Frontend Lead',
      responsibilities: [
        'Landing Page (index.html) design and development',
        'Product Page (product.html) with browsing experience',
        'Overall UI design and user experience',
        'Responsive design implementation',
        'Visual design and layout consistency'
      ],
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'UI/UX Design'],
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      email: 'amair@crowntech.com'
    },
    {
      name: 'Bikram',
      role: 'Security & Authentication Lead',
      responsibilities: [
        'Registration and Login Pages (register.html)',
        'Form validation and security enhancements',
        'User authentication system implementation',
        'Client-side security measures',
        'Password encryption and validation'
      ],
      skills: ['JavaScript', 'Security', 'Authentication', 'Form Validation'],
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      email: 'bikram@crowntech.com'
    },
    {
      name: 'Kewal',
      role: 'Cart & Checkout Specialist',
      responsibilities: [
        'Cart Page (cart.html) development',
        'Checkout Page (checkout.html) implementation',
        'Session management for cart data',
        'Payment process simulation',
        'Order management system'
      ],
      skills: ['React Context', 'State Management', 'Session Storage', 'Payment Systems'],
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      email: 'kewal@crowntech.com'
    },
    {
      name: 'Nabin',
      role: 'Admin & Backend Lead',
      responsibilities: [
        'Admin Page (admin.html) development',
        'CRUD functionality for products',
        'Product management system',
        'Backend logic implementation',
        'Database architecture planning'
      ],
      skills: ['React', 'CRUD Operations', 'Admin Panels', 'Backend Logic'],
      avatar: 'https://scontent.fsyd11-1.fna.fbcdn.net/v/t39.30808-6/318215645_5767342013325284_8391362800783920612_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=UZA3u0YkGGwQ7kNvwH2-Gff&_nc_oc=Adl_IdnwYVeAiMw-dGtU8qPzey_NzBooPcIlVMPuRiHtkf8vlGFmEZZ6DmaUYuwS0U0&_nc_zt=23&_nc_ht=scontent.fsyd11-1.fna&_nc_gid=7uoU_9TSqLS3r5RoUgc6Tg&oh=00_AfVMyYR-jWVTsujXkoegiokdZhrIiEr8o3Gygtlj7ANEoQ&oe=68B38A88',
      email: 'nabin@crowntech.com'
    }
  ];

  const projectFeatures = [
    {
      icon: <Crown className="h-8 w-8" />,
      title: 'Premium E-commerce Experience',
      description: 'Fully functional online store with modern design and intuitive navigation'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'User Management',
      description: 'Secure registration, login system with user dashboard and profile management'
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Modern Technology Stack',
      description: 'Built with React, TypeScript, Tailwind CSS, and Context API for state management'
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: 'Rich Features',
      description: 'Product filtering, search, cart management, checkout process, and admin panel'
    }
  ];

  const technologies = [
    'React 18',
    'TypeScript',
    'Tailwind CSS',
    'React Router DOM',
    'Context API',
    'Local Storage',
    'Lucide React Icons',
    'Responsive Design',
    'Dark/Light Theme',
    'Form Validation'
  ];

  const challenges = [
    {
      challenge: 'State Management',
      solution: 'Implemented React Context API for global state management across cart, products, authentication, and theme.'
    },
    {
      challenge: 'Data Persistence',
      solution: 'Used localStorage to persist user data, cart items, and product information without backend database.'
    },
    {
      challenge: 'Security Implementation',
      solution: 'Implemented client-side authentication with form validation and secure password handling practices.'
    },
    {
      challenge: 'Responsive Design',
      solution: 'Created mobile-first responsive design using Tailwind CSS with comprehensive breakpoint management.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Crown className="h-16 w-16 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            CROWN Tech Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive e-commerce platform developed as a group project, showcasing modern web development 
            practices and collaborative software engineering.
          </p>
        </div>

        {/* Project Overview */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Project Overview
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                CROWN Tech Services is a complete e-commerce solution developed by our team of four dedicated developers. 
                This project demonstrates our ability to create a fully functional online store with modern web technologies, 
                focusing on user experience, security, and scalable architecture.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                The platform features a comprehensive product catalog, user authentication, shopping cart functionality, 
                checkout process, admin dashboard, and responsive design. Built without a traditional backend database, 
                it showcases innovative client-side state management and data persistence techniques.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectFeatures.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg text-blue-600 dark:text-blue-400 mr-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Members */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-6">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {member.role}
                    </p>
                    <div className="flex items-center mt-2 space-x-2">
                      <Mail className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {member.email}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Key Responsibilities:
                  </h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    {member.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Skills & Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Technology Stack
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We used cutting-edge technologies and best practices to ensure a robust, scalable, and maintainable codebase.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 text-center"
                >
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges and Solutions */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Challenges & Solutions
            </h2>
            <div className="space-y-6">
              {challenges.map((item, index) => (
                <div key={index} className="border-l-4 border-blue-600 dark:border-blue-400 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Challenge: {item.challenge}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong>Solution:</strong> {item.solution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Highlights */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">Project Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Award className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
                <h3 className="text-xl font-semibold mb-2">100% Responsive</h3>
                <p className="text-blue-100">
                  Works flawlessly on all devices from mobile to desktop
                </p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
                <h3 className="text-xl font-semibold mb-2">User-Centric Design</h3>
                <p className="text-blue-100">
                  Intuitive interface designed with user experience as priority
                </p>
              </div>
              <div className="text-center">
                <Code className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
                <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
                <p className="text-blue-100">
                  Well-structured, maintainable code following best practices
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* References and Assets */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              References & Assets
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Image Sources
                </h3>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Product images: <a href="https://pexels.com" className="text-blue-600 dark:text-blue-400 hover:underline">Pexels.com</a></li>
                  <li>• Hero images: <a href="https://pexels.com" className="text-blue-600 dark:text-blue-400 hover:underline">Pexels.com</a></li>
                  <li>• Profile avatars: <a href="https://pexels.com" className="text-blue-600 dark:text-blue-400 hover:underline">Pexels.com</a></li>
                  <li>• All images are royalty-free and used under Pexels License</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  External Libraries
                </h3>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Icons: <a href="https://lucide.dev" className="text-blue-600 dark:text-blue-400 hover:underline">Lucide React</a></li>
                  <li>• CSS Framework: <a href="https://tailwindcss.com" className="text-blue-600 dark:text-blue-400 hover:underline">Tailwind CSS</a></li>
                  <li>• Font: System fonts (Inter, system-ui)</li>
                  <li>• Build Tool: <a href="https://vitejs.dev" className="text-blue-600 dark:text-blue-400 hover:underline">Vite</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="text-center">
          <div className="bg-gray-900 text-white rounded-lg shadow-lg p-8">
            <Crown className="h-12 w-12 mx-auto mb-4 text-yellow-400" />
            <h2 className="text-2xl font-bold mb-2">CROWN Tech Services</h2>
            <p className="text-gray-300 mb-4">
              Developed with ❤️ by Amair, Bikram, Kewal, and Nabin
            </p>
            <p className="text-sm text-gray-400">
              © 2024 CROWN Tech Services. This is a student project for educational purposes.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
