import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Download } from "lucide-react";
import StatusMonitor from "@/components/status-monitor";

export default function StatisticsPage() {
  return (
    <div className="container py-10">
      <div className="mb-10 space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Painel de Estatísticas</h1>
        <p className="text-muted-foreground">
          Monitore o desempenho do nosso serviço e métricas de disponibilidade de dados
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total de Conjuntos de Dados</CardTitle>
            <Database className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">285</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total de Downloads</CardTitle>
            <Download className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5.006</div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-10">
        <Card>
          <CardHeader>
            <CardTitle>Monitor de Status do Repositório</CardTitle>
            <CardDescription>Verificação automática a cada hora do status do repositório</CardDescription>
          </CardHeader>
          <CardContent>
            <StatusMonitor />
          </CardContent>
        </Card>

    </div>
        </div>
  );
}
