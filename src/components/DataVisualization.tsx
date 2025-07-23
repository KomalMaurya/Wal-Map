
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, LineChart, Line } from 'recharts';
import { TrendingUp, BarChart3, Activity } from 'lucide-react';

const DataVisualization = ({ recommendations }) => {
  if (recommendations.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Data Analytics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center text-muted-foreground">
            Generate recommendations to view analytics
          </div>
        </CardContent>
      </Card>
    );
  }

  // Prepare data for different charts
  const barChartData = recommendations.map(rec => ({
    city: rec.city,
    demandScore: rec.demandScore,
    costIndex: rec.costIndex,
    deliveryScore: rec.deliveryScore,
    finalScore: rec.finalScore
  }));

  const radarChartData = recommendations.slice(0, 3).map(rec => [
    { subject: 'Demand', value: rec.demandScore },
    { subject: 'Cost', value: rec.costIndex },
    { subject: 'Delivery', value: rec.deliveryScore },
    { subject: 'Population', value: (rec.population / 1000000) * 2 }, // Normalized
    { subject: 'Final Score', value: rec.finalScore }
  ]);

  const trendData = recommendations.map((rec, index) => ({
    month: `Month ${index + 1}`,
    demand: rec.demandScore + Math.random() * 2 - 1,
    competition: rec.competitionRisk === 'Low' ? 3 : rec.competitionRisk === 'Medium' ? 6 : 9
  }));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {/* Score Comparison Bar Chart */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Score Comparison
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="city" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="demandScore" fill="#8884d8" name="Demand Score" />
              <Bar dataKey="costIndex" fill="#82ca9d" name="Cost Index" />
              <Bar dataKey="deliveryScore" fill="#ffc658" name="Delivery Score" />
              <Bar dataKey="finalScore" fill="#ff7300" name="Final Score" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Trend Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Demand Trends
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="demand" stroke="#8884d8" name="Demand Forecast" />
              <Line type="monotone" dataKey="competition" stroke="#82ca9d" name="Competition Level" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Radar Charts for Top Cities */}
      {radarChartData.map((data, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              {recommendations[index].city} Profile
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <RadarChart data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={90} domain={[0, 10]} />
                <Radar
                  name={recommendations[index].city}
                  dataKey="value"
                  stroke="#8884d8"
                  fill="#8884d8"
                  fillOpacity={0.3}
                />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DataVisualization;
