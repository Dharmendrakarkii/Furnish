
"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis, Cell } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

export const description = "A polished bar chart with category labels inside bars"

const chartData = [
  { category: "Furniture", productQuantity: 186 },
  { category: "Electronics", productQuantity: 305 },
  { category: "Home Decor", productQuantity: 237 },
  { category: "Kitchen", productQuantity: 73 },
  { category: "Bedroom", productQuantity: 119 },
  { category: "Bathroom", productQuantity: 214 },
]

const chartConfig = {
  productQuantity: {
    label: "Product Quantity",
    color: "green",
  },
  label: {
    color: "var(--background)",
  },
} satisfies ChartConfig

export function ChartBarLabelCustom() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Product Category Sales</CardTitle>
        <CardDescription>January - June 2026</CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{ right: 16 }}
          >
            <CartesianGrid horizontal={false} />

            {/* Hide Y-axis */}
            <YAxis type="category" dataKey="category" hide />
            <XAxis dataKey="productQuantity" type="number" hide />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />

            {/* Bars with gradient */}
            <Bar
              dataKey="productQuantity"
              layout="vertical"
              radius={6}
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill="url(#barGradient)" // gradient fill
                />
              ))}

              {/* Category name inside the bar */}
              <LabelList
                dataKey="category"
                position="insideLeft"
                offset={12}
                style={{ fill: 'white', fontWeight: 600 }}
                fontSize={12}
              />

              {/* Numeric value on the right */}
              <LabelList
                dataKey="productQuantity"
                position="right"
                offset={8}
                style={{ fill: '#111', fontWeight: 600 }}
                fontSize={12}
              />
            </Bar>

            {/* Define gradient */}
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#4ade80" />  {/* Light green */}
                <stop offset="100%" stopColor="#16a34a" /> {/* Darker green */}
              </linearGradient>
            </defs>
          </BarChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total product quantity for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}

export default ChartBarLabelCustom
