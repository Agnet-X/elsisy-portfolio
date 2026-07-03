import React, { useState } from 'react';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { LanguageProvider } from '@/context/LanguageContext';

// Components
import ScrollProgress from '@/components/ScrollProgress';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Pages
import Home from '@/pages/Home';
import Portfolio from '@/pages/Portfolio';
import Projects from '@/pages/Projects';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Experience from '@/pages/Experience';
import Clients from '@/pages/Clients';
import Contact from '@/pages/Contact';
import Credentials from '@/pages/Credentials';
import NotFound from '@/pages/not-found';

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/experience" component={Experience} />
          <Route path="/clients" component={Clients} />
          <Route path="/contact" component={Contact} />
          <Route path="/credentials" component={Credentials} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
      <TooltipProvider>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
        
        {/* We keep the router mounted so images can load in the background, 
            but hide the cursor/scroll until loading finishes */}
        <div className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
          {!isLoading && <ScrollProgress />}
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
            <Router />
          </WouterRouter>
        </div>
        <Toaster />
      </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
