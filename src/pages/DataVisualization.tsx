
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, PieChart, Activity, TrendingUp, MapPin } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, LineChart, Line, PieChart as RechartsPieChart, Pie, Cell, ScatterChart, Scatter } from 'recharts';
import MapComponent from '@/components/MapComponent';

const DataVisualizationPage = () => {
  const [activeChart, setActiveChart] = useState('overview');

  const cityData = [
    { city: 'Mumbai', demand: 9.2, cost: 8.5, logistics: 7.8, competition: 8.9, population: 12442373 },
    { city: 'Delhi', demand: 8.8, cost: 7.9, logistics: 8.2, competition: 9.1, population: 11007835 },
    { city: 'Bangalore', demand: 8.5, cost: 7.2, logistics: 8.8, competition: 8.3, population: 8443675 },
    { city: 'Hyderabad', demand: 7.9, cost: 6.8, logistics: 8.1, competition: 7.5, population: 6993262 },
    { city: 'Chennai', demand: 7.6, cost: 7.1, logistics: 7.9, competition: 8.0, population: 4681087 },
    { city: 'Kolkata', demand: 7.3, cost: 6.2, logistics: 6.8, competition: 7.2, population: 4496694 }
  ];

  const radarData = [
    { subject: 'Demand Score', A: 8.5, B: 7.9, fullMark: 10 },
    { subject: 'Cost Index', A: 7.8, B: 8.0, fullMark: 10 },
    { subject: 'Logistics', A: 6.2, B: 9.1, fullMark: 10 },
    { subject: 'Competition', A: 8.9, B: 6.3, fullMark: 10 },
    { subject: 'Infrastructure', A: 7.5, B: 8.2, fullMark: 10 }
  ];

  const trendData = [
    { month: 'Jan', demand: 65, supply: 28, growth: 12 },
    { month: 'Feb', demand: 78, supply: 35, growth: 18 },
    { month: 'Mar', demand: 82, supply: 42, growth: 22 },
    { month: 'Apr', demand: 91, supply: 48, growth: 28 },
    { month: 'May', demand: 87, supply: 52, growth: 25 },
    { month: 'Jun', demand: 95, supply: 58, growth: 32 }
  ];

  const pieData = [
    { name: 'High Potential', value: 35, color: '#0088FE' },
    { name: 'Medium Potential', value: 45, color: '#00C49F' },
    { name: 'Low Potential', value: 20, color: '#FFBB28' }
  ];

  const scatterData = [
    { x: 7.5, y: 8.2, z: 12000000, city: 'Mumbai' },
    { x: 8.1, y: 7.9, z: 11000000, city: 'Delhi' },
    { x: 7.8, y: 8.5, z: 8400000, city: 'Bangalore' },
    { x: 6.9, y: 7.8, z: 7000000, city: 'Hyderabad' },
    { x: 7.2, y: 7.6, z: 4700000, city: 'Chennai' },
    { x: 6.5, y: 7.3, z: 4500000, city: 'Kolkata' }
  ];

  const recommendations = [
    {
      id: 1,
      city: 'Mumbai',
      state: 'Maharashtra',
      demandScore: 9.2,
      costIndex: 8.5,
      deliveryScore: 7.8,
      competitionRisk: 'High',
      finalScore: 8.9,
      coordinates: [72.8777, 19.0760],
      sustainability: 'Medium',
      population: 12442373
    },
    {
      id: 2,
      city: 'Bangalore',
      state: 'Karnataka',
      demandScore: 8.5,
      costIndex: 7.2,
      deliveryScore: 8.8,
      competitionRisk: 'Medium',
      finalScore: 8.3,
      coordinates: [77.5946, 12.9716],
      sustainability: 'High',
      population: 8443675
    }
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
          <BarChart3 className="h-8 w-8" />
          Data Visualization & Analytics
        </h1>
        <p className="text-lg text-muted-foreground">Interactive charts, graphs, and insights for location intelligence</p>
      </div>

      {/* Chart Selection */}
      <div className="flex flex-wrap gap-2">
        {[
          { id: 'overview', label: 'Overview', icon: BarChart3 },
          { id: 'trends', label: 'Trends', icon: TrendingUp },
          { id: 'comparison', label: 'Spider Web', icon: Activity },
          { id: 'distribution', label: 'Distribution', icon: PieChart },
          { id: 'correlation', label: 'Correlation', icon: Activity }
        ].map(({ id, label, icon: Icon }) => (
          <Button
            key={id}
            variant={activeChart === id ? 'default' : 'outline'}
            onClick={() => setActiveChart(id)}
            className="flex items-center gap-2"
          >
            <Icon className="h-4 w-4" />
            {label}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Main Chart Area */}
        <div className="xl:col-span-2">
          {activeChart === 'overview' && (
            <Card>
              <CardHeader>
                <CardTitle>City Performance Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={cityData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="city" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="demand" fill="#8884d8" name="Demand Score" />
                    <Bar dataKey="cost" fill="#82ca9d" name="Cost Index" />
                    <Bar dataKey="logistics" fill="#ffc658" name="Logistics Score" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          )}

          {activeChart === 'trends' && (
            <Card>
              <CardHeader>
                <CardTitle>Market Trends Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={trendData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="demand" stroke="#8884d8" strokeWidth={3} name="Demand" />
                    <Line type="monotone" dataKey="supply" stroke="#82ca9d" strokeWidth={3} name="Supply" />
                    <Line type="monotone" dataKey="growth" stroke="#ffc658" strokeWidth={3} name="Growth %" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          )}

          {activeChart === 'comparison' && (
            <Card>
              <CardHeader>
                <CardTitle>Spider Web Comparison Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <RadarChart data={radarData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={90} domain={[0, 10]} />
                    <Radar
                      name="Top City"
                      dataKey="A"
                      stroke="#8884d8"
                      fill="#8884d8"
                      fillOpacity={0.3}
                      strokeWidth={2}
                    />
                    <Radar
                      name="Second City"
                      dataKey="B"
                      stroke="#82ca9d"
                      fill="#82ca9d"
                      fillOpacity={0.3}
                      strokeWidth={2}
                    />
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          )}

          {activeChart === 'distribution' && (
            <Card>
              <CardHeader>
                <CardTitle>Location Potential Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <RechartsPieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent ?? 0* 100).toFixed(0)}%`}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          )}

          {activeChart === 'correlation' && (
            <Card>
              <CardHeader>
                <CardTitle>Cost vs Demand Correlation</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <ScatterChart data={scatterData}>
                    <CartesianGrid />
                    <XAxis type="number" dataKey="x" name="Cost Index" />
                    <YAxis type="number" dataKey="y" name="Demand Score" />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Scatter name="Cities" dataKey="z" fill="#8884d8" />
                  </ScatterChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Side Panel */}
        <div className="space-y-6">
          {/* Interactive Map */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Location Map
              </CardTitle>
            </CardHeader>
            <CardContent>
              <MapComponent recommendations={recommendations} />
            </CardContent>
          </Card>

          {/* Top Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle>Top Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recommendations.map((rec, index) => (
                  <div key={rec.id} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">#{index + 1} {rec.city}</h3>
                        <p className="text-sm text-muted-foreground">{rec.state}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">{rec.finalScore}</div>
                        <div className="text-xs text-muted-foreground">Final Score</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>Demand: <span className="font-medium">{rec.demandScore}</span></div>
                      <div>Cost: <span className="font-medium">{rec.costIndex}</span></div>
                      <div>Delivery: <span className="font-medium">{rec.deliveryScore}</span></div>
                      <div>Risk: <span className="font-medium">{rec.competitionRisk}</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Key Metrics */}
          <Card>
            <CardHeader>
              <CardTitle>Key Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Avg Demand Score</span>
                  <span className="font-bold">8.2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Best Cost City</span>
                  <span className="font-bold">Hyderabad</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Highest Growth</span>
                  <span className="font-bold text-green-600">+32%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Total Markets</span>
                  <span className="font-bold">847</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DataVisualizationPage;
