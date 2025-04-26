
import { Card } from "@/components/ui/card";

const Biography = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Biography</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-4">Early Life</h3>
            <p className="text-gray-600">
              Born on September 25, 1968, in Philadelphia, Pennsylvania. Will Smith started his career as a rapper before transitioning to acting.
            </p>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-4">Career Highlights</h3>
            <p className="text-gray-600">
              From "The Fresh Prince of Bel-Air" to blockbuster movies like "Men in Black" and "Independence Day", Will has become one of Hollywood's most successful actors.
            </p>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-4">Achievements</h3>
            <p className="text-gray-600">
              Academy Award winner for Best Actor in "King Richard" (2022), multiple Grammy Awards, and numerous other accolades throughout his career.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Biography;
