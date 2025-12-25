import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from "recharts";

const categoryData = [
  { name: "Cement", value: 850000, percentage: 29 },
  { name: "Steel", value: 720000, percentage: 25 },
  { name: "Bricks", value: 420000, percentage: 14 },
  { name: "Sand", value: 380000, percentage: 13 },
  { name: "Tiles", value: 290000, percentage: 10 },
  { name: "Others", value: 280000, percentage: 9 },
];

const turnoverData = [
  { month: "Jan", turnover: 4.2, target: 4.5 },
  { month: "Feb", turnover: 4.5, target: 4.5 },
  { month: "Mar", turnover: 4.1, target: 4.5 },
  { month: "Apr", turnover: 4.3, target: 4.5 },
  { month: "May", turnover: 3.9, target: 4.5 },
  { month: "Jun", turnover: 4.0, target: 4.5 },
];

const stockAgingData = [
  { name: "0-30 days", value: 45, color: "hsl(142, 71%, 45%)" },
  { name: "31-60 days", value: 30, color: "hsl(217, 91%, 40%)" },
  { name: "61-90 days", value: 15, color: "hsl(38, 92%, 50%)" },
  { name: "90+ days", value: 10, color: "hsl(0, 84%, 60%)" },
];

const skuAnalysis = [
  { category: "A (Top 20%)", skus: 169, revenue: "70%", recommendation: "Maintain high stock" },
  { category: "B (Middle 30%)", skus: 254, revenue: "20%", recommendation: "Monitor closely" },
  { category: "C (Bottom 50%)", skus: 424, revenue: "10%", recommendation: "Consider reducing" },
];

export default function Analytics() {
  return (
    <MainLayout>
      <div className="space-y-8 animate-fade-in">
        {/* Header */}
        <div>
          <h1 className="font-display text-3xl font-bold text-foreground">Analytics</h1>
          <p className="text-muted-foreground mt-1">Deep insights into your inventory performance</p>
        </div>

        {/* Charts Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Category Distribution */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="font-display text-lg">Inventory by Category</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={categoryData} layout="vertical" margin={{ left: 80 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 32%, 91%)" />
                    <XAxis 
                      type="number" 
                      stroke="hsl(215, 16%, 47%)"
                      fontSize={12}
                      tickFormatter={(value) => `₹${(value / 100000).toFixed(0)}L`}
                    />
                    <YAxis 
                      type="category" 
                      dataKey="name" 
                      stroke="hsl(215, 16%, 47%)"
                      fontSize={12}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: "hsl(0, 0%, 100%)",
                        border: "1px solid hsl(214, 32%, 91%)",
                        borderRadius: "8px",
                      }}
                      formatter={(value: number) => [`₹${(value / 100000).toFixed(1)}L`, "Value"]}
                    />
                    <Bar dataKey="value" fill="hsl(217, 91%, 40%)" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Stock Aging */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="font-display text-lg">Stock Aging Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={stockAgingData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {stockAgingData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: "hsl(0, 0%, 100%)",
                        border: "1px solid hsl(214, 32%, 91%)",
                        borderRadius: "8px",
                      }}
                      formatter={(value: number) => [`${value}%`, "Percentage"]}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                {stockAgingData.map((item) => (
                  <div key={item.name} className="flex items-center gap-2">
                    <div 
                      className="h-3 w-3 rounded-full" 
                      style={{ backgroundColor: item.color }} 
                    />
                    <span className="text-sm text-muted-foreground">{item.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Inventory Turnover */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="font-display text-lg">Inventory Turnover Ratio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={turnoverData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 32%, 91%)" />
                  <XAxis 
                    dataKey="month" 
                    stroke="hsl(215, 16%, 47%)"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="hsl(215, 16%, 47%)"
                    fontSize={12}
                    domain={[3, 5]}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: "hsl(0, 0%, 100%)",
                      border: "1px solid hsl(214, 32%, 91%)",
                      borderRadius: "8px",
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="turnover" 
                    stroke="hsl(217, 91%, 40%)" 
                    strokeWidth={2}
                    dot={{ fill: "hsl(217, 91%, 40%)", strokeWidth: 2 }}
                    name="Actual"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="target" 
                    stroke="hsl(142, 71%, 45%)" 
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={false}
                    name="Target"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* ABC Analysis */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="font-display text-lg">ABC Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-medium">Category</th>
                    <th className="text-left py-3 px-4 font-medium">SKU Count</th>
                    <th className="text-left py-3 px-4 font-medium">Revenue Contribution</th>
                    <th className="text-left py-3 px-4 font-medium">Recommendation</th>
                  </tr>
                </thead>
                <tbody>
                  {skuAnalysis.map((row) => (
                    <tr key={row.category} className="border-b border-border">
                      <td className="py-3 px-4">
                        <Badge variant={
                          row.category.startsWith("A") ? "success" : 
                          row.category.startsWith("B") ? "default" : "secondary"
                        }>
                          {row.category}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 font-medium">{row.skus}</td>
                      <td className="py-3 px-4 font-medium">{row.revenue}</td>
                      <td className="py-3 px-4 text-muted-foreground">{row.recommendation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
