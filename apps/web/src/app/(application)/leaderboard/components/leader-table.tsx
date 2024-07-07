import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { LeaderTableData } from "./mock/leader-table-data";

export default function LeaderTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ranking</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-8">
        {LeaderTableData.map((leader) => (
          <div key={leader.id} className="flex items-center gap-4">
            <Avatar className="hidden h-9 w-9 sm:flex rounded-full">
              <AvatarImage src={leader.avatar} className="rounded-full" />
              <AvatarFallback>
                {leader.name.split(" ")[0][0]}
                {leader.name.split(" ")[1][0]}
              </AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-sm font-medium leading-none">{leader.name}</p>
              <p className="text-sm text-muted-foreground">{leader.email}</p>
            </div>
            <div className="ml-auto font-medium">{leader.value}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
