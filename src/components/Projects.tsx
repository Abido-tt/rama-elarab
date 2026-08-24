import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("الكل");
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Project image sources
  const projectImages = [
    "dyad-media://media/dreamy-tardigrade-flit/.dyad/media/0da7a60d66a7dbc86cc3524b63bed335ce2452181a3422cdef85e6419064f4bf.jpg",
    "dyad-media://media/dreamy-tardigrade-flit/.dyad/media/de03fed34d2bda4ef186fffa0d88852576cb67e89b253756b179415f2c349f05.jpeg",
    "dyad-media://media/dreamy-tardigrade-flit/.dyad/media/ba2a40a450a3b694de79a4da95a88249e124063d3052392569320eff6c17fffd.jpeg",
    "dyad-media://media/dreamy-tardigrade-flit/.dyad/media/fbdf7a96d335b2b23501d5a437dde6ba229a5d1cfbc3db33a0f1ba8730766718.jpeg",
    "dyad-media://media/dreamy-tardigrade-flit/.dyad/media/c3ce1771665a6721e10132acc060b17f645a2a49234da7b874cb2c1425c2e822.jpeg",
    "dyad-media://media/dreamy-tardigrade-flit/.dyad/media/87faf49ca38272bfee567c6537ae486e8c1e94067e2be2006598e5c385f4f043.jpeg",
    "dyad-media://media/dreamy-tardigrade-flit/.dyad/media/ea9dd3abb67db95386cdeff4c68241ea9563d827529374d110db99d36603b380.jpeg",
    "dyad-media://media/dreamy-tardigrade-flit/.dyad/media/6c436ab2f8b0991733a7b023f23dadb159230cfa1af20ca5a79db07088e493ef.png",
    "dyad-media://media/dreamy-tardigrade-flit/.dyad/media/ebb9b62aa5ccf5755b49bced0bd40825d04a479c95b6060954409fd5c2bf513b.png"
  ];
  
  // Project data with categories matching the filter list
  const projects = [
    {
      id: 1,
      title: "فيلا سكنية فاخرة",
      category: "زجاج",
      image: projectImages[0],
      alt: "فيلا سكنية فاخرة - زجاج"
    },
    {
      id: 2,
      title: "حمام فاخر",
      category: "شاور",
      image: projectImages[1],
      alt: "حمام فاخر - شاور"
    },
    {
      id: 3,
      title: "واجهة برج تجاري",
      category: "واجهات",
      image: projectImages[2],
      alt: "واجهة برج تجاري - واجهات"
    },
    {
      id: 4,
      title: "باب فندق أوتوماتيك",
      category: "أبواب",
      image: projectImages[3],
      alt: "باب فندق أوتوماتيك - أبواب"
    },
    {
      id: 5,
      title: "درابزين شرفة",
      category: "درابزين",
      image: projectImages[4],
      alt: "درابزين شرفة - درابزين"
    },
    {
      id: 6,
      title: "مراية مدخل فندقي",
      category: "مرايات",
      image: projectImages[5],
      alt: "مراية مدخل فندقي - مرايات"
    },
    {
      id: 7,
      title: "نوافذ مبنى سكني",
      category: "ألومنيوم",
      image: projectImages[6],
      alt: "نوافذ مبنى سكني - ألومنيوم"
    },
    {
      id: 8,
      title: "محل تجاري زجاجي",
      category: "زجاج",
      image: projectImages[7],
      alt: "محل تجاري زجاجي - زجاج"
    },
    {
      id: 9,
      title: "شرفة زجاجية",
      category: "شاور",
      image: projectImages[8],
      alt: "شرفة زجاجية - شاور"
    }
  ];
  
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
                  alt={project.alt}
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
                alt={selectedProject?.alt}
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