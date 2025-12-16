"use client";

import React from "react";

interface StatItem {
  label: string;
  value: number;
  color: string;
}

interface StatsChartProps {
  stats: StatItem[];
}

export default function StatsChart({ stats }: StatsChartProps) {
  const total = stats.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Répartition des Membres</h3>

      <div className="space-y-4">
        {stats.map((item, index) => {
          const percent = total > 0 ? ((item.value / total) * 100).toFixed(1) : 0;

          return (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="font-medium">{item.label}</span>
                <span className="text-sm text-gray-600">{percent}%</span>
              </div>

              <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                <div
                  className="h-full transition-all duration-500"
                  style={{
                    width: `${percent}%`,
                    backgroundColor: item.color,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-sm text-gray-500 mt-6">
        Total membres : <span className="font-semibold">{total}</span>
      </p>
    </div>
  );
}
