import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", value: 2400000, turnover: 4.2 },
  { month: "Feb", value: 2100000, turnover: 4.5 },
  { month: "Mar", value: 2800000, turnover: 4.1 },
  { month: "Apr", value: 2600000, turnover: 4.3 },
  { month: "May", value: 3100000, turnover: 3.9 },
  { month: "Jun", value: 2900000, turnover: 4.0 },
];

export function InventoryChart() {
  return (
    <Card className="shadow-card">
      <CardHeader className="pb-4">
        <CardTitle className="font-display text-lg">Inventory Value Trend</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(217, 91%, 40%)" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="hsl(217, 91%, 40%)" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 32%, 91%)" />
              <XAxis 
                dataKey="month" 
                stroke="hsl(215, 16%, 47%)"
                fontSize={12}
              />
              <YAxis 
                stroke="hsl(215, 16%, 47%)"
                fontSize={12}
                tickFormatter={(value) => `₹${(value / 100000).toFixed(0)}L`}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: "hsl(0, 0%, 100%)",
                  border: "1px solid hsl(214, 32%, 91%)",
                  borderRadius: "8px",
                }}
                formatter={(value: number) => [`₹${(value / 100000).toFixed(1)}L`, "Inventory Value"]}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="hsl(217, 91%, 40%)"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorValue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
