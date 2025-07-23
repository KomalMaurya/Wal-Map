
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Database, Upload, Download, RefreshCw, FileText, BarChart3 } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const DataManagement = () => {
  const [datasets] = useState([
    { id: 1, name: 'City Demographics', size: '2.4 MB', lastUpdated: '2 hours ago', status: 'Active' },
    { id: 2, name: 'Competitor Locations', size: '1.8 MB', lastUpdated: '1 day ago', status: 'Active' },
    { id: 3, name: 'Population Data', size: '5.2 MB', lastUpdated: '3 days ago', status: 'Outdated' },
    { id: 4, name: 'Infrastructure Costs', size: '890 KB', lastUpdated: '1 week ago', status: 'Active' }
  ]);

  const dataUsage = [
    { name: 'Jan', usage: 1200 },
    { name: 'Feb', usage: 1900 },
    { name: 'Mar', usage: 1600 },
    { name: 'Apr', usage: 2100 },
    { name: 'May', usage: 1800 },
    { name: 'Jun', usage: 2400 }
  ];

  const storageData = [
    { name: 'Demographic Data', value: 30, color: '#8884d8' },
    { name: 'Location Data', value: 25, color: '#82ca9d' },
    { name: 'Economic Data', value: 20, color: '#ffc658' },
    { name: 'Infrastructure', value: 15, color: '#ff7300' },
    { name: 'Other', value: 10, color: '#00c49f' }
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
          <Database className="h-8 w-8" />
          Data Management
        </h1>
        <p className="text-lg text-muted-foreground">Manage datasets, imports, and data quality for location intelligence</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Button className="h-20 flex flex-col gap-2">
          <Upload className="h-6 w-6" />
          Upload Dataset
        </Button>
        <Button variant="outline" className="h-20 flex flex-col gap-2">
          <Download className="h-6 w-6" />
          Export Data
        </Button>
        <Button variant="outline" className="h-20 flex flex-col gap-2">
          <RefreshCw className="h-6 w-6" />
          Sync All
        </Button>
        <Button variant="outline" className="h-20 flex flex-col gap-2">
          <BarChart3 className="h-6 w-6" />
          Generate Report
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Data Usage Trends */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Data Usage Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dataUsage}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="usage" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Storage Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Storage Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={storageData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent ??0 * 100).toFixed(0)}%`}
                >
                  {storageData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Dataset Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Active Datasets
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left">Dataset Name</th>
                  <th className="border border-border p-3 text-left">Size</th>
                  <th className="border border-border p-3 text-left">Last Updated</th>
                  <th className="border border-border p-3 text-left">Status</th>
                  <th className="border border-border p-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {datasets.map((dataset) => (
                  <tr key={dataset.id} className="hover:bg-muted/50">
                    <td className="border border-border p-3">{dataset.name}</td>
                    <td className="border border-border p-3">{dataset.size}</td>
                    <td className="border border-border p-3">{dataset.lastUpdated}</td>
                    <td className="border border-border p-3">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        dataset.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {dataset.status}
                      </span>
                    </td>
                    <td className="border border-border p-3">
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Edit</Button>
                        <Button size="sm" variant="outline">Download</Button>
                        <Button size="sm" variant="destructive">Delete</Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Data Quality Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">96%</div>
              <div className="text-sm text-muted-foreground">Data Quality Score</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">2.4TB</div>
              <div className="text-sm text-muted-foreground">Total Storage Used</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">847</div>
              <div className="text-sm text-muted-foreground">Active Records</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DataManagement;
