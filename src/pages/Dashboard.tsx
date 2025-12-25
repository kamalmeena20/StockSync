import { Package, AlertTriangle, TrendingDown, IndianRupee, Loader2 } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { AlertsList } from "@/components/dashboard/AlertsList";
import { InventoryChart } from "@/components/dashboard/InventoryChart";
import { SKUPerformance } from "@/components/dashboard/SKUPerformance";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { useInventoryItems } from "@/hooks/useInventory";
import { useAlerts } from "@/hooks/useAlerts";

export default function Dashboard() {
  const { data: items, isLoading: itemsLoading } = useInventoryItems();
  const { data: alerts, isLoading: alertsLoading } = useAlerts();

  const totalValue = items?.reduce((sum, item) => sum + (item.quantity * Number(item.unit_cost)), 0) || 0;
  const totalSKUs = items?.length || 0;
  const lowStockItems = items?.filter(item => item.status === 'low').length || 0;
  const deadStockItems = items?.filter(item => item.status === 'dead').length || 0;
  const activeAlerts = alerts?.filter(alert => !alert.is_resolved).length || 0;

  const isLoading = itemsLoading || alertsLoading;

  return (
    <ProtectedRoute>
      <MainLayout>
        <div className="space-y-8 animate-fade-in">
          {/* Header */}
          <div>
            <h1 className="font-display text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground mt-1">Monitor your inventory health and performance</p>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : (
            <>
              {/* Metrics Grid */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <MetricCard
                  title="Total Inventory Value"
                  value={`₹${(totalValue / 100000).toFixed(1)}L`}
                  subtitle={`Across ${totalSKUs} SKUs`}
                  icon={<IndianRupee className="h-6 w-6" />}
                  trend={{ value: 12, isPositive: true }}
                />
                <MetricCard
                  title="Low Stock Items"
                  value={String(lowStockItems)}
                  subtitle="Need reordering"
                  icon={<TrendingDown className="h-6 w-6" />}
                  variant="destructive"
                />
                <MetricCard
                  title="Dead Stock"
                  value={String(deadStockItems)}
                  subtitle="No movement 90+ days"
                  icon={<Package className="h-6 w-6" />}
                  variant="warning"
                />
                <MetricCard
                  title="Active Alerts"
                  value={String(activeAlerts)}
                  subtitle="Require attention"
                  icon={<AlertTriangle className="h-6 w-6" />}
                  variant="warning"
                />
              </div>

              {/* Charts Section */}
              <div className="grid gap-6 lg:grid-cols-2">
                <InventoryChart />
                <SKUPerformance />
              </div>

              {/* Alerts */}
              <AlertsList />
            </>
          )}
        </div>
      </MainLayout>
    </ProtectedRoute>
  );
}
