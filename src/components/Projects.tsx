import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("الكل");
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Local image filenames in order: hero, original projects (9), new images (13)
  const localFilenames = [
    "8a1c705c-2e3d-4637-8285-eaf04cbbb684.jpg", // hero (index 0)
    "1.jpeg", // original project 1
    "2.jpg", // original project 2
    "WhatsApp Image 2026-08-22 at 4.52.47 PM.jpeg", // original project 3
    "WhatsApp Image 2026-08-22 at 4.52.49 PM.jpeg", // original project 4
    "WhatsApp Image 2026-08-22 at 4.52.50 PM.jpeg", // original project 5
    "WhatsApp Image 2026-08-22 at 4.52.53 PM.jpeg", // original project 6
    "WhatsApp Image 2026-08-22 at 4.52.56 PM.jpeg", // original project 7
    "WhatsApp Image 2026-08-22 at 4.52.56 PM (1).jpeg", // original project 8
    "WhatsApp Image 2026-08-22 at 4.52.57 PM.jpeg", // original project 9
    "WhatsApp Image 2026-08-22 at 4.52.57 PM (1).jpeg", // new image 1
    "WhatsApp Image 2026-08-22 at 4.52.57 PM (2).jpeg", // new image 2
    "WhatsApp Image 2026-08-22 at 4.53.04 PM.jpeg", // new image 3
    "WhatsApp Image 2026-08-22 at 4.53.04 PM (1).jpeg", // new image 4
    "WhatsApp Image 2026-08-22 at 4.53.05 PM.jpeg", // new image 5
    "WhatsApp Image 2026-08-22 at 4.53.05 PM (1).jpeg", // new image 6
    "WhatsApp Image 2026-08-22 at 4.53.05 PM (2).jpeg", // new image 7
    "WhatsApp Image 2026-08-22 at 4.53.06 PM.jpeg", // new image 8
    "WhatsApp Image 2026-08-22 at 4.53.06 PM (1).jpeg", // new image 9
    "WhatsApp Image 2026-08-22 at 4.53.06 PM (2).jpeg", // new image 10
    "WhatsApp Image 2026-08-22 at 4.53.06 PM (3).jpeg", // new image 11
    "Screenshot 2026-08-23 152521.png", // new image 12
    "brave_screenshot_web.whatsapp.com.png" // new image 13
  ];
  
  // Original 9 projects (using localFilenames indices 1-9)
  const originalProjects = [
    {
      id: 1,
      title: "فيلا سكنية فاخرة",
      category: "زجاج",
      image: `/images/${localFilenames[1]}`,
    },
    {
      id: 2,
      title: "حمام فاخر",
      category: "شاور",
      image: `/images/${localFilenames[2]}`,
    },
    {
      id: 3,
      title: "واجهة برج تجاري",
      category: "واجهات",
      image: `/images/${localFilenames[3]}`,
    },
    {
      id: 4,
      title: "باب فندق أوتوماتيك",
      category: "أبواب",
      image: `/images/${localFilenames[4]}`,
    },
    {
      id: 5,
      title: "درابزين شرفة",
      category: "درابزين",
      image: `/images/${localFilenames[5]}`,
    },
    {
      id: 6,
      title: "مراية مدخل فندقي",
      category: "مرايات",
      image: `/images/${localFilenames[6]}`,
    },
    {
      id: 7,
      title: "نوافذ مبنى سكني",
      category: "ألومنيوم",
      image: `/images/${localFilenames[7]}`,
    },
    {
      id: 8,
      title: "محل تجاري زجاجي",
      category: "زجاج",
      image: `/images/${localFilenames[8]}`,
    },
    {
      id: 9,
      title: "شرفة زجاجية",
      category: "شاور",
      image: `/images/${localFilenames[9]}`,
    }
  ];
  
  // New 13 images (using localFilenames indices 10-22)
  const newImageUrls = [
    localFilenames[10],
    localFilenames[11],
    localFilenames[12],
    localFilenames[13],
    localFilenames[14],
    localFilenames[15],
    localFilenames[16],
    localFilenames[17],
    localFilenames[18],
    localFilenames[19],
    localFilenames[20],
    localFilenames[21],
    localFilenames[22]
  ];
  
  // Categories for new projects (round-robin assignment)
  const categories = ["زجاج", "شاور", "واجهات", "أبواب", "درابزين", "مرايات", "ألومنيum"];
  
  // Generate 13 new projects with placeholder titles
  const newProjects = newImageUrls.map((imageUrl, index) => {
    const categoryIndex = index % categories.length;
    const category = categories[categoryIndex];
    // Calculate how many times this category has appeared so far in new projects
    const countInCategory = Math.floor(index / categories.length) + 1;
    return {
      id: 10 + index, // Continue IDs from where original left off
      title: `مشروع ${category} ${countInCategory}`,
      category,
      image: imageUrl // already includes /images/ prefix
    };
  });
  
  // Combine all projects
  const projects = [...originalProjects, ...newProjects];
  
  // Filter projects based on active filter
  const filteredProjects = activeFilter === "الكل" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);
  
  // Set current index when opening lightbox
  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedProject(projects[index]);
  };
  
  // Navigate to next project
  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setSelectedProject(projects[(currentIndex + 1) % projects.length]);
  };
  
  // Navigate to previous project
  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setSelectedProject(projects[(currentIndex - 1 + projects.length) % projects.length]);
  };
  
  // Handle keydown for lightbox navigation
  const handleKeyDown = (e) => {
    if (!selectedProject) return;
    
    if (e.key === "Escape") {
      setSelectedProject(null);
    } else if (e.key === "ArrowRight") {
      nextProject();
    } else if (e.key === "ArrowLeft") {
      prevProject();
    }
  };
  
  return (
    <section className="py-16 bg-white" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center md:text-3xl">
            معرض أعمالنا
          </h2>
          <p className="mt-2 text-gray-600 text-center max-w-xl mx-auto md:text-lg">
            مشاريع زجاجية نفذناها في جدة ومكة المكرمة
          </p>
        </div>
        
        {/* Filters */}
        <div className="mb-6 flex flex-wrap gap-2 sm:gap-3 justify-center">
          {[ "الكل", "زجاج", "شاور", "واجهات", "أبواب", "درابزين", "مرايات", "ألومنيوم" ].map((filter) => (
            <Button 
              key={filter}
              variant={activeFilter === filter ? "outline" : "ghost"}
              size="sm"
              onClick={() => setActiveFilter(filter)}
              className="px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm"
            >
              {filter}
            </Button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="group cursor-pointer rounded-lg overflow-hidden border border-gray-100 hover:border-gray-200 transition-border hover:shadow-lg"
              onClick={() => openLightbox(index)}
            >
              {/* Image container with aspect ratio control */}
              <div className="relative h-36 sm:h-48 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.category ? `${project.title} - ${project.category}` : project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/5"></div>
              </div>
              <div className="p-3">
                <h3 className="font-medium text-gray-900">{project.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Load more button - in a real app, this would load more projects */}
        <div className="mt-8 text-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="w-full sm:w-auto px-8 py-3 text-gray-600 hover:text-gray-900 border"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            تحميل المزيد
          </Button>
        </div>
      </div>
      
      {/* Lightbox */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl mx-auto relative">
          {/* Close button */}
          <DialogClose className="absolute top-4 right-4 z-10 p-2 rounded-lg hover:bg-gray-200">
            <X className="h-6 w-6" />
          </DialogClose>
          
          {/* Navigation arrows */}
          <button 
            onClick={prevProject}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white/100 transition-all disabled:opacity-50"
            aria-label="السابق"
          >
            <ArrowLeft className="h-7 w-7 text-gray-900" />
          </button>
          <button 
            onClick={nextProject}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white/100 transition-all disabled:opacity-50"
            aria-label="التالي"
          >
            <ArrowRight className="h-7 w-7 text-gray-900" />
          </button>
          
          <DialogHeader>
            <DialogTitle className="text-lg">{selectedProject?.title}</DialogTitle>
            <DialogDescription className="text-sm text-gray-500">{selectedProject?.category}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="relative h-[60vh] sm:h-96 w-full overflow-hidden rounded-lg">
              <img
                src={selectedProject?.image}
                alt={selectedProject?.category ? `${selectedProject?.title} - ${selectedProject?.category}` : selectedProject?.title}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-sm text-gray-600">
              وصف تفصيلي للمشروع سيظهر هنا في النسخة النهائية. 
              يشمل تفاصيل التنفيذ، المواد المستخدمة، والتحديات التي تم التغلب عليها.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;