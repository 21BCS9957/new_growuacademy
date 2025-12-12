const statsData = [
  {
    number: "100+",
    label: "Offline  Learners"
  },
  {
    number: "50+", 
    label: "Freelancing  Projects"
  },
  {
    number: "95%",
    label: "Success Rate"
  },
  {
    number: "50+",
    label: "Learners Placed"
  }
];

const StatsSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {statsData.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-primary mb-2">
                {stat.number}
              </div>
              <p className="text-muted-foreground font-medium text-xs sm:text-sm lg:text-base uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;