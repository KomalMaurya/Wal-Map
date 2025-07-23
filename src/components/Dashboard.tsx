
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MapPin, TrendingUp, DollarSign, Truck, Leaf } from 'lucide-react';
import MapComponent from './MapComponent';
import RecommendationsList from './RecommendationsList';
import MetricsOverview from './MetricsOverview';
import DataVisualization from './DataVisualization';

const Dashboard = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    budget: 1000000,
    radius: 50,
    productType: 'general',
    priority: 'demand'
  });

  const handleRecommendationRequest = async () => {
    setLoading(true);
    console.log('Requesting recommendations with filters:', filters);
    
    // Simulate API call - replace with actual Flask backend call
    setTimeout(() => {
      const mockRecommendations = [
        {
          id: 1,
          city: 'Bhopal',
          state: 'Madhya Pradesh',
          demandScore: 8.5,
          costIndex: 7.8,
          deliveryScore: 6.2,
          competitionRisk: 'Low',
          finalScore: 8.9,
          coordinates: [77.4126, 23.2599],
          sustainability: 'High',
          population: 1883381
        },
        {
          id: 2,
          city: 'Noida',
          state: 'Uttar Pradesh',
          demandScore: 7.9,
          costIndex: 8.0,
          deliveryScore: 9.1,
          competitionRisk: 'Medium',
          finalScore: 8.3,
          coordinates: [77.3910, 28.5355],
          sustainability: 'Medium',
          population: 642381
        },
        {
          id: 3,
          city: 'Nagpur',
          state: 'Maharashtra',
          demandScore: 7.2,
          costIndex: 6.9,
          deliveryScore: 8.4,
          competitionRisk: 'Low',
          finalScore: 7.5,
          coordinates: [79.0882, 21.1458],
          sustainability: 'High',
          population: 2497777
        }
      ];
      setRecommendations(mockRecommendations);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Dashboard Overview</h1>
        <p className="text-lg text-muted-foreground">AI-Powered Store Location Intelligence & Analytics</p>
      </div>

      {/* Filters Panel */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Location Analysis Parameters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="budget">Budget (₹)</Label>
              <Input
                id="budget"
                type="number"
                value={filters.budget}
                onChange={(e) => setFilters({...filters, budget: parseInt(e.target.value)})}
                placeholder="Investment budget"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="radius">Delivery Radius (km)</Label>
              <Input
                id="radius"
                type="number"
                value={filters.radius}
                onChange={(e) => setFilters({...filters, radius: parseInt(e.target.value)})}
                placeholder="Service radius"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="productType">Product Category</Label>
              <select
                id="productType"
                className="w-full px-3 py-2 border border-input rounded-md"
                value={filters.productType}
                onChange={(e) => setFilters({...filters, productType: e.target.value})}
              >
                <option value="general">General Retail</option>
                <option value="groceries">Groceries</option>
                <option value="electronics">Electronics</option>
                <option value="fashion">Fashion</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="priority">Priority Factor</Label>
              <select
                id="priority"
                className="w-full px-3 py-2 border border-input rounded-md"
                value={filters.priority}
                onChange={(e) => setFilters({...filters, priority: e.target.value})}
              >
                <option value="demand">Demand Forecasting</option>
                <option value="cost">Cost Optimization</option>
                <option value="logistics">Logistics Efficiency</option>
                <option value="sustainability">Sustainability</option>
              </select>
            </div>
          </div>
          <div className="mt-4">
            <Button 
              onClick={handleRecommendationRequest} 
              disabled={loading}
              className="w-full md:w-auto"
            >
              {loading ? 'Analyzing Locations...' : 'Generate Recommendations'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Metrics Overview */}
      <MetricsOverview recommendations={recommendations} />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Map Component */}
        <Card className="lg:col-span-1">
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

        {/* Recommendations List */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Top Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RecommendationsList recommendations={recommendations} loading={loading} />
          </CardContent>
        </Card>
      </div>

      {/* Data Visualization */}
      <DataVisualization recommendations={recommendations} />
    </div>
  );
};

export default Dashboard;
