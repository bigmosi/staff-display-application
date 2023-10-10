import React from 'react';
import 'globals.css';
import Nav from '@/components/Nav';

interface LayoutProps {
  metadata: {
    title: string;
    description: string;
  };
  children: React.ReactNode;
}

function Layout({ metadata, children }: LayoutProps) {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
}

// Provide a default value for metadata
Layout.defaultProps = {
  metadata: {
    title: 'Default Title',
    description: 'Default Description',
  },
};

export default Layout;
