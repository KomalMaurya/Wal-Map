
import React, { useState } from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const MapComponent = ({ recommendations}) => {
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      setShowTokenInput(false);
      console.log('Mapbox token set:', mapboxToken.substring(0, 10) + '...');
    }
  };

  if (showTokenInput) {
    return (
      <div className="h-96 flex flex-col items-center justify-center space-y-4 bg-muted rounded-lg">
        <MapPin className="h-12 w-12 text-muted-foreground" />
        <div className="text-center space-y-2">
          <h3 className="font-semibold">Interactive Map</h3>
          <p className="text-sm text-muted-foreground">
            Enter place to view the interactive map
          </p>
        </div>
        <div className="flex gap-2 w-full max-w-md">
          <Input
            placeholder="Nagpur, Maharashtra"
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
            className="flex-1"
          />
          <Button onClick={handleTokenSubmit}>
            <Navigation className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-xs text-muted-foreground text-center">
          Get your token from{' '}
          <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            mapbox.com
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="h-96 bg-muted rounded-lg relative overflow-hidden">
      {/* Map placeholder with location markers */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
        <div className="text-center space-y-2">
          <MapPin className="h-8 w-8 text-blue-600 mx-auto" />
          <p className="text-sm font-medium">Interactive Map Loaded</p>
          <p className="text-xs text-muted-foreground">
            {recommendations.length} recommendations plotted
          </p>
        </div>
      </div>
      
      {/* Mock location pins */}
      {recommendations.map((rec, index) => (
        <div
          key={rec.id}
          className="absolute"
          style={{
            left: `${20 + index * 25}%`,
            top: `${30 + index * 15}%`,
          }}
        >
          <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold shadow-lg">
            {index + 1}
          </div>
          <div className="mt-1 text-xs bg-white px-2 py-1 rounded shadow text-center min-w-20">
            {rec.city}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MapComponent;
