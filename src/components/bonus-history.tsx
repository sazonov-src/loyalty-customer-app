import { Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from './ui/table';

interface Transaction {
  id: string;
  date: string;
  type: string;
  amount: number;
}

function BonusHistory(
  { transactions }: { transactions: Array<Transaction>}
) {
  return (
    <Table max={3}>
      <TableHeader>
        <TableRow>
          <TableHead>Дата</TableHead>
          <TableHead>Операція</TableHead>
          <TableHead>Кількість бонусів</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((tx) => (
          <TableRow key={tx.id}>
            <TableCell>{tx.date}</TableCell>
            <TableCell>{tx.type}</TableCell>
            <TableCell>{tx.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default BonusHistory;

