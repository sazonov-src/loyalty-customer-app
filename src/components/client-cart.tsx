import QRCode from 'react-qr-code';
import { Card, CardHeader, CardContent, CardTitle } from './ui/card';

interface ClientCardProps {
  clientId: string;
  bonusAmount: number;
}

function ClientCard({ clientId, bonusAmount }: ClientCardProps) {
  return (
    <Card className="w-full max-w-md" >
      <CardHeader>
        <CardTitle>Карта клієнта</CardTitle>
      </CardHeader>
      <CardContent className="flex items-left">
        <QRCode value={clientId} size={150} />
        <p className="text-xl pl-6 flex flex-col items-center">
          Доступні бонуси: 
          <span className="font-bold text-6xl"> {bonusAmount}</span>
        </p>
      </CardContent>
    </Card>
  );
}

export default ClientCard;
