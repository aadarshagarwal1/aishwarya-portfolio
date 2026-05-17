import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Cloud, Database, Zap } from "lucide-react";

const About = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Languages",
      skills: ["Python (Pandas, NumPy)", "R", "MS Excel (Advanced)"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database",
      skills: ["SQL (Advanced)", "PostgreSQL", "Snowflake"]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Visualization & BI",
      skills: ["Power BI (DAX)", "Tableau", "Microsoft Fabric"]
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Tools & Platforms",
      skills: ["Salesforce", "Azure", "ETL", "EDA", "Data Modeling", "Data Validation"]
    }
  ];

  return (
    <section id="about" className="py-24 px-4 bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Data Analyst with 2 years of experience across energy, digital marketing, sales, and IT sectors,
            working with large and diverse datasets to generate meaningful insights.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          {/* Professional Summary */}
          <Card className="card-gradient border-primary/20 shadow-elevated">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gradient">Professional Summary</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Data Analyst with 2 years of experience across energy, digital marketing, sales, and IT sectors,
                  working with large and diverse datasets to generate meaningful insights.
                </p>
                <p>
                  Experienced with <span className="text-primary font-semibold">cloud platforms</span> and
                  skilled in building ELT pipelines, real-time dashboards, and KPI reporting systems.
                </p>
                <p>
                  A fast learner who can easily understand new concepts and is always willing to learn and grow
                  within an organization while solving real-world problems using data.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Grid */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center">
            Areas of <span className="text-gradient">Expertise</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="card-gradient border-primary/20 shadow-elevated hover:shadow-lg transition-all hover:scale-105 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-primary group-hover:text-accent transition-colors">
                      {category.icon}
                    </div>
                    <h4 className="font-bold text-lg">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Competencies */}
        <div className="mt-12 text-center">
          <h4 className="text-xl font-semibold mb-4 text-muted-foreground">Core Competencies</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {["Stakeholder Communication", "Problem-Solving", "Collaboration", "Data Storytelling", "Business Intelligence", "A/B Testing", "Statistical & Trend Analysis", "Dashboarding & KPI Reporting"].map((concept, index) => (
              <Badge key={index} variant="outline" className="text-sm px-4 py-2">
                {concept}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
