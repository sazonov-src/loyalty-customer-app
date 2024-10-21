import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import outputs from '../amplify_outputs.json';
import '@aws-amplify/ui-react/styles.css';

import BonusHistory from './components/bonus-history';
import ClientCard from './components/client-cart';

import { generateClient } from 'aws-amplify/data';
import { type Schema } from '../amplify/data/resource';
import { useState } from 'preact/hooks';
import { useEffect } from 'preact/hooks';

const client = generateClient<Schema>();
Amplify.configure(outputs);

export function App() {
  const transactions = [
    { id: '1', date: '2024-10-01', type: 'Нарахування', amount: 200 },
    { id: '2', date: '2024-09-30', type: 'Списання', amount: -50 },
  ];  

  const [ bonuses, setBonuses ] = useState<Schema['Bonuses']['type'] | undefined>(undefined);

  const getBonuses = async (id: string) => {
    const { 
      data: bonuses, 
      errors 
    } = await client.models.Bonuses.get({ id: id });
    if (errors) {
      console.error(errors);
      return;
    } else if (!bonuses) {
      console.error('Bonuses fuild not found');
      return;
    }
    setBonuses(bonuses);
  }

  useEffect(() => {
  }, [bonuses]);

  return (
    <div className="
      min-h-screen flex flex-col items-center justify-center p-6">
      <Authenticator>
        {({ signOut, user }) => user ? (
          getBonuses(user.userId),  
          <>
            <h1 className="text-3xl font-bold mb-4">
              Доброго дня, {user.signInDetails?.loginId}! 
            </h1>

            <div className="my-6">
              <ClientCard 
                clientId={user.userId} 
                bonusAmount={bonuses?.bonusPoints}
              />
            </div>

            <div className="my-6">
              <h2 className="text-2xl font-bold mb-4">Історія бонусів</h2>
              <BonusHistory transactions={transactions} />
            </div>

            <footer class="fixed bottom-0 p-4 content-center">
              <button class="size-1 logout-button" onClick={signOut}>
                Вихід
              </button>
            </footer>
          </>
        ) : ( 
          <p>Користувач не авторизований</p> 
        )}
      </Authenticator>
    </div>       
  );
}
