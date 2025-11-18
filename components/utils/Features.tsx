import { Route, Home, CalendarCheck } from 'lucide-react';

const features = [
  {   
    title: 'Smarter Itineraries', 
    description: 'Beautifully tailored travel plans shaped around your interests and style.', 
    iconShape: Route,
    iconBgColor: 'bg-blue-100',
    iconColor: 'text-blue-500' 
  },
  { 
    title: 'Curated Stays', 
    description: 'Handpicked accommodations that match your preferences and elevate your experience.', 
    iconShape: Home,
    iconBgColor: 'bg-green-100',
    iconColor: 'text-green-500' 
  },
  { 
    title: 'Effortless Planning', 
    description: 'Experience seamless, stress-free travel with everything organized beautifully.', 
    iconShape: CalendarCheck,
    iconBgColor: 'bg-purple-100',
    iconColor: 'text-purple-500' 
  },
];

export { features };
