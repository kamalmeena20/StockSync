import { AlertTriangle, Package, TrendingDown, Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const alerts = [
  {
    id: 1,
    type: "dead_stock",
    title: "Steel Rods (8mm) - Dead Stock",
    description: "No movement for 90+ days. Consider liquidation.",
    severity: "warning",
    icon: Package,
  },
  {
    id: 2,
    type: "low_stock",
    title: "Cement (PPC) - Low Stock",
    description: "Only 50 bags remaining. Reorder point: 200 bags.",
    severity: "destructive",
    icon: TrendingDown,
  },
  {
    id: 3,
    type: "damaged",
    title: "Bricks (Red) - Damaged Inventory",
    description: "15% damage rate detected. Check storage conditions.",
    severity: "destructive",
    icon: Trash2,
  },
  {
    id: 4,
    type: "slow_moving",
    title: "Tiles (Ceramic 2x2) - Slow Moving",
    description: "Sales velocity dropped 40% in last quarter.",
    severity: "warning",
    icon: AlertTriangle,
  },
];

export function AlertsList() {
  return (
    <Card className="shadow-card">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 font-display text-lg">
          <AlertTriangle className="h-5 w-5 text-warning" />
          Active Alerts
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="flex items-start gap-4 rounded-lg border border-border p-4 transition-colors hover:bg-secondary/50"
          >
            <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${
              alert.severity === "destructive" ? "bg-destructive/10" : "bg-warning/10"
            }`}>
              <alert.icon className={`h-5 w-5 ${
                alert.severity === "destructive" ? "text-destructive" : "text-warning"
              }`} />
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <p className="font-medium text-foreground">{alert.title}</p>
                <Badge variant={alert.severity === "destructive" ? "destructive" : "warning"}>
                  {alert.type.replace("_", " ")}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{alert.description}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
