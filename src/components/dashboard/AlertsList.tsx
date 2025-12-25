import { AlertTriangle, Package, TrendingDown, Trash2, CheckCircle, Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAlerts } from "@/hooks/useAlerts";
import { formatDistanceToNow } from "date-fns";

const typeIcons = {
  dead_stock: Package,
  low_stock: TrendingDown,
  damaged: Trash2,
  expiring: AlertTriangle,
  slow_moving: AlertTriangle,
};

export function AlertsList() {
  const { data: alerts, isLoading } = useAlerts();
  const activeAlerts = alerts?.filter(a => !a.is_resolved).slice(0, 4) || [];

  if (isLoading) {
    return (
      <Card className="shadow-card">
        <CardContent className="flex items-center justify-center h-48">
          <Loader2 className="h-6 w-6 animate-spin text-primary" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-card">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 font-display text-lg">
          <AlertTriangle className="h-5 w-5 text-warning" />
          Active Alerts
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activeAlerts.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <CheckCircle className="h-10 w-10 mx-auto mb-3 text-success" />
            <p>No active alerts. Your inventory is healthy!</p>
          </div>
        ) : (
          activeAlerts.map((alert) => {
            const Icon = typeIcons[alert.type] || AlertTriangle;
            const isDestructive = alert.severity === "critical";
            return (
              <div
                key={alert.id}
                className="flex items-start gap-4 rounded-lg border border-border p-4 transition-colors hover:bg-secondary/50"
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                  isDestructive ? "bg-destructive/10" : "bg-warning/10"
                }`}>
                  <Icon className={`h-5 w-5 ${
                    isDestructive ? "text-destructive" : "text-warning"
                  }`} />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-foreground">{alert.title}</p>
                    <Badge variant={isDestructive ? "destructive" : "warning"}>
                      {alert.type.replace("_", " ")}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{alert.description}</p>
                  <p className="text-xs text-muted-foreground">
                    {formatDistanceToNow(new Date(alert.created_at), { addSuffix: true })}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </CardContent>
    </Card>
  );
}
