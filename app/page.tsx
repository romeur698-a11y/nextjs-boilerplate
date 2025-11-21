import Image from 'next/image';
import HomeContainer from '@/HomeContainer';
export default function Home() {
  return (
    <HomeContainer>
      <div className="flex flex-col items-center justify-center space-y-8 text-center px-4 py-16">
        <Image
          src="/logo.svg"
          alt="GameTips Logo"
          width={64}
          height={64}
          priority
          className="w-16 h-16"
        />
        <h1 className="text-6xl font-extrabold text-white leading-tight md:text-8xl">
          Master Your{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
            Favorite Games
          </span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          Descubra vídeos épicos, dicas profissionais e histórias em quadrinhos
          incríveis do mundo dos games
        </p>
        <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <a
            href="#"
            className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
          >
            <span className="mr-2">✨</span> Ver Dicas Premium
          </a>
          <a
            href="#"
            className="flex items-center justify-center px-6 py-3 border border-2 border-purple-600 text-base font-medium rounded-md text-purple-400 hover:bg-gray-800 transition duration-150 ease-in-out"
          >
            <span className="mr-2">▶</span> Assistir Vídeos
          </a>
        </div>
      </div>
    </HomeContainer>
  );
}
