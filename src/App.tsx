
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/MainLayout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SustainabilityMetrics from "./pages/SustainabilityMetrics";
import LocationAnalysis from "./pages/LocationAnalysis";
import DemandForecasting from "./pages/DemandForecasting";
import LogisticsFeasibility from "./pages/LogisticsFeasibility";
import DataVisualizationPage from "./pages/DataVisualization";
import DataManagement from "./pages/DataManagement";
import SettingsPage from "./pages/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/analysis" element={<LocationAnalysis />} />
            <Route path="/demand" element={<DemandForecasting />} />
            <Route path="/competition" element={<div className="p-8 text-center"><h2 className="text-2xl font-bold">Competition Mapping</h2><p className="text-muted-foreground mt-2">Competitor analysis coming soon</p></div>} />
            <Route path="/logistics" element={<LogisticsFeasibility />} />
            <Route path="/infrastructure" element={<div className="p-8 text-center"><h2 className="text-2xl font-bold">Infrastructure Analysis</h2><p className="text-muted-foreground mt-2">Cost & infrastructure data coming soon</p></div>} />
            <Route path="/analytics" element={<DataVisualizationPage />} />
            <Route path="/sustainability" element={<SustainabilityMetrics />} />
            <Route path="/data" element={<DataManagement />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
