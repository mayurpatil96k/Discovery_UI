let arr = [
  {
    temp: "78°F  -  10.7mph  - 88° ",
    title1: "Lake Tahoe,California",
    title2: "Homewood Mountain & Lake Club",
    location: "39.08629948516978° N / -120.1605391°W",
    img: "https://discoverylandco.com/imager/images/17236/Homewood_Andy-Carlson_OP_february_2022_DJI_056400004_d169f13de117664acdaa1543841b7c16.jpg",
  },
  {
    temp: "39°F - 0mph  - 0° ",
    title1: "Silicon Valley,California",
    title2: "CordeValle",
    location: "37.067811° N / -121.632827°W",
    img: "https://discoverylandco.com/imager/images/16412/MATT6402-1_d169f13de117664acdaa1543841b7c16.jpeg",
  },
  {
    temp: "44°F - 0mph  - 0° ",
    title1: "La Quinta,California",
    title2: "Madison",
    location: "33.660960° N / -116.244456°W",
    img: "https://discoverylandco.com/imager/images/692/Summit7_d169f13de117664acdaa1543841b7c16.jpg ",
  },
  {
    temp: "45°F - 1mph -  257° ",
    title1: "La Quinta,California",
    title2: "Hideaway",
    location: "33.667059° N / -116.260879°W",
    img: "https://discoverylandco.com/imager/images/7325/Estancia_sized_d169f13de117664acdaa1543841b7c16.jpg",
  },
  {
    temp: "57°F - 5mph -  20° ",
    title1: "Las Vegas,Nevada",
    title2: "The Summit",
    location: "36.1094° N / -115.3287°W",
    img: "https://discoverylandco.com/imager/images/692/Summit7_d169f13de117664acdaa1543841b7c16.jpg",
  },
  {
    temp: "36°F  -3mph   -56° ",
    title1: "Scottsdale,Arizona",
    title2: "Estancia",
    location: "33.738105° N / -111.865240°W",
    img: "https://discoverylandco.com/imager/images/7325/Estancia_sized_d169f13de117664acdaa1543841b7c16.jpg",
  },
  {
    temp: "35°F - 3mph -  56° ",
    title1: "Scottsdale,Arizona",
    title2: "Mirabel",
    location: "33.823760° N / -111.851592°W",
    img: "https://discoverylandco.com/imager/images/630/Mirabel-carousel1_d169f13de117664acdaa1543841b7c16.jpeg",
  },
  {
    temp: "54°F - 5mph -  345° ",
    title1: "Los Cabos,Mexico",
    title2: "El Dorado",
    location: "22.995771° N / -109.746423°W",
    img: "https://discoverylandco.com/imager/images/485/eld3-carousel_190708_150708_d169f13de117664acdaa1543841b7c16.jpg",
  },
  {
    temp: "61°F  -4mph  - 351° ",
    title1: "Cabo San Lucas,Mexico",
    title2: "Chileno Bay",
    location: "22.953650° N / -109.816218°W",
    img: "https://discoverylandco.com/imager/images/291/Bakers-hero_c7e067ed03eb23b2d1e6333b4c154b30.jpg",
  },
  {
    temp: "37°F - 9mph -  200° ",
    title1: "British Columbia,Canada",
    title2: "James Island",
    location: "48.602830922° N / -123.342998628°W",
    img: "https://discoverylandco.com/imager/images/images/13673/Seaglass-Lifestyle-Photoshoot-Raws-1015-of-1188_d169f13de117664acdaa1543841b7c16.jpeg",
  },
];

var count = 0;
function increment() {
  if (count < 9) {
    count++;
  } else {
    count = 0;
  }
  console.log(count);
}

function decrement() {
  if (count > 0) {
    count--;
  } else {
    count = 9;
  }
  console.log(count);
}

function previous() {
  increment();
  const obj = arr[count];
  console.log(obj.temp);
  const inputString = obj.temp;
  let parts = inputString.split("-");
  parts = parts.map((part) => part.trim());
  $('#jstemp').text(parts[0]);
  $('#jswind').text(parts[1]);
  $('#jsdeg').text(parts[2]);
  $('#jscity').text(obj.title1);
  $('#jsinfo').text(obj.title2);
  $('.coordinatees').text(obj.location);
  $('.giimg').attr('src', obj.img);
}

function next() {
    decrement();
    const obj = arr[count];
    console.log(obj.temp);
    const inputString = obj.temp;
    let parts = inputString.split("-");
    parts = parts.map((part) => part.trim());
    $('#jstemp').text(parts[0]);
    $('#jswind').text(parts[1]);
    $('#jsdeg').text(parts[2]);
    $('#jscity').text(obj.title1);
    $('#jsinfo').text(obj.title2);
    $('.coordinatees').text(obj.location);
    $('.giimg').attr('src', obj.img);
}
