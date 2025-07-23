
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
//   SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from '@/components/ui/sidebar';
import { 
  Home, 
  MapPin, 
  TrendingUp, 
  BarChart3, 
  Settings, 
  Database,
  Target,
  Activity,
  Truck,
  Building
} from 'lucide-react';

const navigationItems = [
  {
    title: 'Dashboard',
    url: '/',
    icon: Home,
    description: 'Overview and metrics'
  },
  {
    title: 'Location Analysis',
    url: '/analysis',
    icon: MapPin,
    description: 'AI-powered recommendations'
  },
  {
    title: 'Demand Forecasting',
    url: '/demand',
    icon: TrendingUp,
    description: 'Market demand predictions'
  },
  {
    title: 'Competition Mapping',
    url: '/competition',
    icon: Target,
    description: 'Competitor analysis'
  },
  {
    title: 'Logistics Feasibility',
    url: '/logistics',
    icon: Truck,
    description: 'Delivery & distribution'
  },
  {
    title: 'Infrastructure Analysis',
    url: '/infrastructure',
    icon: Building,
    description: 'Cost & infrastructure data'
  },
  {
    title: 'Data Visualization',
    url: '/analytics',
    icon: BarChart3,
    description: 'Charts and insights'
  },
  {
    title: 'Sustainability Metrics',
    url: '/sustainability',
    icon: Activity,
    description: 'Environmental impact'
  },
  {
    title: 'Data Management',
    url: '/data',
    icon: Database,
    description: 'Dataset management'
  },
  {
    title: 'Settings',
    url: '/settings',
    icon: Settings,
    description: 'System configuration'
  }
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar className={state === 'collapsed' ? 'w-14' : 'w-64'} collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="px-2 py-4">
          {state !== 'collapsed' ? (
            <div>
              <h2 className="text-lg font-bold text-sidebar-foreground">Wal-Map</h2>
              <p className="text-xs text-sidebar-foreground/70">AI Store Location System</p>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <MapPin className="h-4 w-4 text-primary-foreground" />
              </div>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Main Navigation</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                          isActive
                            ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
                            : 'hover:bg-sidebar-accent/50 text-sidebar-foreground'
                        }`
                      }
                    >
                      <item.icon className="h-4 w-4 flex-shrink-0" />
                      {state !== 'collapsed' && (
                        <div className="flex flex-col">
                          <span className="text-sm">{item.title}</span>
                          <span className="text-xs text-sidebar-foreground/60">
                            
                          </span>
                        </div>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border">
        <div className="p-2">
          {state !== 'collapsed' ? (
            <div className="text-xs text-sidebar-foreground/60">
              <p>© 2025 Wal-Map</p>
              <p>AI-Powered Analytics</p>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
