import { useState } from 'react';
import { Container, Heading, Box, Text } from '@chakra-ui/react';

const CarDetail = () => {
  const [carList] = useState([
    {
      id: 1,
      title: "Crystal Black",
      type: "Pearl",
      img: "./images/icons/icon-black.jpg",
      srcImg: "images-black/images-black-1/",
      color: "Black",
      price: "19,550",
      engineType: "In-Line 4-Cylinder",
      displacement: "1996 cc",
      horsepower: "158 @ 6500 rpm",
      torque: "138 lb-ft @ 4200 rpm",
      redline: "6700 rpm",
      wheels: [
        {
          idWheel: 1,
          srcImg: "images-black/images-black-1/",
        },
        {
          idWheel: 2,
          srcImg: "images-black/images-black-2/",
        },
        {
          idWheel: 3,
          srcImg: "images-black/images-black-3/",
        },
      ],
    },
    // {
    //     id: 2,
    //     title: "Modern Steel",
    //     type: "Metallic",
    //     img: "./images/icons/icon-steel.jpg",
    //     srcImg: "images-steel/images-steel-1/",
    //     color: "Steel",
    //     price: "20,550",
    //     engineType: "In-Line 4-Cylinder",
    //     displacement: "1996 cc",
    //     horsepower: "158 @ 6500 rpm",
    //     torque: "138 lb-ft @ 4200 rpm",
    //     redline: "6700 rpm",
    //     wheels: [
    //       {
    //         idWheel: 1,
    //         srcImg: "images-steel/images-steel-1/",
    //       },
    //       {
    //         idWheel: 2,
    //         srcImg: "images-steel/images-steel-2/",
    //       },
    //       {
    //         idWheel: 3,
    //         srcImg: "images-steel/images-steel-3/",
    //       },
    //     ],
    //   },
    //   {
    //     id: 3,
    //     title: "Lunar Silver",
    //     type: "Metallic",
    //     img: "./images/icons/icon-silver.jpg",
    //     srcImg: "images-silver/images-silver-1/",
    //     color: "Silver",
    //     price: "21,550",
    //     engineType: "In-Line 4-Cylinder",
    //     displacement: "1996 cc",
    //     horsepower: "158 @ 6500 rpm",
    //     torque: "138 lb-ft @ 4200 rpm",
    //     redline: "6700 rpm",
    //     wheels: [
    //       {
    //         idWheel: 1,
    //         srcImg: "images-silver/images-silver-1/",
    //       },
    //       {
    //         idWheel: 2,
    //         srcImg: "images-silver/images-silver-2/",
    //       },
    //       {
    //         idWheel: 3,
    //         srcImg: "images-silver/images-silver-3/",
    //       },
    //     ],
    //   },
    //   {
    //     id: 4,
    //     title: "Rallye Red",
    //     type: "Metallic",
    //     img: "./images/icons/icon-red.jpg",
    //     srcImg: "images-red/images-red-1/",
    //     color: "Red",
    //     price: "22,550",
    //     engineType: "In-Line 4-Cylinder",
    //     displacement: "1996 cc",
    //     horsepower: "158 @ 6500 rpm",
    //     torque: "138 lb-ft @ 4200 rpm",
    //     redline: "6700 rpm",
    //     wheels: [
    //       {
    //         idWheel: 1,
    //         srcImg: "images-red/images-red-1/",
    //       },
    //       {
    //         idWheel: 2,
    //         srcImg: "images-red/images-red-2/",
    //       },
    //       {
    //         idWheel: 3,
    //         srcImg: "images-red/images-red-3/",
    //       },
    //     ],
    //   },
  ]);

  const renderCarList = (id) => {
    const car = carList.find((car) => car.id === id);
    if (!car) return null;
    return (
      <Box className="car-details">
        <Heading as="h2" className="car-title">{car.title}</Heading>
        <Box className="car-info" display="flex">
          <Box>
            <img src={car.img} alt={car.title} className="mb-50" />
          </Box>
          <Box>
            <Text><strong>Color:</strong> {car.color}</Text>
            <Text><strong>Price:</strong> {car.price}</Text>
            <Text><strong>Engine Type:</strong> {car.engineType}</Text>
            <Text><strong>Displacement:</strong> {car.displacement}</Text>
            <Text><strong>Horsepower:</strong> {car.horsepower}</Text>
            <Text><strong>Torque:</strong> {car.torque}</Text>
            <Text><strong>Redline:</strong> {car.redline}</Text>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <Container maxW="container.lg">
      <Heading as="h1" textAlign="center">Car Detail</Heading>
      {renderCarList(1)} {/* Render car with id 1, you can pass any other id */}
    </Container>
  );
};

export default CarDetail;
