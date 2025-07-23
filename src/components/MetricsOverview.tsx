
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { TrendingUp, DollarSign, MapPin, Leaf, Users, Truck } from 'lucide-react';

const MetricsOverview = ({ recommendations }) => {
  if (recommendations.length === 0) {
    return null;
  }

  const avgDemandScore = (recommendations.reduce((sum, rec) => sum + rec.demandScore, 0) / recommendations.length).toFixed(1);
  const avgCostIndex = (recommendations.reduce((sum, rec) => sum + rec.costIndex, 0) / recommendations.length).toFixed(1);
  const avgDeliveryScore = (recommendations.reduce((sum, rec) => sum + rec.deliveryScore, 0) / recommendations.length).toFixed(1);
  const totalPopulation = recommendations.reduce((sum, rec) => sum + rec.population, 0);
  const highSustainabilityCount = recommendations.filter(rec => rec.sustainability === 'High').length;
  const lowCompetitionCount = recommendations.filter(rec => rec.competitionRisk === 'Low').length;

  const metrics = [
    {
      title: 'Avg. Demand Score',
      value: avgDemandScore,
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Avg. Cost Index',
      value: avgCostIndex,
      icon: DollarSign,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Avg. Delivery Score',
      value: avgDeliveryScore,
      icon: Truck,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Market Reach',
      value: `${(totalPopulation / 1000000).toFixed(1)}M`,
      icon: Users,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      title: 'High Sustainability',
      value: `${highSustainabilityCount}/${recommendations.length}`,
      icon: Leaf,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Low Competition',
      value: `${lowCompetitionCount}/${recommendations.length}`,
      icon: MapPin,
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {metrics.map((metric, index) => (
        <Card key={index}>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className={`p-2 rounded-lg ${metric.bgColor}`}>
                <metric.icon className={`h-4 w-4 ${metric.color}`} />
              </div>
              <div>
                <p className="text-2xl font-bold">{metric.value}</p>
                <p className="text-xs text-muted-foreground">{metric.title}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MetricsOverview;
