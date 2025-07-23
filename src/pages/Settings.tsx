
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Settings, User, Bell, Shield, Database, Globe } from 'lucide-react';

const SettingsPage = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    autoSave: true,
    mapProvider: 'mapbox',
    defaultRadius: 50,
    apiTimeout: 30,
    language: 'en'
  });

  const handleSettingChange = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
          <Settings className="h-8 w-8" />
          System Configuration
        </h1>
        <p className="text-lg text-muted-foreground">Manage your Wal-Map preferences and system settings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* General Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              General Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="notifications">Enable Notifications</Label>
              <Switch
                id="notifications"
                checked={settings.notifications}
                onCheckedChange={(checked) => handleSettingChange('notifications', checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="darkMode">Dark Mode</Label>
              <Switch
                id="darkMode"
                checked={settings.darkMode}
                onCheckedChange={(checked) => handleSettingChange('darkMode', checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="autoSave">Auto Save</Label>
              <Switch
                id="autoSave"
                checked={settings.autoSave}
                onCheckedChange={(checked) => handleSettingChange('autoSave', checked)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="language">Language</Label>
              <select
                id="language"
                className="w-full px-3 py-2 border border-input rounded-md"
                value={settings.language}
                onChange={(e) => handleSettingChange('language', e.target.value)}
              >
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="es">Spanish</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* API Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              API Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="mapProvider">Map Provider</Label>
              <select
                id="mapProvider"
                className="w-full px-3 py-2 border border-input rounded-md"
                value={settings.mapProvider}
                onChange={(e) => handleSettingChange('mapProvider', e.target.value)}
              >
                <option value="mapbox">Mapbox</option>
                <option value="google">Google Maps</option>
                <option value="openstreet">OpenStreetMap</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="defaultRadius">Default Search Radius (km)</Label>
              <Input
                id="defaultRadius"
                type="number"
                value={settings.defaultRadius}
                onChange={(e) => handleSettingChange('defaultRadius', parseInt(e.target.value))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="apiTimeout">API Timeout (seconds)</Label>
              <Input
                id="apiTimeout"
                type="number"
                value={settings.apiTimeout}
                onChange={(e) => handleSettingChange('apiTimeout', parseInt(e.target.value))}
              />
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Security & Privacy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full">
              Change Password
            </Button>
            <Button variant="outline" className="w-full">
              Enable Two-Factor Authentication
            </Button>
            <Button variant="outline" className="w-full">
              Download Data Export
            </Button>
            <Button variant="destructive" className="w-full">
              Delete Account
            </Button>
          </CardContent>
        </Card>

        {/* System Status */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              System Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Database Status</span>
              <span className="text-green-500 font-medium">Online</span>
            </div>
            <div className="flex justify-between items-center">
              <span>API Status</span>
              <span className="text-green-500 font-medium">Operational</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Last Backup</span>
              <span className="text-muted-foreground">2 hours ago</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Storage Used</span>
              <span className="text-muted-foreground">2.4 GB / 10 GB</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end gap-4">
        <Button variant="outline">Reset to Defaults</Button>
        <Button>Save Changes</Button>
      </div>
    </div>
  );
};

export default SettingsPage;
