import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  AlertTriangle, 
  Package, 
  TrendingDown, 
  Trash2, 
  CheckCircle, 
  Clock,
  Bell,
  BellOff,
  Loader2
} from "lucide-react";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { useAlerts, useResolveAlert, useDeleteAlert } from "@/hooks/useAlerts";
import { formatDistanceToNow } from "date-fns";

const typeIcons = {
  dead_stock: Package,
  low_stock: TrendingDown,
  damaged: Trash2,
  expiring: Clock,
  slow_moving: AlertTriangle,
};

const severityConfig = {
  critical: { 
    bgClass: "bg-destructive/10 border-destructive/20",
    badgeVariant: "destructive" as const,
    iconClass: "text-destructive"
  },
  warning: { 
    bgClass: "bg-warning/10 border-warning/20",
    badgeVariant: "warning" as const,
    iconClass: "text-warning"
  },
  info: { 
    bgClass: "bg-primary/10 border-primary/20",
    badgeVariant: "default" as const,
    iconClass: "text-primary"
  },
};

export default function Alerts() {
  const { data: alerts, isLoading } = useAlerts();
  const resolveAlert = useResolveAlert();
  const deleteAlert = useDeleteAlert();

  const unresolvedAlerts = alerts?.filter(a => !a.is_resolved) || [];
  const criticalCount = unresolvedAlerts.filter(a => a.severity === "critical").length;
  const warningCount = unresolvedAlerts.filter(a => a.severity === "warning").length;

  return (
    <ProtectedRoute>
      <MainLayout>
        <div className="space-y-8 animate-fade-in">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-display text-3xl font-bold text-foreground">Alerts</h1>
              <p className="text-muted-foreground mt-1">
                {criticalCount} critical, {warningCount} warnings requiring attention
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" className="gap-2">
                <BellOff className="h-4 w-4" />
                Mute All
              </Button>
              <Button variant="outline" className="gap-2">
                <CheckCircle className="h-4 w-4" />
                Mark All Read
              </Button>
            </div>
          </div>

          {/* Alert Stats */}
          <div className="grid gap-4 sm:grid-cols-3">
            <Card className="shadow-card border-destructive/20 bg-destructive/5">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10">
                  <AlertTriangle className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-foreground">{criticalCount}</p>
                  <p className="text-sm text-muted-foreground">Critical Alerts</p>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-card border-warning/20 bg-warning/5">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-warning/10">
                  <Bell className="h-6 w-6 text-warning" />
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-foreground">{warningCount}</p>
                  <p className="text-sm text-muted-foreground">Warnings</p>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-card">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                  <Clock className="h-6 w-6 text-muted-foreground" />
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-foreground">
                    {unresolvedAlerts.length}
                  </p>
                  <p className="text-sm text-muted-foreground">Total Unresolved</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Alerts List */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="font-display text-lg">All Alerts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {isLoading ? (
                <div className="flex items-center justify-center h-32">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : unresolvedAlerts.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  <CheckCircle className="h-12 w-12 mx-auto mb-4 text-success" />
                  <p>No active alerts. Your inventory is healthy!</p>
                </div>
              ) : (
                unresolvedAlerts.map((alert) => {
                  const config = severityConfig[alert.severity];
                  const Icon = typeIcons[alert.type] || AlertTriangle;
                  return (
                    <div
                      key={alert.id}
                      className={`flex items-start gap-4 rounded-lg border p-4 transition-colors hover:bg-secondary/30 ${config.bgClass}`}
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-card">
                        <Icon className={`h-5 w-5 ${config.iconClass}`} />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="font-medium text-foreground">{alert.title}</p>
                            <p className="text-sm text-muted-foreground mt-1">{alert.description}</p>
                          </div>
                          <Badge variant={config.badgeVariant}>
                            {alert.severity}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {formatDistanceToNow(new Date(alert.created_at), { addSuffix: true })}
                            </span>
                            {alert.inventory_item && (
                              <span className="font-medium text-foreground">
                                SKU: {alert.inventory_item.sku}
                              </span>
                            )}
                          </div>
                          <div className="flex gap-2">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => deleteAlert.mutate(alert.id)}
                              disabled={deleteAlert.isPending}
                            >
                              Dismiss
                            </Button>
                            <Button 
                              size="sm"
                              onClick={() => resolveAlert.mutate(alert.id)}
                              disabled={resolveAlert.isPending}
                            >
                              Resolve
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </CardContent>
          </Card>
        </div>
      </MainLayout>
    </ProtectedRoute>
  );
}
