import QRCode from 'react-qr-code';
import { Card, CardHeader, CardContent, CardTitle } from './ui/card';
import { Skeleton } from "@/components/ui/skeleton"

interface ClientCardProps {
  clientId: string;
  bonusAmount?: number;
}

function ClientCard({ clientId, bonusAmount }: ClientCardProps) {
  return (
    <Card className="w-full max-w-md" >
      <CardHeader>
        <CardTitle>Карта клієнта</CardTitle>
      </CardHeader>
      <CardContent className="flex items-left">
        {bonusAmount ? (
          <>
            <QRCode value={clientId} size={150} />
            <p className="text-xl pl-6 flex flex-col items-center">
              Доступні бонуси: 
              <span className="font-bold text-6xl"> 
                {bonusAmount}
              </span>
            </p>
          </>
        ) : 
          <div className="flex items-center">
            <Skeleton className="w-[150px] h-[150px]" />
            <div className="pl-6">
              <Skeleton className="w-48 h-8 mb-2" />
              <Skeleton className="w-32 h-16" />
            </div>
          </div>
        }
      </CardContent>
    </Card>
  );
}

export default ClientCard;
