import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("الكل");
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Original 9 projects (keeping their original data)
  const originalProjects = [
    {
      id: 1,
      title: "فيلا سكنية فاخرة",
      category: "زجاج",
      image: "dyad-media://media/dreamy-tardigrade-flit/.dyad/media/0da7a60d66a7dbc86cc3524b63bed335ce2452181a3422cdef85e6419064f4bf.jpg",
    },
    {
      id: 2,
      title: "حمام فاخر",
      category: "شاور",
      image: "dyad-media://media/dreamy-tardigrade-flit/.dyad/media/de03fed34d2bda4ef186fffa0d88852576cb67e89b253756b179415f2c349f05.jpeg",
    },
    {
      id: 3,
      title: "واجهة برج تجاري",
      category: "واجهات",
      image: "dyad-media://media/dreamy-tardigrade-flit/.dyad/media/ba2a40a450a3b694de79a4da95a88249e124063d3052392569320eff6c17fffd.jpeg",
    },
    {
      id: 4,
      title: "باب فندق أوتوماتيك",
      category: "أبواب",
      image: "dyad-media://media/dreamy-tardigrade-flit/.dyad/media/fbdf7a96d335b2b23501d5a437dde6ba229a5d1cfbc3db33a0f1ba8730766718.jpeg",
    },
    {
      id: 5,
      title: "درابزين شرفة",
      category: "درابزين",
      image: "dyad-media://media/dreamy-tardigrade-flit/.dyad/media/c3ce1771665a6721e10132acc060b17f645a2a49234da7b874cb2c1425c2e822.jpeg",
    },
    {
      id: 6,
      title: "مراية مدخل فندقي",
      category: "مرايات",
      image: "dyad-media://media/dreamy-tardigrade-flit/.dyad/media/87faf49ca38272bfee567c6537ae486e8c1e94067e2be2006598e5c385f4f043.jpeg",
    },
    {
      id: 7,
      title: "نوافذ مبنى سكني",
      category: "ألومنيوم",
      image: "dyad-media://media/dreamy-tardigrade-flit/.dyad/media/ea9dd3abb67db95386cdeff4c68241ea9563d827529374d110db99d36603b380.jpeg",
    },
    {
      id: 8,
      title: "محل تجاري زجاجي",
      category: "زجاج",
      image: "dyad-media://media/dreamy-tardigrade-flit/.dyad/media/6c436ab2f8b0991733a7b023f23dadb159230cfa1af20ca5a79db07088e493ef.png",
    },
    {
      id: 9,
      title: "شرفة زجاجية",
      category: "شاور",
      image: "dyad-media://media/dreamy-tardigrade-flit/.dyad/media/ebb9b62aa5ccf5755b49bced0bd40825d04a479c95b6060954409fd5c2bf513b.png",
    }
  ].map(project => ({
    ...project,
    image: `/images/${project.image.split('/').pop()}`
  }));
  
  // New 13 image URLs (10 previous + 3 new)
  const newImageUrls = [
    "dyad-media://media/dreamy-tardigrade-flit/.dyad/media/b19b737144fc1d0f4eef6cc76b1abdbe55abb437889c1a57e97af4b0cf038cf0.jpeg",
    "dyad-media://media/dreamy-tardigrade-flit/.dyad/media/550c79cd9fae3eba1d30fc87b5774187d3fb34f39b87435fd42726d3405638fb.jpeg",
    "dyad-media://media/dreamy-tardigrade-flit/.dyad/media/f468a18660f1f358a22a093c575efa927545f5bc0fd64efef21d3c02adb167c7.jpeg",
    "dyad-media://media/dreamy-tardigrade-flit/.dyad/media/373f88508090c2b7e7e6e5d04b27e32ae8c078f4d4c5351c2d5aa2800be31dc5.jpeg",
    "dyad-media://media/dreamy-tardigrade-flit/.dyad/media/10da9d9e023c972852fef67f62d22cc4ea3e4b781cfd5fe4c1278daf57a28518.jpeg",
    "dyad-media://media/dreamy-tardigrade-flit/.dyad/media/c314ef5353cd31a5ba72c2218672a721b8d11421477a4f6a4114c0c17ef88328.jpeg",
    "dyad-media://media/dreamy-tardigrade-flit/.dyad/media/0cbc776c235bb9495a5e1b53c7c99b1e2b1f23e8efc6cfbf7e2350b063d16b6e.jpeg",
    "dyad-media://media/dreamy-tardigrade-flit/.dyad/media/113b6ceb276f5980467392645fe50bf103a4f3c6c70e12edc83bfb582ebfda12.jpeg",
    "dyad-media://media/dreamy-tardigrade-flit/.dyad/media/abe8b1b1008792385739825510fde7737cfce899c06654497bde2f38848c5535.jpeg",
    "dyad-media://media/dreamy-tardigrade-flit/.dyad/media/8347414b0da098534d21957da6a4d995b552043bd1c588f6f781a874d73a07f8.jpeg",
    // The 3 new images
    "dyad-media://media/dreamy-tardigrade-flit/.dyad/media/552654373cecb8a65b5e9a712eaa601a9741669809ac080c18fdd3e55066051f.jpeg",
    "dyad-media://media/dreamy-tardigrade-flit/.dyad/media/ea2501312eb5a9fcc7ad11c497293f5e67698655588feca5a8296d3ed8e07b8d.jpeg",
    "dyad-media://media/dreamy-tardigrade-flit/.dyad/media/5b344f10c03b810c453c88264a76a02ccf0311de3c99c2a84ee3342c9031b67f.jpeg"
  ];
  
  // Categories for new projects (round-robin assignment)
  const categories = ["زجاج", "شاور", "واجهات", "أبواب", "درابزين", "مرايات", "ألومنيum"];
  
  // Generate 13 new projects with placeholder titles
  const newProjects = newImageUrls.map((imageUrl, index) => {
    const localImageUrl = `/images/${imageUrl.split('/').pop()}`;
    const categoryIndex = index % categories.length;
    const category = categories[categoryIndex];
    // Calculate how many times this category has appeared so far in new projects
    const countInCategory = Math.floor(index / categories.length) + 1;
    return {
      id: 10 + index, // Continue IDs from where original left off
      title: `مشروع ${category} ${countInCategory}`,
      category,
      image: localImageUrl
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