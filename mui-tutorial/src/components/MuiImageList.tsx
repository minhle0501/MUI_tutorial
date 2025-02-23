import {
  Stack,
  ImageList,
  ImageListItem,
  Box,
  ImageListItemBar,
} from "@mui/material";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Laptop",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383",
    title: "Mushroom",
  },
  {
    img: "https://images.unsplash.com/photo-1574169208507-84376144848b",
    title: "Castle",
  },
  {
    img: "https://images.unsplash.com/photo-1534080564583-6be75777b70a",
    title: "Mountains",
  },
  {
    img: "https://images.unsplash.com/photo-1560807707-8cc77767d783",
    title: "Sunset",
  },
  {
    img: "https://images.unsplash.com/photo-1542282811-943ef1a977c7",
    title: "Lake",
  },
  {
    img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad",
    title: "Bridge",
  },
  {
    img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    title: "Cityscape",
  },
  {
    img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    title: "Skyscraper",
  },
  {
    img: "https://images.unsplash.com/photo-1560179715-91fd03f9cf17",
    title: "River",
  },
  {
    img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    title: "Foggy Forest",
  },
  {
    img: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8",
    title: "Snowy Mountain",
  },
  {
    img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    title: "Night City",
  },
  {
    img: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85",
    title: "Beach",
  },
];
const itemData2 = [
  {
    img: "https://images.unsplash.com/photo-1518709268803-4f53586f8d67",
    title: "Pizza",
  },
  {
    img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2",
    title: "Sushi",
  },
  {
    img: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9",
    title: "Pasta",
  },
  {
    img: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77",
    title: "Salad",
  },
  {
    img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
    title: "Dessert",
  },
  {
    img: "https://images.unsplash.com/photo-1572373370548-1a8a9945c16a",
    title: "Ice Cream",
  },
  {
    img: "https://images.unsplash.com/photo-1600891964093-90a7e086ee0c",
    title: "Steak",
  },
  {
    img: "https://images.unsplash.com/photo-1594007654729-407eedc4be63",
    title: "Smoothie",
  },
  {
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    title: "Sandwich",
  },
  {
    img: "https://images.unsplash.com/photo-1528715471579-d554c9a2de5d",
    title: "Beverage",
  },
];
const itemData3 = [
  {
    img: "https://images.unsplash.com/photo-1568572933382-74d440642117",
    title: "Car",
  },
  {
    img: "https://images.unsplash.com/photo-1604142706287-5d2ef3ecab02",
    title: "Motorcycle",
  },
  {
    img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9f",
    title: "Bicycle",
  },
  {
    img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    title: "Train",
  },
  {
    img: "https://images.unsplash.com/photo-1473625247510-8ceb1760943f",
    title: "Airplane",
  },
  {
    img: "https://images.unsplash.com/photo-1508138221679-760a23a2285b",
    title: "Ship",
  },
  {
    img: "https://images.unsplash.com/photo-1558222218-0c0f9eb29d37",
    title: "Truck",
  },
  {
    img: "https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd",
    title: "SUV",
  },
  {
    img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf",
    title: "Sports Car",
  },
  {
    img: "https://images.unsplash.com/photo-1586128764492-bb3f1863c07a",
    title: "Convertible",
  },
];

const itemData4 = [
  {
    img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    title: "Forest",
  },
  {
    img: "https://images.unsplash.com/photo-1519624788770-a96d3a584799",
    title: "Ocean",
  },
  {
    img: "https://images.unsplash.com/photo-1576783044504-079f0f95a6f4",
    title: "Waterfall",
  },
  {
    img: "https://images.unsplash.com/photo-1496042399012-29e8cf00b6ee",
    title: "Desert",
  },
  {
    img: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    title: "Jungle",
  },
  {
    img: "https://images.unsplash.com/photo-1541417904950-b855846fe074",
    title: "Volcano",
  },
  {
    img: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5",
    title: "Glacier",
  },
  {
    img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    title: "Island",
  },
  {
    img: "https://images.unsplash.com/photo-1552083375-1447ce886485",
    title: "Lake",
  },
  {
    img: "https://images.unsplash.com/photo-1544985361-9a2454fe084f",
    title: "Cave",
  },
];

const MuiImageList = () => {
  return (
    <Stack spacing={4}>
      {/* kiểu thường */}
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
       {/* kiểu thường có title trên bar */}
       <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {itemData2.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar title={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
      {/* kiểu woven */}
      <ImageList
        variant="woven"
        sx={{ width: 500, height: 450 }}
        cols={3}
        gap={2}
      >
        {itemData3.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      {/* kiểu masonry */}
      <Box sx={{ width: 500, height: 450, overflowY: "scroll" }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData4.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format&dpr=2`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Stack>
  );
};

export default MuiImageList;
