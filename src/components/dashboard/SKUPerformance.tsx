import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const skuData = [
  { sku: "CEM-PPC-50", name: "Cement PPC 50kg", performance: 92, status: "top", revenue: "₹4.2L" },
  { sku: "STL-ROD-12", name: "Steel Rod 12mm", performance: 85, status: "top", revenue: "₹3.8L" },
  { sku: "BRK-RED-STD", name: "Red Bricks Standard", performance: 78, status: "good", revenue: "₹2.1L" },
  { sku: "SND-RVR-CFT", name: "River Sand (per CFT)", performance: 65, status: "average", revenue: "₹1.5L" },
  { sku: "TIL-CER-2X2", name: "Ceramic Tiles 2x2", performance: 35, status: "poor", revenue: "₹0.8L" },
];

const statusColors = {
  top: "success",
  good: "default",
  average: "warning",
  poor: "destructive",
} as const;

export function SKUPerformance() {
  return (
    <Card className="shadow-card">
      <CardHeader className="pb-4">
        <CardTitle className="font-display text-lg">SKU Performance</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {skuData.map((item) => (
          <div key={item.sku} className="space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.sku}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-foreground">{item.revenue}</span>
                <Badge variant={statusColors[item.status]}>{item.status}</Badge>
              </div>
            </div>
            <Progress value={item.performance} className="h-2" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
