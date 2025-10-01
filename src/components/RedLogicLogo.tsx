import React from 'react';
import companyLogo from '@/assets/company-logo.jpg';

interface RedLogicLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const RedLogicLogo: React.FC<RedLogicLogoProps> = ({ 
  className = '', 
  size = 'xl'
}) => {
  const logoSizeClasses = {
    sm: 'h-8 w-auto',
    md: 'h-12 w-auto', 
    lg: 'h-16 w-auto',
    xl: 'h-20 w-auto'
  };

  return (
    <div className={`flex items-center ${className}`}>
      {/* Logo Image Only */}
      <img 
        src={companyLogo}
        alt="RedLogic Consulting"
        className={`${logoSizeClasses[size]} flex-shrink-0 object-contain`}
      />
    </div>
  );
};

export default RedLogicLogo;
