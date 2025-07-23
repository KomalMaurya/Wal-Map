
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Leaf, TreePine, Zap, Truck, Droplets, Recycle, TrendingUp, AlertTriangle } from 'lucide-react';

const SustainabilityMetrics = () => {
  const [selectedCity, setSelectedCity] = useState('Delhi');

  // Mock sustainability data
  const sustainabilityData = {
    Delhi: {
      carbonFootprint: 85,
      renewableEnergy: 35,
      wasteReduction: 68,
      waterUsage: 72,
      greenTransport: 45,
      overallScore: 61,
      grade: 'B-'
    },
    Mumbai: {
      carbonFootprint: 78,
      renewableEnergy: 42,
      wasteReduction: 71,
      waterUsage: 69,
      greenTransport: 58,
      overallScore: 64,
      grade: 'B'
    },
    Bangalore: {
      carbonFootprint: 65,
      renewableEnergy: 55,
      wasteReduction: 75,
      waterUsage: 78,
      greenTransport: 67,
      overallScore: 68,
      grade: 'B+'
    }
  };

  const carbonEmissionData = [
    { month: 'Jan', emissions: 45, target: 40 },
    { month: 'Feb', emissions: 42, target: 40 },
    { month: 'Mar', emissions: 38, target: 40 },
    { month: 'Apr', emissions: 41, target: 40 },
    { month: 'May', emissions: 39, target: 40 },
    { month: 'Jun', emissions: 36, target: 40 }
  ];

  const energyMixData = [
    { name: 'Solar', value: 35, color: '#fbbf24' },
    { name: 'Wind', value: 20, color: '#60a5fa' },
    { name: 'Grid (Green)', value: 15, color: '#34d399' },
    { name: 'Grid (Fossil)', value: 30, color: '#f87171' }
  ];

  const wasteManagementData = [
    { category: 'Recycled', percentage: 65, amount: '1,200 kg', color: '#10b981' },
    { category: 'Composted', percentage: 20, amount: '380 kg', color: '#8b5cf6' },
    { category: 'Landfill', percentage: 15, amount: '285 kg', color: '#f59e0b' }
  ];

  const currentData = sustainabilityData[selectedCity];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Sustainability Metrics</h1>
          <p className="text-gray-600 mt-2">Environmental impact analysis and green initiatives tracking</p>
        </div>
        <div className="flex gap-2">
          {Object.keys(sustainabilityData).map((city) => (
            <Button
              key={city}
              variant={selectedCity === city ? "default" : "outline"}
              onClick={() => setSelectedCity(city)}
              className="min-w-20"
            >
              {city}
            </Button>
          ))}
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall Score</CardTitle>
            <Leaf className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{currentData.overallScore}%</div>
            <Badge variant={currentData.grade.includes('+') ? 'default' : 'secondary'} className="mt-2">
              Grade {currentData.grade}
            </Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Carbon Reduction</CardTitle>
            <TreePine className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{currentData.carbonFootprint}%</div>
            <p className="text-xs text-muted-foreground">vs industry average</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Renewable Energy</CardTitle>
            <Zap className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{currentData.renewableEnergy}%</div>
            <p className="text-xs text-muted-foreground">of total consumption</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Waste Reduction</CardTitle>
            <Recycle className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{currentData.wasteReduction}%</div>
            <p className="text-xs text-muted-foreground">diverted from landfill</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Metrics */}
      <Tabs defaultValue="carbon" className="space-y-4">
        <TabsList>
          <TabsTrigger value="carbon">Carbon Footprint</TabsTrigger>
          <TabsTrigger value="energy">Energy Mix</TabsTrigger>
          <TabsTrigger value="waste">Waste Management</TabsTrigger>
          <TabsTrigger value="impact">Environmental Impact</TabsTrigger>
        </TabsList>

        <TabsContent value="carbon" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Carbon Emissions Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={carbonEmissionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="emissions" stroke="#f87171" name="Actual Emissions" />
                    <Line type="monotone" dataKey="target" stroke="#10b981" name="Target" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Emission Sources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Transportation</span>
                    <span>40%</span>
                  </div>
                  <Progress value={40} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Energy Consumption</span>
                    <span>35%</span>
                  </div>
                  <Progress value={35} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Packaging</span>
                    <span>15%</span>
                  </div>
                  <Progress value={15} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Other Operations</span>
                    <span>10%</span>
                  </div>
                  <Progress value={10} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="energy" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Energy Mix Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={energyMixData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent ?? 0* 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {energyMixData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Green Energy Initiatives</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <Zap className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">Solar Panel Installation</p>
                    <p className="text-sm text-gray-600">12 MW capacity installed</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <TreePine className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Wind Energy Partnership</p>
                    <p className="text-sm text-gray-600">8 MW from wind farms</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-yellow-600" />
                  <div>
                    <p className="font-medium">Energy Efficiency</p>
                    <p className="text-sm text-gray-600">20% reduction in consumption</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="waste" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Waste Management Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {wasteManagementData.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{item.category}</span>
                      <div className="text-right">
                        <span className="font-bold">{item.percentage}%</span>
                        <span className="text-sm text-gray-600 ml-2">({item.amount})</span>
                      </div>
                    </div>
                    <Progress value={item.percentage} className="h-3" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Waste Reduction Goals</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span>Plastic Packaging Reduction</span>
                    <Badge variant="outline">85% Complete</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span>Food Waste Minimization</span>
                    <Badge variant="outline">72% Complete</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span>Zero Waste to Landfill</span>
                    <Badge variant="outline">63% Complete</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="impact" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Droplets className="h-5 w-5 text-blue-600" />
                  Water Conservation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-2">{currentData.waterUsage}%</div>
                <p className="text-sm text-gray-600 mb-4">Efficiency improvement</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Rainwater Harvesting</span>
                    <span>Active</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Water Recycling</span>
                    <span>85% Rate</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-green-600" />
                  Green Transportation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-2">{currentData.greenTransport}%</div>
                <p className="text-sm text-gray-600 mb-4">Electric/Hybrid fleet</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Electric Vehicles</span>
                    <span>25 units</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Route Optimization</span>
                    <span>15% savings</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-orange-600" />
                  Environmental Risks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-2 bg-red-50 rounded">
                    <span className="text-sm">Air Quality Impact</span>
                    <Badge variant="destructive">High</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-yellow-50 rounded">
                    <span className="text-sm">Water Pollution Risk</span>
                    <Badge variant="secondary">Low</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                    <span className="text-sm">Soil Contamination</span>
                    <Badge variant="outline">Minimal</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SustainabilityMetrics;
