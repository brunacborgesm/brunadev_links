import { GitHub, Instagram, LanguageOutlined, LinkedIn } from '@mui/icons-material';
import Link from 'next/link'
import React from 'react'

type LinkCardProps = {
  href: string;
  title: string;
  variant?: 'instagram' | 'linkedin' | 'github' | 'website';

}

export const LinkCard: React.FC<LinkCardProps> = ({ href, title, variant }) => {

  const renderIcon = () => {
    switch (variant) {
      case 'instagram':
        return <Instagram />;
      case 'linkedin':
        return <LinkedIn />;
      case 'github':
        return <GitHub />;
      case 'website':
        return <LanguageOutlined />;
      default: 
      return null;
    }
  }
  return (
    <Link href={href} target='_blank' rel='noopener noreferrer'>
      <div className='text-sm text-indigo-950 text-center bg-slate-100/70 px-3 py-5 rounded-2xl backdrop-blur flex justify-center items-center gap-2 mb-5'>
        {renderIcon()}
        {title}
      </div>
    </Link>
  )
}
