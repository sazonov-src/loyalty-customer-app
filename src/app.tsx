import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import outputs from '../amplify_outputs.json';
import '@aws-amplify/ui-react/styles.css';

import BonusHistory from './components/bonus-history';
import ClientCard from './components/client-cart';


Amplify.configure(outputs);

export function App() {
  const transactions = [
    { id: '1', date: '2024-10-01', type: 'Нарахування', amount: 200 },
    { id: '2', date: '2024-09-30', type: 'Списання', amount: -50 },
  ];  

  return (
    <Authenticator>
      {({ user }) => (
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-4">
          Доброго дня, {user?.signInDetails?.loginId}!
        </h1>

        {/* Карта клієнта */}
        <div className="my-6">
          <ClientCard clientId="123456789" bonusAmount={450} />
        </div>

        {/* Історія бонусних операцій */}
        <div className="my-6">
          <h2 className="text-2xl font-bold mb-4">Історія бонусів</h2>
          <BonusHistory transactions={transactions} />
        </div>

          <footer class="fixed bottom-0 p-4 content-center">
            <button class="logout-button">
              Вихід
            </button>
          </footer>
      </div>       
      )}
    </Authenticator>
  );
}
