import { Package, AlertTriangle, TrendingDown, IndianRupee } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { AlertsList } from "@/components/dashboard/AlertsList";
import { InventoryChart } from "@/components/dashboard/InventoryChart";
import { SKUPerformance } from "@/components/dashboard/SKUPerformance";

export default function Dashboard() {
  return (
    <MainLayout>
      <div className="space-y-8 animate-fade-in">
        {/* Header */}
        <div>
          <h1 className="font-display text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Monitor your inventory health and performance</p>
        </div>

        {/* Metrics Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Total Inventory Value"
            value="₹29.4L"
            subtitle="Across 847 SKUs"
            icon={<IndianRupee className="h-6 w-6" />}
            trend={{ value: 12, isPositive: true }}
          />
          <MetricCard
            title="Low Stock Items"
            value="8"
            subtitle="Need reordering"
            icon={<TrendingDown className="h-6 w-6" />}
            variant="destructive"
          />
          <MetricCard
            title="Dead Stock"
            value="12"
            subtitle="No movement 90+ days"
            icon={<Package className="h-6 w-6" />}
            variant="warning"
          />
          <MetricCard
            title="Active Alerts"
            value="4"
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
      </div>
    </MainLayout>
  );
}
