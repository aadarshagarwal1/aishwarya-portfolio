import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Building2, MapPin, Calendar, TrendingUp } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Yuno Energy",
      position: "Data Analyst",
      location: "Dublin, Ireland",
      duration: "Jan 2025 – Present",
      logo: "YE",
      achievements: [
        {
          impact: "13% increase in sales",
          description: "Improved sales performance and customer engagement by analyzing sales trends, campaign data, and customer behavior using SQL, Power BI, and CRM datasets."
        },
        {
          impact: "17% reduction in manual effort",
          description: "Streamlined reporting and centralized business data by building ELT pipelines in Snowflake using APIs, CRM systems, CSV files, and SQL transformations, also improving reporting speed by 21%."
        },
        {
          impact: "Real-time CSAT & NPS dashboards",
          description: "Enhanced customer satisfaction monitoring by developing real-time CSAT and NPS dashboards in Power BI and implementing automated chatbot alerts for low NPS scores, enabling faster issue resolution."
        },
        {
          impact: "End-to-end KPI dashboards",
          description: "Enabled stakeholders to track KPIs and improve business strategy by delivering Customer Satisfaction and Sales Performance dashboards, supporting data-driven decision-making across teams."
        }
      ],
      technologies: ["SQL", "Power BI", "Snowflake", "CRM", "ELT Pipelines", "DAX"]
    },
    {
      company: "Ashtapailu Infotech Pvt",
      position: "Data Analyst Consultant",
      location: "India",
      duration: "Jul 2022 – Aug 2023",
      logo: "AI",
      achievements: [
        {
          impact: "21% increase in sales conversions",
          description: "Collaborated with marketing stakeholders to improve campaign performance by analyzing 50,000+ customer interaction records across web, email, and social media channels, also achieving 25% growth in web traffic."
        },
        {
          impact: "KPI tracking dashboards",
          description: "Worked with cross-functional teams to build Snowflake datasets and Power BI dashboards using SQL and Salesforce data, enabling KPI tracking and data-driven marketing decisions."
        },
        {
          impact: "Weekly & monthly insights",
          description: "Delivered weekly and monthly insights by validating and analyzing campaign data, helping stakeholders optimize marketing strategies and improve reporting accuracy."
        },
        {
          impact: "Automated reporting workflows",
          description: "Automated reporting and dashboard workflows to reduce manual effort, improve efficiency, and streamline marketing analytics processes."
        }
      ],
      technologies: ["SQL", "Power BI", "Snowflake", "Salesforce", "Python", "Data Validation"]
    },
    {
      company: "TCR Innovation",
      position: "Data Analyst Intern",
      location: "India",
      duration: "May 2019 – Oct 2019",
      logo: "TC",
      achievements: [
        {
          impact: "Supply chain efficiency improvement",
          description: "Improved supply chain efficiency by analyzing orders, inventory, and shipment data using SQL and Excel, helping identify operational delays and optimize inventory management processes."
        },
        {
          impact: "KPI tracking across supply chain",
          description: "Tracked key supply chain KPIs including delivery timelines, order status, and inventory levels through data cleaning, transformation, and analysis using joins, aggregations, and PivotTables."
        },
        {
          impact: "Interactive Power BI dashboards",
          description: "Developed interactive Power BI dashboards to monitor supply chain performance and provide actionable insights, enabling stakeholders to reduce delays and improve operational visibility."
        }
      ],
      technologies: ["SQL", "Excel", "Power BI", "PivotTables", "Data Cleaning"]
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Work <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Delivering data-driven insights and measurable business impact across energy, marketing, and supply chain sectors.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-gradient border-primary/20 shadow-elevated hover:shadow-lg transition-all">
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-2xl font-bold text-background shadow-lg">
                      {exp.logo}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{exp.position}</h3>
                      <div className="flex items-center gap-2 text-primary font-semibold text-lg">
                        <Building2 className="w-4 h-4" />
                        {exp.company}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col lg:items-end gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Key Achievements */}
                <div className="relative">
                  {/* Desktop: Normal stacked layout */}
                  <div className="hidden md:block space-y-4">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex gap-4 p-4 bg-background/50 rounded-lg border border-primary/10">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                            <TrendingUp className="w-4 h-4 text-primary" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-primary font-semibold text-lg">
                            {achievement.impact}
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Mobile: Carousel layout */}
                  <div className="md:hidden">
                    <Carousel opts={{ align: "start", loop: true }} className="w-full">
                      <CarouselContent className="-ml-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <CarouselItem key={achIndex} className="pl-2 basis-full">
                            <div className="flex gap-4 p-4 bg-background/50 rounded-lg border border-primary/10">
                              <div className="flex-shrink-0 mt-1">
                                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                                  <TrendingUp className="w-4 h-4 text-primary" />
                                </div>
                              </div>
                              <div className="space-y-2">
                                <div className="text-primary font-semibold text-lg">
                                  {achievement.impact}
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                  {achievement.description}
                                </p>
                              </div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-2" />
                      <CarouselNext className="right-2" />
                    </Carousel>

                    <div className="flex justify-center gap-2 mt-4">
                      {exp.achievements.map((_, achIndex) => (
                        <div key={achIndex} className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Technologies Used */}
                <div className="pt-4 border-t border-border">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
