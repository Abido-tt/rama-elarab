import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("الكل");
  
  // Sample project data - in a real app, this would come from a CMS or API
  const projects = [
    {
      id: 1,
      title: "فيلا سكنية فاخرة",
      category: "زجاج",
      image: "/placeholder.svg", // Would be replaced with actual image
      alt: "فيلا سكنية بواجهات زجاج سيكوريت شفاف"
    },
    {
      id: 2,
      title: "حمام فاخر",
      category: "دش",
      image: "/placeholder.svg",
      alt: "حمام بحاجز زجاج frameless وسمك 10مم"
    },
    {
      id: 3,
      title: "واجهة برج تجاري",
      category: "واجهات",
      image: "/placeholder.svg",
      alt: "واجهة برج تجاري بزجاج عازل حراري مزدوج"
    },
    {
      id: 4,
      title: "باب فندق أوتوماتيك",
      category: "أبواب",
      image: "/placeholder.svg",
      alt: "باب فندق زجاج أوتوماتيك مع حساس حركة"
    },
    {
      id: 5,
      title: "درابزين شرفة",
      category: "درابزين",
      image: "/placeholder.svg",
      alt: "درابزين زجاجي لشرفة سكنية مع قاعدة ستانلس ستيل"
    },
    {
      id: 6,
      title: "مراية مدخل فندقي",
      category: "مرايات",
      image: "/placeholder.svg",
      alt: "مراية مدخل فندقي بإضاءة خلفية LED"
    },
    {
      id: 7,
      title: "نوافذ مبنى سكني",
      category: "نوافذ",
      image: "/placeholder.svg",
      alt: "نوافذ مبنى سكني بزجاج عازل للصوت والحرارة"
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
            معرض أعمالنا
          </h2>
          <p className="mt-4 text-gray-600 text-center max-w-2xl mx-auto">
            مشاريع زجاجية نفذناها في جدة ومكة المكرمة
          </p>
        </div>
        
        {/* Filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          <Button 
            variant={activeFilter === "الكل" ? "outline" : "ghost"}
            size="sm"
            onClick={() => setActiveFilter("الكل")}
            className="px-4 py-2 text-gray-500 hover:text-gray-900 hover:border-gray-300"
          >
            الكل
          </Button>
          <Button 
            variant={activeFilter === "زجاج" ? "outline" : "ghost"}
            size="sm"
            onClick={() => setActiveFilter("زجاج")}
            className="px-4 py-2 text-gray-500 hover:text-gray-900 hover:border-gray-300"
          >
            زجاج
          </Button>
          <Button 
            variant={activeFilter === "دش" ? "outline" : "ghost"}
            size="sm"
            onClick={() => setActiveFilter("دش")}
            className="px-4 py-2 text-gray-500 hover:text-gray-900 hover:border-gray-300"
          >
            دش
          </Button>
          <Button 
            variant={activeFilter === "واجهات" ? "outline" : "ghost"}
            size="sm"
            onClick={() => setActiveFilter("واجهات")}
            className="px-4 py-2 text-gray-500 hover:text-gray-900 hover:border-gray-300"
          >
            واجهات
          </Button>
          <Button 
            variant={activeFilter === "أبواب" ? "outline" : "ghost"}
            size="sm"
            onClick={() => setActiveFilter("أبواب")}
            className="px-4 py-2 text-gray-500 hover:text-gray-900 hover:border-gray-300"
          >
            أبواب
          </Button>
          <Button 
            variant={activeFilter === "درابزين" ? "outline" : "ghost"}
            size="sm"
            onClick={() => setActiveFilter("درابزين")}
            className="px-4 py-2 text-gray-500 hover:text-gray-900 hover:border-gray-300"
          >
            درابزين
          </Button>
          <Button 
            variant={activeFilter === "مرايات" ? "outline" : "ghost"}
            size="sm"
            onClick={() => setActiveFilter("مرايات")}
            className="px-4 py-2 text-gray-500 hover:text-gray-900 hover:border-gray-300"
          >
            مرايات
          </Button>
          <Button 
            variant={activeFilter === "نوافذ" ? "outline" : "ghost"}
            size="sm"
            onClick={() => setActiveFilter("نوافذ")}
            className="px-4 py-2 text-gray-500 hover:text-gray-900 hover:border-gray-300"
          >
            نوافذ
          </Button>
        </div>
        
        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="group cursor-pointer rounded-lg overflow-hidden border border-gray-100 hover:border-gray-200 transition-border"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-4">
                <h3 className="font-medium text-gray-900">{project.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Load more button - in a real app, this would load more projects */}
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="px-8 py-3 text-gray-600 hover:text-gray-900 border">
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
            <img
              src={selectedProject?.image}
              alt={selectedProject?.alt}
              className="w-full h-96 object-contain rounded-lg"
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