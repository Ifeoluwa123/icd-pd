import { useState } from 'react'
// import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ScrollToTop from "./components/sections/ScrollToTop"
import { createBrowserRouter,  ScrollRestoration } from "react-router";
import { RouterProvider } from "react-router/dom";
import Index from './pages/Index';
import AboutUs from './pages/AboutUs';
import LayoutWithBannerImage from './Layout/LayoutWithBannerImage';
import PastLeader from './pages/PastLeader';
import HistoryAboutCollege from './pages/HistoryAboutCollege';
import ProgramOverview from './pages/ProgramOverview';
import AcademicPrizes from './pages/AcademicPrizes';
import Grants from './pages/Grants';
import Admission from './pages/Admission';
import Contact from './pages/Contact';
import StudentLife from './pages/StudentLife';
import Alumni from './pages/Alumni';
import './index.css'
import MedicineAndSurgery from './pages/subpages/MedicineAndSurgery';
import Dentistry from './pages/subpages/Dentistry';
import NutritionAndDietetics from './pages/subpages/NutritionAndDietetics';
import MedicalRehabilitation from './pages/subpages/MedicalRehabilitation';
import NursingScience from './pages/subpages/NursingScience';
import Login from './pages/admin/Login';
import NotFound from './pages/NotFound';
import Dashboard from './pages/admin/Dashboard';
import NewsManagement from './pages/admin/NewsManagement';
import AdminLayout from './Layout/AdminLayout';
import VideoManagement from './pages/admin/VideoManagement';
import GalleryManagement from './pages/admin/GalleryManagement';
import { Toaster } from './components/ui/toaster';
import NewsDetails from './pages/NewsDetails';


function App() {



  const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },

  // PROGRAMME ROUTES WITH BANNER
  {
    // path:'programme',
    element : <LayoutWithBannerImage />,
    // errorElement:'',
    children: [
      {
        // index:true,
        path:'medicine-and-surgery',
        element: <MedicineAndSurgery />
      },
      {
        path:'dentistry',
        element: <Dentistry />
      },
      {
        path:'nutrition-and-dietetics',
        element: <NutritionAndDietetics />
      },
      {
        path:'medical-rehabilitation',
        element: <MedicalRehabilitation />
      },
      {
        path:'nursing-science',
        element: <NursingScience />
      },
     
   
 
    
      
    ]
  },
   {
        path:'news/:id',
        element: <NewsDetails />
    },
  // ROUTES WITH BANNER
  {
    // path:'',
    element :<h1>Layout</h1>,
    errorElement:'',
    children: [
      {
        index:true,
        path:'/about-us',
        element: <AboutUs />
      },
      {
      
        path:'/past-leader',
        element:<PastLeader />

      },
      {
    
        path:'/college-history',
        element:<HistoryAboutCollege />
      },
      {
      
        path:'/college-history',
        element:<HistoryAboutCollege />
      },
      {
      
        path:'/overview',
        element:<ProgramOverview />
      },
      {
      
        path:'/academic-prize',
        element:<AcademicPrizes />
      },
      {
      
        path:'/grant',
        element:<Grants />
      },
      {
      
        path:'/admission',
        element:<Admission />
      },
      {
      
        path:'/contact',
        element:<Contact />
      },
      {
      
        path:'/student-life',
        element:<StudentLife />
      },
      {
      
        path:'/alumni',
        element:<Alumni />
      },
      
    ]
  },

  // ADMIN ROUTES

  {
    path:'admin-login',
    element:<Login />
  },
  {
    path:'admin',
    element : <AdminLayout />,
    // errorElement:'',
    children: [
      {
        index:true,
        // path:'admin',
        element:<Dashboard />

      },
      {
        
        path:'news',
        element:<NewsManagement />

      },
      {
       
        path:'video',
        element:<VideoManagement />

      },
      {
       
        path:'gallery',
        element:<GalleryManagement />

      },
      
       {
    path: "*",
    element: <NotFound />,
  },
    ]
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
// ], {basename:"/milarn"});


const queryClient = new QueryClient();
  return(
    <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* <ScrollRestoration /> */}
       <Toaster />
      <Sonner />

      <ScrollToTop />
<RouterProvider router={router}  />
 
    
    </TooltipProvider>
  </QueryClientProvider>
  ) 
  
}

export default App
