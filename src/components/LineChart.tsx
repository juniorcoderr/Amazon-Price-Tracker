"use client";

import { Area, AreaChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";

const LineChart = ({
  data = [
    { x: "January", price: 68 },
    { x: "February", price: 74 },
    { x: "March", price: 86 },
    { x: "April", price: 70 },
    { x: "May", price: 95 },
    { x: "June", price: 115 },
  ],
  label = "Desktop",
  color = "var(--chart-1)",
}: {
  data?: {
    x: string;
    [key: string]: number | string;
  }[];
  label?: string;
  color?: string;
}) => {
  const chartConfig = {
    desktop: {
      label,
      color,
    },
  } satisfies ChartConfig;

  return (
    <div className="border-red-400 w-full -my-2">
      <ChartContainer config={chartConfig}>
        <AreaChart
          accessibilityLayer
          data={data}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <defs>
            <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-desktop)"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="var(--color-desktop)"
                stopOpacity={0.1}
              />
            </linearGradient>
          </defs>
          {data.length > 0 &&
            Object.keys(data[0])
              .filter((k) => k !== "x")
              .map((k) => (
                <Area
                  key={k}
                  dataKey={k}
                  type="natural"
                  fill="url(#fillDesktop)"
                  fillOpacity={0.4}
                  stroke="var(--color-desktop)"
                  stackId="a"
                />
              ))}
        </AreaChart>
      </ChartContainer>
    </div>
  );
};

export default LineChart;
