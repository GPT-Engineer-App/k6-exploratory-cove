import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CatFacts from "./CatFacts";
import { motion } from "framer-motion";
import { Paw, Heart } from "lucide-react";

const CatBreed = ({ name, description, image }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
  >
    <Card className="mb-4 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <CardHeader>
        <CardTitle className="flex items-center">
          <Paw className="mr-2 h-5 w-5 text-purple-600" />
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  </motion.div>
);

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const catBreeds = [
    { name: "Siamese", description: "Known for their distinctive coloring and vocal nature.", image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg" },
    { name: "Maine Coon", description: "Large, gentle giants with long, fluffy coats.", image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Maine_Coon_cat_by_Tomitheos.JPG" },
    { name: "Persian", description: "Recognizable by their flat faces and long, luxurious fur.", image: "https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg" },
    { name: "Bengal", description: "Wild-looking cats with leopard-like spots or marbling.", image: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Paintedcats_Red_Star_standing.jpg" },
    { name: "Sphynx", description: "Hairless cats known for their wrinkled skin and large ears.", image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Sphinx2_July_2006.jpg" },
  ];

  const carouselImages = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_November_2010-1a.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg/1280px-Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 p-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold mb-6 text-center text-purple-800"
        >
          Fantastic Felines
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12 rounded-lg overflow-hidden shadow-2xl"
        >
          <Slider {...settings}>
            {carouselImages.map((image, index) => (
              <div key={index} className="relative">
                <img src={image} alt={`Cat ${index + 1}`} className="w-full h-[500px] object-cover" />
                <div className="absolute bottom-4 right-4 bg-white bg-opacity-75 px-4 py-2 rounded">
                  {index + 1} / {carouselImages.length}
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-semibold mb-4 text-purple-800 flex items-center">
              <Heart className="mr-2 h-6 w-6 text-pink-500" />
              About Cats
            </h2>
            <p className="text-xl text-gray-700 mb-4">
              Cats are fascinating creatures that have been domesticated for thousands of years. They are known for their
              independence, agility, and affectionate nature. Cats come in various breeds, each with its unique
              characteristics and personalities.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 transition-colors duration-300">
              Learn More
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <CatFacts />
          </motion.div>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-3xl font-semibold mb-6 text-center text-purple-800"
        >
          Popular Cat Breeds
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {catBreeds.map((breed, index) => (
            <CatBreed key={index} name={breed.name} description={breed.description} image={breed.image} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
