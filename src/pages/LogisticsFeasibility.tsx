
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Truck, MapPin, Clock, DollarSign, Route, Package } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import MapComponent from '@/components/MapComponent';

const LogisticsFeasibility = () => {
  const [logisticsParams, setLogisticsParams] = useState({
    maxDeliveryTime: 60,
    fuelCostPerKm: 8.5,
    warehouseCapacity: 10000,
    vehicleType: 'small_truck'
  });

  const deliveryData = [
    { city: 'Mumbai', avgTime: 45, cost: 120, efficiency: 8.5, routes: 24 },
    { city: 'Delhi', avgTime: 52, cost: 110, efficiency: 8.2, routes: 28 },
    { city: 'Bangalore', avgTime: 38, cost: 95, efficiency: 9.1, routes: 18 },
    { city: 'Hyderabad', avgTime: 42, cost: 85, efficiency: 8.8, routes: 16 },
    { city: 'Chennai', avgTime: 48, cost: 105, efficiency: 8.0, routes: 22 },
    { city: 'Kolkata', avgTime: 55, cost: 90, efficiency: 7.5, routes: 20 }
  ];

  const routeOptimization = [
    { hour: '06:00', efficiency: 95, traffic: 30, cost: 85 },
    { hour: '09:00', efficiency: 70, traffic: 85, cost: 120 },
    { hour: '12:00', efficiency: 80, traffic: 60, cost: 100 },
    { hour: '15:00', efficiency: 75, traffic: 70, cost: 110 },
    { hour: '18:00', efficiency: 60, traffic: 95, cost: 140 },
    { hour: '21:00', efficiency: 90, traffic: 40, cost: 90 }
  ];

  const logisticsSpider = [
    { subject: 'Delivery Speed', A: 8.5, B: 7.2, fullMark: 10 },
    { subject: 'Cost Efficiency', A: 7.8, B: 8.9, fullMark: 10 },
    { subject: 'Route Coverage', A: 9.1, B: 6.8, fullMark: 10 },
    { subject: 'Infrastructure', A: 8.2, B: 7.5, fullMark: 10 },
    { subject: 'Accessibility', A: 7.9, B: 8.6, fullMark: 10 }
  ];

  const recommendations = [
    {
      id: 1,
      city: 'Bangalore',
      state: 'Karnataka',
      demandScore: 8.5,
      costIndex: 7.2,
      deliveryScore: 9.1,
      competitionRisk: 'Low',
      finalScore: 8.8,
      coordinates: [77.5946, 12.9716],
      sustainability: 'High',
      population: 8443675,
      avgDeliveryTime: 38,
      deliveryCost: 95
    },
    {
      id: 2,
      city: 'Hyderabad',
      state: 'Telangana',
      demandScore: 7.9,
      costIndex: 6.8,
      deliveryScore: 8.8,
      competitionRisk: 'Low',
      finalScore: 8.1,
      coordinates: [78.4867, 17.3850],
      sustainability: 'High',
      population: 6993262,
      avgDeliveryTime: 42,
      deliveryCost: 85
    }
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
          <Truck className="h-8 w-8" />
          Logistics Feasibility Analysis
        </h1>
        <p className="text-lg text-muted-foreground">Optimize delivery routes, costs, and distribution networks</p>
      </div>

      {/* Logistics Parameters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Route className="h-5 w-5" />
            Logistics Configuration
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="maxTime">Max Delivery Time (min)</Label>
              <Input
                id="maxTime"
                type="number"
                value={logisticsParams.maxDeliveryTime}
                onChange={(e) => setLogisticsParams({...logisticsParams, maxDeliveryTime: parseInt(e.target.value)})}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="fuelCost">Fuel Cost (₹/km)</Label>
              <Input
                id="fuelCost"
                type="number"
                step="0.1"
                value={logisticsParams.fuelCostPerKm}
                onChange={(e) => setLogisticsParams({...logisticsParams, fuelCostPerKm: parseFloat(e.target.value)})}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="capacity">Warehouse Capacity (units)</Label>
              <Input
                id="capacity"
                type="number"
                value={logisticsParams.warehouseCapacity}
                onChange={(e) => setLogisticsParams({...logisticsParams, warehouseCapacity: parseInt(e.target.value)})}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="vehicle">Vehicle Type</Label>
              <select
                id="vehicle"
                className="w-full px-3 py-2 border border-input rounded-md"
                value={logisticsParams.vehicleType}
                onChange={(e) => setLogisticsParams({...logisticsParams, vehicleType: e.target.value})}
              >
                <option value="bike">Bike</option>
                <option value="small_truck">Small Truck</option>
                <option value="large_truck">Large Truck</option>
              </select>
            </div>
          </div>
          <Button className="mt-4">Calculate Logistics Feasibility</Button>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Main Analytics */}
        <div className="xl:col-span-2 space-y-6">
          {/* Delivery Performance */}
          <Card>
            <CardHeader>
              <CardTitle>City-wise Delivery Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={deliveryData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="city" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="avgTime" fill="#8884d8" name="Avg Time (min)" />
                  <Bar dataKey="cost" fill="#82ca9d" name="Cost (₹)" />
                  <Bar dataKey="efficiency" fill="#ffc658" name="Efficiency Score" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Route Optimization */}
          <Card>
            <CardHeader>
              <CardTitle>24-Hour Route Optimization</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={routeOptimization}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="hour" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="efficiency" stroke="#8884d8" strokeWidth={3} name="Efficiency %" />
                  <Line type="monotone" dataKey="traffic" stroke="#ff7300" strokeWidth={3} name="Traffic Load %" />
                  <Line type="monotone" dataKey="cost" stroke="#82ca9d" strokeWidth={3} name="Cost Index" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Spider Web Analysis */}
          <Card>
            <CardHeader>
              <CardTitle>Logistics Performance Spider Web</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={logisticsSpider}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis angle={90} domain={[0, 10]} />
                  <Radar
                    name="Location A"
                    dataKey="A"
                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.3}
                    strokeWidth={2}
                  />
                  <Radar
                    name="Location B"
                    dataKey="B"
                    stroke="#82ca9d"
                    fill="#82ca9d"
                    fillOpacity={0.3}
                    strokeWidth={2}
                  />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Side Panel */}
        <div className="space-y-6">
          {/* Interactive Map */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Delivery Network Map
              </CardTitle>
            </CardHeader>
            <CardContent>
              <MapComponent recommendations={recommendations} />
            </CardContent>
          </Card>

          {/* Top Logistics Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                Best Logistics Hubs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recommendations.map((rec, index) => (
                  <div key={rec.id} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold">#{index + 1} {rec.city}</h3>
                        <p className="text-sm text-muted-foreground">{rec.state}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-green-600">{rec.deliveryScore}</div>
                        <div className="text-xs text-muted-foreground">Logistics Score</div>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Avg Delivery Time:</span>
                        <span className="font-medium">{rec.avgDeliveryTime} min</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Delivery Cost:</span>
                        <span className="font-medium">₹{rec.deliveryCost}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Competition Risk:</span>
                        <span className={`font-medium ${rec.competitionRisk === 'Low' ? 'text-green-600' : 'text-yellow-600'}`}>
                          {rec.competitionRisk}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <Clock className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                <div className="text-2xl font-bold">42 min</div>
                <div className="text-xs text-muted-foreground">Avg Delivery</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <DollarSign className="h-8 w-8 mx-auto mb-2 text-green-600" />
                <div className="text-2xl font-bold">₹98</div>
                <div className="text-xs text-muted-foreground">Avg Cost</div>
              </CardContent>
            </Card>
          </div>

          {/* Route Efficiency */}
          <Card>
            <CardHeader>
              <CardTitle>Route Efficiency</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Optimal Routes</span>
                  <span className="font-bold text-green-600">23/28</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Traffic Efficiency</span>
                  <span className="font-bold">78%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Fuel Savings</span>
                  <span className="font-bold text-green-600">₹12,450</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Coverage Area</span>
                  <span className="font-bold">847 km²</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LogisticsFeasibility;
