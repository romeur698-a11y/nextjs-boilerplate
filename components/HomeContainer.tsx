import React, { PropsWithChildren } from 'react'; // <--- Importar PropsWithChildren

// Opção 1: Usando PropsWithChildren para tipar as props
// Esta é a abordagem mais recomendada hoje.
export const HomeContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className='max-w-7xl mx-auto p-4'>{children}</div>
  );
};
