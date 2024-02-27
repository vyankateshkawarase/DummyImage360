import { useState } from 'react';
import { Container, Heading, Box, List, ListItem, Image } from '@chakra-ui/react';
import ThreeSixty from "react-360-view";

const ChooseCarColor = () => {
  const [state, setState] = useState({
    imgSrc: "images-black/images-black-1/",
    id: 1,
    w1: "w1",
    w2: "w2",
    w3: "w3",
    flag: 0,
    logID: "",
    logWID: "w1",
    wFlag: 0,
  });

  const carList = [
    // Your car list data
    // {
    //     id: 1,
    //     title: "Crystal Black",
    //     type: "Pearl",
    //     img: "./images/icons/icon-black.jpg",
    //     srcImg: "images-black/images-black-1/",
    //     color: "Black",
    //     price: "19,550",
    //     engineType: "In-Line 4-Cylinder",
    //     displacement: "1996 cc",
    //     horsepower: "158 @ 6500 rpm",
    //     torque: "138 lb-ft @ 4200 rpm",
    //     redline: "6700 rpm",
    //     wheels: [
    //       {
    //         idWheel: 1,
    //         srcImg: "images-black/images-black-1/",
    //       },
    //       {
    //         idWheel: 2,
    //         srcImg: "images-black/images-black-2/",
    //       },
    //       {
    //         idWheel: 3,
    //         srcImg: "images-black/images-black-3/",
    //       },
    //     ],
    //   },
    //   {
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
  ];

  const renderCarList = (id) => {
    return carList
      .filter((car) => car.id === id)
      .map((car, index) => {
        const {
          color,
          price,
          engineType,
          displacement,
          horsepower,
          torque,
          redline,
        } = car;
        return (
          <Box as="table" className="table table-bordered" key={index}>
            <tbody>
              <tr>
                <td>Color</td>
                <td>{color}</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>${price}</td>
              </tr>
              <tr>
                <td>Engine Type</td>
                <td>{engineType}</td>
              </tr>
              <tr>
                <td>Displacement</td>
                <td>{displacement}</td>
              </tr>
              <tr>
                <td>Horsepower</td>
                <td>{horsepower}</td>
              </tr>
              <tr>
                <td>Torque</td>
                <td>{torque}</td>
              </tr>
              <tr>
                <td>Redline</td>
                <td>{redline}</td>
              </tr>
            </tbody>
          </Box>
        );
      });
  };

  const handleChangeColor = (cid) => {
    const { id, flag, logID, logWID } = state;
    setState({
      ...state,
      id: cid,
    });
    // Rest of your handleChangeColor function
  };

  const renderCar360 = () => {
    return carList.map((car) => {
      return (
        <Box key={car.id} className="carContent" id={`c${car.id}`} style={{ display: "none" }}>
          <ThreeSixty
            amount={8}
            imagePath={`./img/${car.srcImg}`}
            fileName="civic-{index}.jpg"
          />
        </Box>
      );
    });
  };

  const renderCarWheel360 = () => {
    let id = 0;
    return carList.map((car) => {
      return car.wheels.map((wheel) => {
        id++;
        return (
          <Box key={id} className="carContent" id={`w${id}`} style={{ display: "none" }}>
            <ThreeSixty
              amount={8}
              imagePath={`./img/${wheel.srcImg}`}
              fileName="civic-{index}.jpg"
            />
          </Box>
        );
      });
    });
  };

  const renderCarWheel = (wID) => {
    const { logID, logWID, wFlag } = state;
    // Rest of your renderCarWheel function
  };

  const { id, w1, w2, w3 } = state;

  return (
    <Container maxW="container.xl">
      <Heading as="h1" textAlign="center" my="4" p="3" color="white">
        Choose Car Color
      </Heading>
      <Box className="row">
        <Box className="col-7">
          <Box className="car">
            {renderCar360()}
            {renderCarWheel360()}
            <Box id="carDefault">
              <ThreeSixty
                amount={8}
                imagePath={`./img/images-black/images-black-1/`}
                fileName="civic-{index}.jpg"
              />
            </Box>
          </Box>

          <Box className="card">
            <Box className="card-header">
              <Heading as="h4" textAlign="left" color="white">See More LX Features</Heading>
            </Box>
            <Box className="card-body">{renderCarList(id)}</Box>
          </Box>
        </Box>
        <Box className="col-5">
          <Box className="card">
            {/* <Box className="card-header text-primary">Exterior Color</Box> */}
            <List className="list-group list-group-flush">
              {carList.map((car) => (
                <ListItem key={car.id} className="list-group-item" onClick={() => handleChangeColor(car.id)}>
                  <Box className="row">
                    <Box className="col-2">
                      <Image src={`./img/${car.img}`} width="60px" alt="" />
                    </Box>
                    <Box className="col-10 d-flex align-items-center">
                      {car.title}
                    </Box>
                  </Box>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box className="card">
            {/* <Box className="card-header text-primary">Wheels</Box> */}
            <List className="list-group list-group-flush">
              {carList.map((car) => (
                car.wheels.map((wheel, index) => (
                  <ListItem key={index} className="list-group-item" onClick={() => renderCarWheel(`w${index+1}`)}>
                    <Box className="row">
                      <Box className="col-2">
                        <Image src={`./img/${wheel.srcImg}`} width="60px" alt="" />
                      </Box>
                      <Box className="col-10 d-flex align-items-center">
                        {wheel.idWheel}-inch {car.title} Wheels
                      </Box>
                    </Box>
                  </ListItem>
                ))
              ))}
            </List>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ChooseCarColor;
