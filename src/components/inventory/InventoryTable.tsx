import { useState } from "react";
import { Search, Filter, ArrowUpDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const inventoryData = [
  { id: 1, sku: "CEM-PPC-50", name: "Cement PPC 50kg", category: "Cement", stock: 1200, reorderPoint: 200, value: 420000, status: "healthy", lastMovement: "2 days ago" },
  { id: 2, sku: "STL-ROD-12", name: "Steel Rod 12mm", category: "Steel", stock: 450, reorderPoint: 100, value: 380000, status: "healthy", lastMovement: "1 day ago" },
  { id: 3, sku: "CEM-OPC-50", name: "Cement OPC 50kg", category: "Cement", stock: 50, reorderPoint: 200, value: 22500, status: "low", lastMovement: "5 days ago" },
  { id: 4, sku: "BRK-RED-STD", name: "Red Bricks Standard", category: "Bricks", stock: 5000, reorderPoint: 1000, value: 50000, status: "healthy", lastMovement: "3 days ago" },
  { id: 5, sku: "STL-ROD-08", name: "Steel Rod 8mm", category: "Steel", stock: 200, reorderPoint: 150, value: 160000, status: "dead", lastMovement: "95 days ago" },
  { id: 6, sku: "SND-RVR-CFT", name: "River Sand (per CFT)", category: "Sand", stock: 800, reorderPoint: 200, value: 24000, status: "healthy", lastMovement: "1 day ago" },
  { id: 7, sku: "TIL-CER-2X2", name: "Ceramic Tiles 2x2", category: "Tiles", stock: 350, reorderPoint: 100, value: 175000, status: "slow", lastMovement: "45 days ago" },
  { id: 8, sku: "PIP-PVC-4IN", name: "PVC Pipe 4 inch", category: "Pipes", stock: 120, reorderPoint: 50, value: 36000, status: "healthy", lastMovement: "4 days ago" },
];

const statusConfig = {
  healthy: { label: "Healthy", variant: "success" as const },
  low: { label: "Low Stock", variant: "destructive" as const },
  dead: { label: "Dead Stock", variant: "warning" as const },
  slow: { label: "Slow Moving", variant: "secondary" as const },
};

export function InventoryTable() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = inventoryData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Card className="shadow-card">
      <CardHeader className="pb-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <CardTitle className="font-display text-lg">Inventory Items</CardTitle>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search inventory..."
                className="pl-9 w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border border-border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">SKU</TableHead>
                <TableHead>Product Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="text-right">
                  <Button variant="ghost" size="sm" className="h-8 gap-1 text-xs">
                    Stock
                    <ArrowUpDown className="h-3 w-3" />
                  </Button>
                </TableHead>
                <TableHead className="text-right">Reorder Point</TableHead>
                <TableHead className="text-right">Value</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Movement</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((item) => (
                <TableRow key={item.id} className="hover:bg-secondary/50">
                  <TableCell className="font-mono text-sm">{item.sku}</TableCell>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell className="text-muted-foreground">{item.category}</TableCell>
                  <TableCell className="text-right font-medium">{item.stock.toLocaleString()}</TableCell>
                  <TableCell className="text-right text-muted-foreground">{item.reorderPoint.toLocaleString()}</TableCell>
                  <TableCell className="text-right">₹{(item.value / 1000).toFixed(1)}K</TableCell>
                  <TableCell>
                    <Badge variant={statusConfig[item.status].variant}>
                      {statusConfig[item.status].label}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{item.lastMovement}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
