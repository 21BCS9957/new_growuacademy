import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import logo from "@/assets/logo1.png";

const Footer = () => {
  // Your actual business location embed URL
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d252.66673976251198!2d76.68426982492868!3d30.70434662275638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1765542479010!5m2!1sen!2sin";

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 py-12 lg:py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Side - Company Info & Contact */}
          <div className="space-y-8">
            
            {/* Logo & Description */}
            <div>
              <div className="flex items-center mb-6">
                <img 
                  src={logo} 
                  alt="GrowU Academy Logo" 
                  className="h-16 w-auto" 
                />
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Transform your passion for video editing into a thriving career. Join thousands of successful students who have built their dreams with GrowU Academy.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-primary" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-primary" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5 text-primary" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-primary" />
                </a>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-bold gradient-text-primary mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-foreground font-medium">Visit Our Campus</p>
                    <p className="text-muted-foreground">
                      Phase 8B, Industrial Area<br />
                      Mohali, Punjab 160071<br />
                      India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-foreground font-medium">Call Us</p>
                    <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 80772 24147
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-foreground font-medium">Email Us</p>
                    <a href="mailto:info@growuacademy.com" className="text-muted-foreground hover:text-primary transition-colors">
                      growuacademy@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-foreground font-medium">Office Hours</p>
                    <p className="text-muted-foreground">
                      Monday - Saturday: 9:00 AM - 7:00 PM<br />
                      Sunday: 10:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Map */}
          <div>
            <h3 className="text-xl font-bold gradient-text-primary mb-6">Find Us Here</h3>
            <div className="bg-gradient-to-br from-card via-card to-card/95 border-2 border-primary/20 rounded-2xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(255,215,0,0.15)] transition-all duration-300">
              <div className="relative w-full h-80 lg:h-96 rounded-xl overflow-hidden">
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="GrowU Academy Location"
                  className="rounded-xl"
                />
                
                {/* Overlay for better integration */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-xl" />
              </div>
              
              {/* Map Footer */}
              <div className="mt-4 p-4 bg-background/50 rounded-lg backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">GrowU Academy</p>
                    <p className="text-xs text-muted-foreground">Phase 8B, Mohali</p>
                  </div>
                  <a 
                    href="https://maps.google.com/?q=30.70434662275638,76.68426982492868" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    View in Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </footer>
  );
};

export default Footer;