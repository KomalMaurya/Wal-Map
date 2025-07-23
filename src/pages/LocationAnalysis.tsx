
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MapPin, Search, Star, Users, Building, Target } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ScatterChart, Scatter, LineChart, Line } from 'recharts';
import MapComponent from '@/components/MapComponent';

const LocationAnalysis = () => {
  const [analysisParams, setAnalysisParams] = useState({
    budget: 2000000,
    businessType: 'retail',
    targetRadius: 25,
    priorityFactor: 'accessibility'
  });

  const locationScores = [
    { city: 'Mumbai', accessibility: 9.2, infrastructure: 8.5, cost: 6.8, demographics: 9.1, finalScore: 8.4 },
    { city: 'Delhi', accessibility: 8.8, infrastructure: 8.2, cost: 7.1, demographics: 8.9, finalScore: 8.3 },
    { city: 'Bangalore', accessibility: 8.5, infrastructure: 9.1, cost: 7.8, demographics: 8.6, finalScore: 8.5 },
    { city: 'Hyderabad', accessibility: 8.1, infrastructure: 8.3, cost: 8.9, demographics: 7.8, finalScore: 8.3 },
    { city: 'Chennai', accessibility: 7.9, infrastructure: 7.8, cost: 8.2, demographics: 8.1, finalScore: 8.0 },
    { city: 'Pune', accessibility: 8.3, infrastructure: 8.0, cost: 8.5, demographics: 8.2, finalScore: 8.3 }
  ];

  const competitiveAnalysis = [
    { location: 'Zone A', competitors: 12, marketShare: 25, opportunity: 75 },
    { location: 'Zone B', competitors: 8, marketShare: 18, opportunity: 82 },
    { location: 'Zone C', competitors: 15, marketShare: 32, opportunity: 68 },
    { location: 'Zone D', competitors: 6, marketShare: 15, opportunity: 85 },
    { location: 'Zone E', competitors: 10, marketShare: 22, opportunity: 78 }
  ];

  const locationSpider = [
    { subject: 'Accessibility', A: 9.2, B: 8.1, fullMark: 10 },
    { subject: 'Infrastructure', A: 8.5, B: 8.9, fullMark: 10 },
    { subject: 'Cost Efficiency', A: 6.8, B: 8.3, fullMark: 10 },
    { subject: 'Demographics', A: 9.1, B: 7.8, fullMark: 10 },
    { subject: 'Growth Potential', A: 8.7, B: 8.5, fullMark: 10 }
  ];

  const footfallData = [
    { hour: '06:00', weekday: 120, weekend: 80 },
    { hour: '09:00', weekday: 450, weekend: 280 },
    { hour: '12:00', weekday: 680, weekend: 520 },
    { hour: '15:00', weekday: 520, weekend: 750 },
    { hour: '18:00', weekday: 890, weekend: 920 },
    { hour: '21:00', weekday: 650, weekend: 680 },
    { hour: '00:00', weekday: 180, weekend: 220 }
  ];

  const recommendations = [
    {
      id: 1,
      city: 'Bangalore',
      state: 'Karnataka',
      demandScore: 8.5,
      costIndex: 7.8,
      deliveryScore: 9.1,
      competitionRisk: 'Medium',
      finalScore: 8.5,
      coordinates: [77.5946, 12.9716],
      sustainability: 'High',
      population: 8443675,
      accessibilityScore: 8.5,
      infrastructureScore: 9.1
    },
    {
      id: 2,
      city: 'Mumbai',
      state: 'Maharashtra',
      demandScore: 9.2,
      costIndex: 6.8,
      deliveryScore: 8.2,
      competitionRisk: 'High',
      finalScore: 8.4,
      coordinates: [72.8777, 19.0760],
      sustainability: 'Medium',
      population: 12442373,
      accessibilityScore: 9.2,
      infrastructureScore: 8.5
    }
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
          <MapPin className="h-8 w-8" />
          AI-Powered Location Analysis
        </h1>
        <p className="text-lg text-muted-foreground">Comprehensive location intelligence and site selection optimization</p>
      </div>

      {/* Analysis Parameters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Location Analysis Configuration
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="budget">Investment Budget (₹)</Label>
              <Input
                id="budget"
                type="number"
                value={analysisParams.budget}
                onChange={(e) => setAnalysisParams({...analysisParams, budget: parseInt(e.target.value)})}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="businessType">Business Type</Label>
              <select
                id="businessType"
                className="w-full px-3 py-2 border border-input rounded-md"
                value={analysisParams.businessType}
                onChange={(e) => setAnalysisParams({...analysisParams, businessType: e.target.value})}
              >
                <option value="retail">Retail Store</option>
                <option value="warehouse">Warehouse</option>
                <option value="restaurant">Restaurant</option>
                <option value="office">Office Space</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="radius">Target Radius (km)</Label>
              <Input
                id="radius"
                type="number"
                value={analysisParams.targetRadius}
                onChange={(e) => setAnalysisParams({...analysisParams, targetRadius: parseInt(e.target.value)})}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="priority">Priority Factor</Label>
              <select
                id="priority"
                className="w-full px-3 py-2 border border-input rounded-md"
                value={analysisParams.priorityFactor}
                onChange={(e) => setAnalysisParams({...analysisParams, priorityFactor: e.target.value})}
              >
                <option value="accessibility">Accessibility</option>
                <option value="cost">Cost Optimization</option>
                <option value="demographics">Demographics</option>
                <option value="infrastructure">Infrastructure</option>
              </select>
            </div>
          </div>
          <Button className="mt-4">Run Location Analysis</Button>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Main Analysis Charts */}
        <div className="xl:col-span-2 space-y-6">
          {/* Location Scores */}
          <Card>
            <CardHeader>
              <CardTitle>Comprehensive Location Scoring</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={locationScores}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="city" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="accessibility" fill="#8884d8" name="Accessibility" />
                  <Bar dataKey="infrastructure" fill="#82ca9d" name="Infrastructure" />
                  <Bar dataKey="cost" fill="#ffc658" name="Cost Efficiency" />
                  <Bar dataKey="demographics" fill="#ff7300" name="Demographics" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Spider Web Comparison */}
          <Card>
            <CardHeader>
              <CardTitle>Location Performance Spider Web</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <RadarChart data={locationSpider}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis angle={90} domain={[0, 10]} />
                  <Radar
                    name="Mumbai"
                    dataKey="A"
                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.3}
                    strokeWidth={2}
                  />
                  <Radar
                    name="Hyderabad"
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

          {/* Competitive Analysis */}
          <Card>
            <CardHeader>
              <CardTitle>Competitive Landscape Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <ScatterChart data={competitiveAnalysis}>
                  <CartesianGrid />
                  <XAxis type="number" dataKey="competitors" name="Competitors" />
                  <YAxis type="number" dataKey="opportunity" name="Opportunity %" />
                  <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                  <Scatter name="Market Zones" dataKey="marketShare" fill="#8884d8" />
                </ScatterChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Footfall Patterns */}
          <Card>
            <CardHeader>
              <CardTitle>Predicted Footfall Patterns</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={footfallData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="hour" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="weekday" stroke="#8884d8" strokeWidth={3} name="Weekday Traffic" />
                  <Line type="monotone" dataKey="weekend" stroke="#82ca9d" strokeWidth={3} name="Weekend Traffic" />
                </LineChart>
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
                Optimal Locations Map
              </CardTitle>
            </CardHeader>
            <CardContent>
              <MapComponent recommendations={recommendations} />
            </CardContent>
          </Card>

          {/* Top Location Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                Top Location Picks
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
                        <div className="text-xl font-bold text-blue-600">{rec.finalScore}</div>
                        <div className="text-xs text-muted-foreground">Overall Score</div>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Accessibility:</span>
                        <span className="font-medium">{rec.accessibilityScore}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Infrastructure:</span>
                        <span className="font-medium">{rec.infrastructureScore}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Competition Risk:</span>
                        <span className={`font-medium ${rec.competitionRisk === 'Low' ? 'text-green-600' : rec.competitionRisk === 'Medium' ? 'text-yellow-600' : 'text-red-600'}`}>
                          {rec.competitionRisk}
                        </span>
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

          {/* Key Location Metrics */}
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <Users className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                <div className="text-2xl font-bold">2.4M</div>
                <div className="text-xs text-muted-foreground">Target Population</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Building className="h-8 w-8 mx-auto mb-2 text-green-600" />
                <div className="text-2xl font-bold">847</div>
                <div className="text-xs text-muted-foreground">Available Sites</div>
              </CardContent>
            </Card>
          </div>

          {/* Location Insights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Key Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Best Accessibility</span>
                  <span className="font-bold text-blue-600">Mumbai</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Most Cost Effective</span>
                  <span className="font-bold text-green-600">Hyderabad</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Peak Footfall Hour</span>
                  <span className="font-bold">18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Avg. Setup Cost</span>
                  <span className="font-bold">₹18.5L</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Market Saturation</span>
                  <span className="font-bold text-yellow-600">Medium</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LocationAnalysis;
