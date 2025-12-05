import { useState } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

interface RadarChartData {
  axis: string;
  "GUTDACH": number;
  "PPGI": number;
  "Aluminium Sheet": number;
  "Polycarbonate Sheet": number;
  "Fibre-cement Sheet": number;
  "Clay/Concrete Tiles": number;
}

const data: RadarChartData[] = [
  { axis: "UV Stability", "GUTDACH": 10, "PPGI": 4, "Aluminium Sheet": 5, "Polycarbonate Sheet": 3, "Fibre-cement Sheet": 4, "Clay/Concrete Tiles": 5 },
  { axis: "Corrosion Resistance", "GUTDACH": 10, "PPGI": 3, "Aluminium Sheet": 6, "Polycarbonate Sheet": 7, "Fibre-cement Sheet": 7, "Clay/Concrete Tiles": 7 },
  { axis: "Heat Insulation", "GUTDACH": 9, "PPGI": 2, "Aluminium Sheet": 4, "Polycarbonate Sheet": 4, "Fibre-cement Sheet": 5, "Clay/Concrete Tiles": 5 },
  { axis: "Rain Noise", "GUTDACH": 10, "PPGI": 2, "Aluminium Sheet": 3, "Polycarbonate Sheet": 5, "Fibre-cement Sheet": 5, "Clay/Concrete Tiles": 8 },
  { axis: "Chemical Resistance", "GUTDACH": 10, "PPGI": 3, "Aluminium Sheet": 5, "Polycarbonate Sheet": 4, "Fibre-cement Sheet": 7, "Clay/Concrete Tiles": 7 },
  { axis: "Weight Efficiency", "GUTDACH": 10, "PPGI": 7, "Aluminium Sheet": 8, "Polycarbonate Sheet": 9, "Fibre-cement Sheet": 3, "Clay/Concrete Tiles": 2 },
  { axis: "Impact Strength", "GUTDACH": 9, "PPGI": 3, "Aluminium Sheet": 5, "Polycarbonate Sheet": 4, "Fibre-cement Sheet": 4, "Clay/Concrete Tiles": 7 },
  { axis: "Fire Safety", "GUTDACH": 8, "PPGI": 8, "Aluminium Sheet": 8, "Polycarbonate Sheet": 4, "Fibre-cement Sheet": 8, "Clay/Concrete Tiles": 8 },
  { axis: "Low Maintenance", "GUTDACH": 10, "PPGI": 3, "Aluminium Sheet": 6, "Polycarbonate Sheet": 5, "Fibre-cement Sheet": 7, "Clay/Concrete Tiles": 7 },
  { axis: "Service Life", "GUTDACH": 9, "PPGI": 5, "Aluminium Sheet": 7, "Polycarbonate Sheet": 4, "Fibre-cement Sheet": 7, "Clay/Concrete Tiles": 9 },
  { axis: "Installation Ease", "GUTDACH": 10, "PPGI": 4, "Aluminium Sheet": 8, "Polycarbonate Sheet": 8, "Fibre-cement Sheet": 3, "Clay/Concrete Tiles": 2 },
  { axis: "Sustainability", "GUTDACH": 9, "PPGI": 5, "Aluminium Sheet": 7, "Polycarbonate Sheet": 5, "Fibre-cement Sheet": 3, "Clay/Concrete Tiles": 6 }
];

const materials = [
  { name: "GUTDACH", color: "#22C55E", strokeWidth: 3, fillOpacity: 0.3, enabled: true },
  { name: "PPGI", color: "#EF4444", strokeWidth: 2, fillOpacity: 0, enabled: true },
  { name: "Aluminium Sheet", color: "#3B82F6", strokeWidth: 2, fillOpacity: 0, enabled: true },
  { name: "Polycarbonate Sheet", color: "#F59E0B", strokeWidth: 2, fillOpacity: 0, enabled: true },
  { name: "Fibre-cement Sheet", color: "#8B5CF6", strokeWidth: 2, fillOpacity: 0, enabled: true },
  { name: "Clay/Concrete Tiles", color: "#A16207", strokeWidth: 2, fillOpacity: 0, enabled: true }
];

export function RoofingMaterialsRadarChart() {
  const [enabledMaterials, setEnabledMaterials] = useState(
    materials.reduce((acc, material) => ({ ...acc, [material.name]: material.enabled }), {})
  );
  const [hoveredMaterial, setHoveredMaterial] = useState<string | null>(null);

  const toggleMaterial = (materialName: string) => {
    if (materialName === "GUTDACH") return; // Always keep GUTDACH enabled
    setEnabledMaterials(prev => ({
      ...prev,
      [materialName]: !prev[materialName]
    }));
  };

  const calculateAverage = (materialName: string) => {
    const total = data.reduce((sum, item) => sum + item[materialName as keyof RadarChartData], 0);
    return (total / data.length).toFixed(1);
  };

  const CustomRadarChart = () => (
    <ResponsiveContainer width="100%" height={500}>
      <RadarChart data={data} margin={{ top: 20, right: 80, bottom: 20, left: 80 }}>
        <PolarGrid 
          stroke="#e5e7eb" 
          strokeWidth={1}
          radialLines={true}
        />
        <PolarAngleAxis 
          dataKey="axis" 
          tick={{ fontSize: 12, fill: "#374151" }}
          className="radar-axis-labels"
        />
        <PolarRadiusAxis 
          domain={[0, 10]} 
          tick={{ fontSize: 10, fill: "#6b7280" }}
          tickCount={6}
          angle={0}
        />
        {materials.map((material) => {
          if (!enabledMaterials[material.name]) return null;
          
          const isHovered = hoveredMaterial === material.name;
          const isGUTDACH = material.name === "GUTDACH";
          
          return (
            <Radar
              key={material.name}
              name={material.name}
              dataKey={material.name}
              stroke={material.color}
              fill={material.color}
              fillOpacity={isGUTDACH ? (isHovered ? 0.4 : 0.25) : 0}
              strokeWidth={isHovered ? material.strokeWidth + 1 : material.strokeWidth}
              dot={{ fill: material.color, strokeWidth: 0, r: isHovered ? 4 : 3 }}
              className={`transition-all duration-300 ${isGUTDACH ? 'drop-shadow-lg' : ''}`}
              style={{
                filter: isGUTDACH && isHovered ? 'drop-shadow(0 0 8px rgba(34, 197, 94, 0.4))' : 'none'
              }}
            />
          );
        })}
      </RadarChart>
    </ResponsiveContainer>
  );

  return (
    <Card className="w-full max-w-6xl mx-auto">
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-3xl mb-4 text-primary">
          GUTDACH: Comprehensive Superiority Across All Categories
        </CardTitle>
        <p className="text-lg text-muted-foreground">
          See how we outperform traditional roofing materials in every key metric
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Chart */}
          <div className="lg:col-span-3">
            <CustomRadarChart />
          </div>
          
          {/* Legend and Controls */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="mb-4 text-primary">Materials Comparison</h3>
              <div className="space-y-3">
                {materials.map((material) => (
                  <div key={material.name} className="flex items-center justify-between">
                    <Button
                      variant={enabledMaterials[material.name] ? "default" : "outline"}
                      size="sm"
                      onClick={() => toggleMaterial(material.name)}
                      disabled={material.name === "GUTDACH"}
                      onMouseEnter={() => setHoveredMaterial(material.name)}
                      onMouseLeave={() => setHoveredMaterial(null)}
                      className={`justify-start text-left flex-1 ${
                        material.name === "GUTDACH" 
                          ? 'bg-gradient-to-r from-green-600 to-green-500 border-green-500 shadow-lg' 
                          : ''
                      }`}
                      style={{
                        backgroundColor: enabledMaterials[material.name] ? material.color : 'transparent',
                        borderColor: material.color,
                        color: enabledMaterials[material.name] ? 'white' : material.color
                      }}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="text-xs truncate">{material.name}</span>
                        <span className="text-xs ml-2">
                          Avg: {calculateAverage(material.name)}
                        </span>
                      </div>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Performance Highlights */}
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="text-green-800 mb-3">GUTDACH Advantages</h4>
              <div className="space-y-2 text-sm text-green-700">
                <div className="flex justify-between">
                  <span>Overall Average:</span>
                  <span className="font-medium">{calculateAverage("GUTDACH")}/10</span>
                </div>
                <div className="flex justify-between">
                  <span>Top Categories:</span>
                  <span className="font-medium">8/12</span>
                </div>
                <div className="text-xs text-green-600 mt-2">
                  Leading in UV stability, corrosion resistance, chemical resistance, weight efficiency, and maintenance.
                </div>
              </div>
            </div>
            
            {/* Scale Reference */}
            <div className="bg-muted p-4 rounded-lg">
              <h4 className="text-muted-foreground mb-2">Performance Scale</h4>
              <div className="space-y-1 text-xs text-muted-foreground">
                <div>10 = Excellent</div>
                <div>8 = Very Good</div>
                <div>6 = Good</div>
                <div>4 = Fair</div>
                <div>2 = Poor</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}