
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Minus, MapPin, Users, Truck } from 'lucide-react';

const RecommendationsList = ({ recommendations, loading }) => {
  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="animate-pulse">
            <div className="h-24 bg-muted rounded-lg"></div>
          </div>
        ))}
      </div>
    );
  }

  if (recommendations.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        <MapPin className="h-12 w-12 mx-auto mb-4 opacity-50" />
        <p>Click "Generate Recommendations" to analyze optimal locations</p>
      </div>
    );
  }

  const getRiskColor = (risk) => {
    switch (risk?.toLowerCase()) {
      case 'low': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'high': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getScoreIcon = (score) => {
    if (score >= 8) return <TrendingUp className="h-4 w-4 text-green-600" />;
    if (score >= 6) return <Minus className="h-4 w-4 text-yellow-600" />;
    return <TrendingDown className="h-4 w-4 text-red-600" />;
  };

  return (
    <div className="space-y-4 max-h-96 overflow-y-auto">
      {recommendations
        .sort((a, b) => b.finalScore - a.finalScore)
        .map((rec, index) => (
          <div key={rec.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold text-lg">#{index + 1}</span>
                  <h3 className="font-semibold text-lg">{rec.city}</h3>
                  <span className="text-sm text-muted-foreground">{rec.state}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                  <div className="flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    <span>Demand: {rec.demandScore}/10</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Truck className="h-3 w-3" />
                    <span>Delivery: {rec.deliveryScore}/10</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>Pop: {(rec.population / 1000000).toFixed(1)}M</span>
                  </div>
                  <div>
                    <span>Cost Index: {rec.costIndex}/10</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Badge className={getRiskColor(rec.competitionRisk)}>
                    {rec.competitionRisk} Competition
                  </Badge>
                  <Badge variant="outline">
                    {rec.sustainability} Sustainability
                  </Badge>
                </div>
              </div>
              
              <div className="text-right">
                <div className="flex items-center gap-1 mb-1">
                  {getScoreIcon(rec.finalScore)}
                  <span className="text-2xl font-bold">{rec.finalScore}</span>
                </div>
                <p className="text-xs text-muted-foreground">Final Score</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RecommendationsList;
