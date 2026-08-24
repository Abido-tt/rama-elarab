import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Image } from "next/image";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("الكل");
  
  // Sample project data - in a real app, this would come from a CMS or API
  const projects = [
    {
      id: 1,
      title: "مشروع فيلا فاخرة",
      category: "زجاج",
      image: "/placeholder.svg", // Would be replaced with actual image
      alt: "فيلا فاخرة بواجهات زجاج سيكوريت"
    },
    {
      id: 2,
      title: "حمام فاخر",
      category: "شاور",
      image: "/placeholder.svg",
      alt: "حمام بحاجز زجاج شاور frameless"
    },
    {
      id: 3,
      title: "واجهة محل تجاري",
      category: "واجهات",
      image: "/placeholder.svg",
      alt: "واجهة محل تجاري بزجاج عازل حراري"
    },
    {
      id: 4,
      title: "باب زجاج أوتوماتيك",
      category: "أبواب",
      image: "/placeholder.svg",
      alt: "باب زجاج أوتوماتيك لمدخل building"
    },
    {
      id: 5,
      title: "دربزين زجاجي",
      category: "دربزين",
      image: "/placeholder.svg",
      alt: "دربزين زجاجي مع هندريل ستانلس ستيل"
    },
    {
      id: 6,
      title: "مراية مدخل فاخرة",
      category: "مرايات",
      image: "/placeholder.svg",
      alt: "مراية مدخل فاخرة بإضاءة خلفية"
    },
    {
      id: 7,
      title: "نوافذ ألمنيوم",
      category: "ألمنيوم",
      image: "/placeholder.svg",
      alt: "نوافذ ألمنيوم عازلة للحرارة والصوت"
    }
  ];
  
  const filteredProjects = activeFilter === "الكل" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);
  
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            أعمالنا
          </h2>
          <p className="mt-4 text-gray-600 text-center max-w-2xl mx-auto">
            معرض لأحدث مشاريعنا في مجال الزجاج والألمنيوم
          </p>
        </div>
        
        {/* Filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-4">
          <Button 
            variant={activeFilter === "الكل" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveFilter("الكل")}
          >
            الكل
          </Button>
          <Button 
            variant={activeFilter === "زجاج" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveFilter("زجاج")}
          >
            زجاج
          </Button>
          <Button 
            variant={activeFilter === "شاور" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveFilter("شاور")}
          >
            شاور
          </Button>
          <Button 
            variant={activeFilter === "واجهات" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveFilter("واجهات")}
          >
            واجهات
          </Button>
          <Button 
            variant={activeFilter === "أبواب" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveFilter("أبواب")}
          >
            أبواب
          </Button>
          <Button 
            variant={activeFilter === "دربزين" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveFilter("دربزين")}
          >
            دربزين
          </Button>
          <Button 
            variant={activeFilter === "مرايات" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveFilter("مرايات")}
          >
            مرايات
          </Button>
          <Button 
            variant={activeFilter === "ألمنيوم" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveFilter("ألمنيوم")}
          >
            ألمنيوم
          </Button>
        </div>
        
        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="group cursor-pointer rounded-xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-border"
              onClick={() => setSelectedProject(project)}
            >
              <Image
                src={project.image}
                alt={project.alt}
                className="w-full h-48 object-cover"
                fill
              />
              <div className="p-4">
                <h3 className="font-medium text-gray-900">{project.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Load more button - in a real app, this would load more projects */}
        <div className="mt-10 text-center">
          <Button variant="outline" size="lg" className="px-8 py-3">
            تحميل المزيد
          </Button>
        </div>
      </div>
      
      {/* Lightbox Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl mx-auto">
          <DialogHeader>
            <DialogTitle>{selectedProject?.title}</DialogTitle>
            <DialogDescription>{selectedProject?.category}</DialogDescription>
          </DialogHeader>
          <div className="space-y-6">
            <Image
              src={selectedProject?.image}
              alt={selectedProject?.alt}
              className="w-full h-96 object-contain rounded-xl"
              fill
            />
            <p className="text-gray-600">
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