import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CatFacts = () => {
  const [fact, setFact] = useState("");

  const fetchCatFact = async () => {
    try {
      const response = await fetch("https://catfact.ninja/fact");
      const data = await response.json();
      setFact(data.fact);
    } catch (error) {
      console.error("Error fetching cat fact:", error);
      setFact("Oops! Couldn't fetch a cat fact right now.");
    }
  };

  useEffect(() => {
    fetchCatFact();
  }, []);

  return (
    <Card className="h-full flex flex-col justify-between">
      <CardHeader>
        <CardTitle className="text-2xl text-purple-800">Cat Fact of the Day</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-lg mb-4">{fact}</p>
        <Button onClick={fetchCatFact} className="bg-purple-600 hover:bg-purple-700">
          New Fact
        </Button>
      </CardContent>
    </Card>
  );
};

export default CatFacts;
