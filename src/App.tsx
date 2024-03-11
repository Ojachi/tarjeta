import React from 'react';
import sung from './assets/sung.jpg'

interface IdentityCardProps {
  name: string;
  nationality: string;
  issueDate: string;
  authority: string;
}

const IdentityCard: React.FC<IdentityCardProps> = ({
  name,
  nationality,
  issueDate,
  authority,
}) => {
  return (
    <div className="bg-gradient-to-r from-blue-200 via-purple-300 to-pink-300 rounded-lg shadow-lg p-5 w-96 h-42 flex">
      <div className="w-32 h-32 overflow-hidden rounded-md mr-6 ">
          <img className="w-full h-full object-cover" src={sung} alt="Sung Jin Woo" />
      </div>
      <div className="flex-grow flex flex-col justify-center text-sm">
          <div className="mb-1">
            <p className="font-semibold">Nombre:</p>
            <p className="ml-0,5">{name}</p>
          </div>
          <div className="mb-1">
            <p className="font-semibold">Nacionalidad:</p>
            <p className="ml-0,5">{nationality}</p>
          </div>
          <div className="mb-1">
            <p className="font-semibold">Nacimiento:</p>
            <p className="ml-0,5">{issueDate}</p>
          </div>
          <div>
            <p className="font-semibold">Titulos:</p>
            <p className="ml-0,5">{authority}</p>
          </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const identityCardData = {
    name: 'Sung Jin Woo',
    nationality: 'Korea',
    issueDate: '6 de abril',
    authority: 'Monarca de las Sombras, El fragmento mas brillante',
  };

  return (
    <div className="App bg-black min-h-screen flex items-center justify-center">
      <div>
        <h1 className="text-white text-2xl mb-6">Identificacion</h1>
        <IdentityCard {...identityCardData} />
      </div>
    </div>
  );
};

export default App;