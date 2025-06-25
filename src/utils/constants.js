export const NAVIGATION_ITEMS = [
  { path: '/', label: 'Home', icon: 'mdi-home' },
  { path: '/about', label: 'About', icon: 'mdi-information' },
  { path: '/membership', label: 'Membership', icon: 'mdi-account-group' },
  { path: '/events', label: 'Events', icon: 'mdi-calendar' },
  { path: '/blog', label: 'Blog', icon: 'mdi-post' },
  { path: '/digital-outreach', label: 'Digital Outreach', icon: 'mdi-earth' },
  { path: '/contact', label: 'Contact', icon: 'mdi-email' }
]

// Page titles mapping
export const PAGE_TITLES = {
  '/': 'CVOCA - Chartered & Cost Accountants Association',
  '/about': 'About Us - CVOCA',
  '/membership': 'Membership - CVOCA',
  '/events': 'Events - CVOCA',
  '/blog': 'Blog - CVOCA',
  '/contact': 'Contact Us - CVOCA',
  '/digital-outreach': 'Digital Outreach - CVOCA'
}

// Social links configuration
export const SOCIAL_LINKS = [
  { platform: 'LinkedIn', href: '#', icon: 'mdi-linkedin', external: true },
  { platform: 'Twitter', href: '#', icon: 'mdi-twitter', external: true },
  { platform: 'Facebook', href: '#', icon: 'mdi-facebook', external: true },
  { platform: 'Instagram', href: '#', icon: 'mdi-instagram', external: true }
]

// Common contact info
export const CONTACT_INFO = [
  { type: 'address', icon: 'mdi-map-marker', label: 'Address', value: 'Mumbai, Maharashtra, India' },
  { type: 'phone', icon: 'mdi-phone', label: 'Phone', value: '+91 22 1234 5678' },
  { type: 'email', icon: 'mdi-email', label: 'Email', value: 'info@cvoca.org' },
  { type: 'hours', icon: 'mdi-clock', label: 'Office Hours', value: 'Mon - Fri: 9:00 AM - 6:00 PM' }
]

// Quick links filter helper
export const getQuickLinks = () => NAVIGATION_ITEMS.filter(item => 
  ['/about', '/membership', '/events', '/contact'].includes(item.path)
)

// Common features for home/membership pages
export const CVOCA_FEATURES = [
  {
    title: 'Professional Networking',
    description: 'Connect with fellow professionals and build meaningful industry relationships.',
    icon: 'mdi-account-group',
    color: 'primary',
    link: '/membership'
  },
  {
    title: 'Continuing Education',
    description: 'Access workshops, seminars, and training programs for professional development.',
    icon: 'mdi-school',
    color: 'secondary', 
    link: '/events'
  },
  {
    title: 'Industry Updates',
    description: 'Stay informed about latest regulations, trends, and best practices.',
    icon: 'mdi-newspaper',
    color: 'tertiary',
    link: '/blog'
  },
  {
    title: 'Career Development',
    description: 'Access career resources, job opportunities, and mentorship programs.',
    icon: 'mdi-briefcase',
    color: 'success',
    link: '/about'
  }
]

// Statistics for homepage
export const CVOCA_STATS = [
  { number: '500+', label: 'Members' },
  { number: '50+', label: 'Years' },
  { number: '100+', label: 'Events' }
]

// Membership benefits
export const MEMBERSHIP_BENEFITS = [
  {
    title: 'Professional Networking',
    description: 'Connect with fellow Chartered Accountants and industry professionals.',
    icon: 'mdi-account-group'
  },
  {
    title: 'Continuing Education', 
    description: 'Access to workshops, seminars, and training programs.',
    icon: 'mdi-school'
  },
  {
    title: 'Industry Updates',
    description: 'Stay informed about latest regulations and industry trends.',
    icon: 'mdi-newspaper'
  },
  {
    title: 'Career Opportunities',
    description: 'Access to job postings and career development resources.',
    icon: 'mdi-briefcase'
  },
  {
    title: 'Events & Conferences',
    description: 'Participate in exclusive events and annual conferences.',
    icon: 'mdi-calendar'
  },
  {
    title: 'Resource Library',
    description: 'Access to technical resources, templates, and guidelines.',
    icon: 'mdi-library'
  }
]

// Blog category colors
export const BLOG_CATEGORY_COLORS = {
  'Tax Updates': 'primary',
  'Technology': 'secondary', 
  'Career': 'success',
  'Regulations': 'warning',
  'Events': 'info'
}

// Common hero section component props
export const HERO_DEFAULTS = {
  height: { mobile: '300', desktop: '400' },
  elevation: 0,
  color: 'primary'
} 