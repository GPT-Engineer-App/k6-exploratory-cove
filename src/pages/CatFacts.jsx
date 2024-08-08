import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { RefreshCw } from "lucide-react";

const CatFacts = () => {
  const [fact, setFact] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchCatFact = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://catfact.ninja/fact");
      const data = await response.json();
      setFact(data.fact);
    } catch (error) {
      console.error("Error fetching cat fact:", error);
      setFact("Oops! Couldn't fetch a cat fact right now.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCatFact();
  }, []);

  return (
    <Card className="h-full flex flex-col justify-between shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-2xl text-purple-800 flex items-center">
          <motion.div
            animate={{ rotate: isLoading ? 360 : 0 }}
            transition={{ duration: 1, repeat: isLoading ? Infinity : 0, ease: "linear" }}
          >
            <RefreshCw className="mr-2 h-6 w-6 text-purple-600" />
          </motion.div>
          Cat Fact of the Day
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <motion.p
          key={fact}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg mb-4"
        >
          {fact}
        </motion.p>
        <Button
          onClick={fetchCatFact}
          className="bg-purple-600 hover:bg-purple-700 transition-colors duration-300"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "New Fact"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default CatFacts;
