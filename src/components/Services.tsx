import Package from '../assets/svgs/supply.svg'
import Settings from '../assets/svgs/installation.svg'
import Shield from '../assets/svgs/qualityAssurance.svg'
import Users from '../assets/svgs/fusion.svg'
import Wrench from '../assets/svgs/repair.svg'
import MapPin from '../assets/svgs/site.svg'



const Services = () => {
  const services = [
    {
      icon: Package,
      title: "Supply",
      description: "HDPE Geomembrane Sheets & Welding Equipment"
    },
    {
      icon: Settings,
      title: "Installation",
      description: "Geomembrane Installation"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Load and Inspection to quality assurance"
    },
    {
      icon: Users,
      title: "Fusion & Extrusion",
      description: "Seam Welding/ Fusion & Extrusion Services"
    },
    {
      icon: Wrench,
      title: "Repair",
      description: "Repair & Maintenance"
    },
    {
      icon: MapPin,
      title: "Site preparation",
      description: "Site Preparation & Other services"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Services & Applications</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <service.icon  />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;