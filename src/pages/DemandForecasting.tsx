
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { TrendingUp, Calendar, Target, BarChart3, Activity, MapPin } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ComposedChart } from 'recharts';
import MapComponent from '@/components/MapComponent';

const DemandForecasting = () => {
  const [forecastParams, setForecastParams] = useState({
    timeHorizon: 12,
    seasonality: 'quarterly',
    productCategory: 'general',
    confidenceLevel: 95
  });

  const demandTrends = [
    { month: 'Jan', actual: 2400, predicted: 2380, upper: 2520, lower: 2240 },
    { month: 'Feb', actual: 1398, predicted: 1420, upper: 1580, lower: 1260 },
    { month: 'Mar', actual: 3800, predicted: 3750, upper: 3950, lower: 3550 },
    { month: 'Apr', actual: 3908, predicted: 3880, upper: 4100, lower: 3660 },
    { month: 'May', actual: 4800, predicted: 4820, upper: 5080, lower: 4560 },
    { month: 'Jun', actual: 3800, predicted: 3750, upper: 3980, lower: 3520 },
    { month: 'Jul', actual: null, predicted: 4200, upper: 4480, lower: 3920 },
    { month: 'Aug', actual: null, predicted: 4650, upper: 4950, lower: 4350 },
    { month: 'Sep', actual: null, predicted: 4100, upper: 4380, lower: 3820 },
    { month: 'Oct', actual: null, predicted: 3900, upper: 4180, lower: 3620 },
    { month: 'Nov', actual: null, predicted: 4300, upper: 4600, lower: 4000 },
    { month: 'Dec', actual: null, predicted: 5200, upper: 5520, lower: 4880 }
  ];

  const cityDemand = [
    { city: 'Mumbai', currentDemand: 4800, forecastedDemand: 5200, growth: 8.3, marketSize: 12.4 },
    { city: 'Delhi', currentDemand: 4200, forecastedDemand: 4650, growth: 10.7, marketSize: 11.8 },
    { city: 'Bangalore', currentDemand: 3800, forecastedDemand: 4300, growth: 13.2, marketSize: 8.9 },
    { city: 'Hyderabad', currentDemand: 2900, forecastedDemand: 3400, growth: 17.2, marketSize: 6.2 },
    { city: 'Chennai', currentDemand: 3200, forecastedDemand: 3650, growth: 14.1, marketSize: 7.1 },
    { city: 'Kolkata', currentDemand: 2600, forecastedDemand: 2850, growth: 9.6, marketSize: 5.8 }
  ];

  const demandFactors = [
    { factor: 'Population', impact: 9.2, trend: 'Increasing' },
    { factor: 'Income Level', impact: 8.7, trend: 'Increasing' },
    { factor: 'Competition', impact: 7.3, trend: 'Stable' },
    { factor: 'Seasonality', impact: 6.8, trend: 'Cyclical' },
    { factor: 'Marketing', impact: 8.1, trend: 'Variable' },
    { factor: 'Infrastructure', impact: 7.9, trend: 'Improving' }
  ];

  const demandSpider = [
    { subject: 'Market Size', A: 8.5, B: 7.2, fullMark: 10 },
    { subject: 'Growth Rate', A: 9.1, B: 6.8, fullMark: 10 },
    { subject: 'Purchasing Power', A: 7.8, B: 8.9, fullMark: 10 },
    { subject: 'Competition Level', A: 6.2, B: 8.3, fullMark: 10 },
    { subject: 'Accessibility', A: 8.7, B: 7.5, fullMark: 10 }
  ];

  const recommendations = [
    {
      id: 1,
      city: 'Hyderabad',
      state: 'Telangana',
      demandScore: 9.1,
      costIndex: 6.8,
      deliveryScore: 8.1,
      competitionRisk: 'Low',
      finalScore: 8.7,
      coordinates: [78.4867, 17.3850],
      sustainability: 'High',
      population: 6993262,
      forecastedGrowth: 17.2,
      marketPotential: 'Very High'
    },
    {
      id: 2,
      city: 'Bangalore',
      state: 'Karnataka',
      demandScore: 8.8,
      costIndex: 7.2,
      deliveryScore: 8.8,
      competitionRisk: 'Medium',
      finalScore: 8.5,
      coordinates: [77.5946, 12.9716],
      sustainability: 'High',
      population: 8443675,
      forecastedGrowth: 13.2,
      marketPotential: 'High'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
          <TrendingUp className="h-8 w-8" />
          Demand Forecasting & Market Analysis
        </h1>
        <p className="text-lg text-muted-foreground">AI-powered demand prediction and market trend analysis</p>
      </div>

      {/* Forecast Parameters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Forecasting Configuration
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="timeHorizon">Time Horizon (months)</Label>
              <Input
                id="timeHorizon"
                type="number"
                value={forecastParams.timeHorizon}
                onChange={(e) => setForecastParams({...forecastParams, timeHorizon: parseInt(e.target.value)})}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="seasonality">Seasonality Pattern</Label>
              <select
                id="seasonality"
                className="w-full px-3 py-2 border border-input rounded-md"
                value={forecastParams.seasonality}
                onChange={(e) => setForecastParams({...forecastParams, seasonality: e.target.value})}
              >
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="annual">Annual</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Product Category</Label>
              <select
                id="category"
                className="w-full px-3 py-2 border border-input rounded-md"
                value={forecastParams.productCategory}
                onChange={(e) => setForecastParams({...forecastParams, productCategory: e.target.value})}
              >
                <option value="general">General Retail</option>
                <option value="groceries">Groceries</option>
                <option value="electronics">Electronics</option>
                <option value="fashion">Fashion</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="confidence">Confidence Level (%)</Label>
              <Input
                id="confidence"
                type="number"
                value={forecastParams.confidenceLevel}
                onChange={(e) => setForecastParams({...forecastParams, confidenceLevel: parseInt(e.target.value)})}
              />
            </div>
          </div>
          <Button className="mt-4">Generate Demand Forecast</Button>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Main Charts */}
        <div className="xl:col-span-2 space-y-6">
          {/* Demand Trend Forecast */}
          <Card>
            <CardHeader>
              <CardTitle>Demand Forecast with Confidence Intervals</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <ComposedChart data={demandTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area dataKey="upper" fill="#e0f2fe" stroke="none" name="Upper Bound" />
                  <Area dataKey="lower" fill="#ffffff" stroke="none" name="Lower Bound" />
                  <Line type="monotone" dataKey="actual" stroke="#1976d2" strokeWidth={3} name="Actual Demand" />
                  <Line type="monotone" dataKey="predicted" stroke="#f57c00" strokeWidth={3} strokeDasharray="5 5" name="Predicted Demand" />
                </ComposedChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* City-wise Demand Analysis */}
          <Card>
            <CardHeader>
              <CardTitle>City-wise Demand Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={cityDemand}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="city" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="currentDemand" fill="#8884d8" name="Current Demand" />
                  <Bar dataKey="forecastedDemand" fill="#82ca9d" name="Forecasted Demand" />
                  <Bar dataKey="growth" fill="#ffc658" name="Growth %" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Spider Web Analysis */}
          <Card>
            <CardHeader>
              <CardTitle>Market Potential Spider Web Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={demandSpider}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis angle={90} domain={[0, 10]} />
                  <Radar
                    name="High Growth Market"
                    dataKey="A"
                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.3}
                    strokeWidth={2}
                  />
                  <Radar
                    name="Established Market"
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
                High Demand Markets
              </CardTitle>
            </CardHeader>
            <CardContent>
              <MapComponent recommendations={recommendations} />
            </CardContent>
          </Card>

          {/* Top Demand Markets */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Top Growth Markets
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
                        <div className="text-xl font-bold text-green-600">+{rec.forecastedGrowth}%</div>
                        <div className="text-xs text-muted-foreground">Projected Growth</div>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Demand Score:</span>
                        <span className="font-medium">{rec.demandScore}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Market Potential:</span>
                        <span className="font-medium text-green-600">{rec.marketPotential}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Population:</span>
                        <span className="font-medium">{(rec.population / 1000000).toFixed(1)}M</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Demand Factors */}
          <Card>
            <CardHeader>
              <CardTitle>Key Demand Factors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {demandFactors.slice(0, 4).map((factor, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <div className="font-medium text-sm">{factor.factor}</div>
                      <div className="text-xs text-muted-foreground">{factor.trend}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">{factor.impact}</div>
                      <div className="text-xs text-muted-foreground">Impact Score</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Forecast Summary */}
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <TrendingUp className="h-8 w-8 mx-auto mb-2 text-green-600" />
                <div className="text-2xl font-bold text-green-600">+13.4%</div>
                <div className="text-xs text-muted-foreground">Avg Growth</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Calendar className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                <div className="text-2xl font-bold">5.2K</div>
                <div className="text-xs text-muted-foreground">Peak Demand</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemandForecasting;
