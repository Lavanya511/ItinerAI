import {Brain, Image as ImageIcon, MessageSquare, Sparkles, Video} from 'lucide-react';

const features = [

    {   
        title: 'Custom Itineraries', 
        description: 'Get personalized travel plans tailored to your preferences and interests.', 
        iconShape: Brain,
        iconBgColor: 'bg-blue-100',
        iconColor: 'text-blue-400' 
    },
    { 
        title: 'Hidden Gems', 
        description: 'Discover off-the-beaten-path attractions and local favorites.', 
        iconShape: Sparkles,
        iconBgColor: 'bg-green-100',
        iconColor: 'text-green-400' 
    },
    { 
        title: 'Seamless Experience', 
        description: 'Enjoy a hassle-free travel experience with our comprehensive planning tools.', 
        iconShape: MessageSquare,
        iconBgColor: 'bg-purple-100',
        iconColor: 'text-purple-400' 
    },
]

export { features };