import React from 'react'

type AgentIconProps = {
    size?: 'small' | 'medium' | 'large';
    color?: 'green' | 'blue' | 'purple';
}

function AgentIcon({ size = 'medium', color = 'blue' }: AgentIconProps) {

    const sizeClasses = {
        small: 'w-4 h-4',
        medium: 'w-12 h-12',
        large: 'w-16 h-16',
    };

    const colorClasses = {
        green: 'bg-green-500 shadow-green-500/50',
        blue: 'bg-blue-500 shadow-blue-500/50',
        purple: 'bg-purple-500 shadow-purple-500/50',
    };  
    
    return <div className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-pulse`}/>

}

export default AgentIcon