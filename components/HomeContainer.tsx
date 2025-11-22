// components/HomeContainer.tsx
import React from 'react';

// Tipagem React.FC com sintaxe de função de seta correta
export const HomeContainer: React.FC =   ( { children } )  => {
  return 
    <div className='max-w-7xl mx-auto p-4'>{children}</div>
  );
};
