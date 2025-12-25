import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, 
  AlertTriangle, 
  TrendingUp, 
  Package, 
  BarChart3,
  Smartphone,
  Users,
  Database
} from "lucide-react";

export default function Documentation() {
  return (
    <MainLayout>
      <div className="space-y-8 animate-fade-in max-w-4xl">
        {/* Header */}
        <div className="space-y-2">
          <Badge variant="secondary" className="mb-2">Problem-Solving Document</Badge>
          <h1 className="font-display text-3xl font-bold text-foreground">
            Inventory Management Solutions for Indian Material Businesses
          </h1>
          <p className="text-muted-foreground">
            A comprehensive analysis of inventory challenges and technology-enabled solutions
          </p>
        </div>

        {/* Problem Statement */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="font-display text-xl flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-warning" />
              The Problem
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none">
            <p className="text-muted-foreground">
              Most Indian material businesses lack visibility into their inventory levels, leading to:
            </p>
            <ul className="space-y-2 mt-4">
              <li className="flex items-start gap-2">
                <span className="h-5 w-5 rounded-full bg-destructive/10 flex items-center justify-center text-destructive mt-0.5">1</span>
                <span><strong>Dead Inventory:</strong> Products sitting unsold for 90+ days, tying up capital</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-5 w-5 rounded-full bg-destructive/10 flex items-center justify-center text-destructive mt-0.5">2</span>
                <span><strong>Poor SKU Selection:</strong> Stocking products that don't sell well in the local market</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-5 w-5 rounded-full bg-destructive/10 flex items-center justify-center text-destructive mt-0.5">3</span>
                <span><strong>Damaged Inventory:</strong> Losses due to improper storage and handling</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-5 w-5 rounded-full bg-destructive/10 flex items-center justify-center text-destructive mt-0.5">4</span>
                <span><strong>Low Margins:</strong> Average net margins of 3-5% due to inefficiencies</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Solutions Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Tech Solutions */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="font-display text-lg flex items-center gap-2">
                <Database className="h-5 w-5 text-primary" />
                Technology Solutions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Real-time Inventory Tracking</p>
                    <p className="text-xs text-muted-foreground">Digital stock levels with barcode/QR scanning</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Automated Reorder Alerts</p>
                    <p className="text-xs text-muted-foreground">Smart notifications when stock hits reorder points</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">SKU Performance Analytics</p>
                    <p className="text-xs text-muted-foreground">ABC analysis to identify top and poor performers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Dead Stock Detection</p>
                    <p className="text-xs text-muted-foreground">Automatic flagging of items with no movement</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Non-Tech Solutions */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="font-display text-lg flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Process Solutions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Regular Stock Audits</p>
                    <p className="text-xs text-muted-foreground">Weekly physical counts for high-value items</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">FIFO Implementation</p>
                    <p className="text-xs text-muted-foreground">First-in-first-out to prevent damage and expiry</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Vendor Relationships</p>
                    <p className="text-xs text-muted-foreground">Negotiate return policies for slow-moving stock</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Staff Training</p>
                    <p className="text-xs text-muted-foreground">Proper handling to reduce damage rates</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Implementation Architecture */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="font-display text-lg flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              System Architecture
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-medium">Component</th>
                    <th className="text-left py-3 px-4 font-medium">Technology</th>
                    <th className="text-left py-3 px-4 font-medium">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4">Frontend</td>
                    <td className="py-3 px-4"><Badge variant="secondary">React + TypeScript</Badge></td>
                    <td className="py-3 px-4 text-muted-foreground">Responsive dashboard UI</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4">Backend</td>
                    <td className="py-3 px-4"><Badge variant="secondary">Supabase</Badge></td>
                    <td className="py-3 px-4 text-muted-foreground">Real-time database & auth</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4">Charts</td>
                    <td className="py-3 px-4"><Badge variant="secondary">Recharts</Badge></td>
                    <td className="py-3 px-4 text-muted-foreground">Data visualization</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4">Alerts</td>
                    <td className="py-3 px-4"><Badge variant="secondary">Edge Functions</Badge></td>
                    <td className="py-3 px-4 text-muted-foreground">Automated notifications</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Expected Impact */}
        <Card className="shadow-card border-success/20 bg-success/5">
          <CardHeader>
            <CardTitle className="font-display text-lg flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-success" />
              Expected Impact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="text-center p-4">
                <p className="font-display text-3xl font-bold text-success">20-30%</p>
                <p className="text-sm text-muted-foreground mt-1">Reduction in dead stock</p>
              </div>
              <div className="text-center p-4">
                <p className="font-display text-3xl font-bold text-success">2-3%</p>
                <p className="text-sm text-muted-foreground mt-1">Improvement in net margins</p>
              </div>
              <div className="text-center p-4">
                <p className="font-display text-3xl font-bold text-success">50%</p>
                <p className="text-sm text-muted-foreground mt-1">Faster stockout detection</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Assumptions */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="font-display text-lg">Assumptions Made</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Business has basic smartphone/computer access for data entry</li>
              <li>• Staff can be trained on simple barcode scanning workflows</li>
              <li>• Internet connectivity is available at the warehouse/store</li>
              <li>• Historical sales data can be imported or entry started fresh</li>
              <li>• Business is willing to adopt systematic inventory practices</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
