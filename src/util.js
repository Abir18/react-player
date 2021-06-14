import { v4 as uuidv4 } from 'uuid';

const chillHop = () => {
  return [
    {
      name: 'Beaver Creek',
      artist: 'Middle School, Aso, Aviino',
      cover: 'https://f4.bcbits.com/img/a2013294891_16.jpg',
      audio:
        'https://t4.bcbits.com/stream/b649701f97d71ce3ba51f6231071a2da/mp3-128/4100762954?p=0&ts=1622748010&t=8d4a4a9816bce33f3741e6b3a92c694a44e8498a&token=1622748010_e60ecdd17677beb0ef28e8b729af482272fdf7e5',
      color: ['#153742', '#1E352F'],
      id: uuidv4(),
      active: true
    },
    {
      name: 'Under the City Stars',
      artist: 'Middle School, Aso, Aviino',
      cover: 'https://f4.bcbits.com/img/a2013294891_16.jpg',
      audio:
        'https://t4.bcbits.com/stream/c300fb5ab47a349074651c49c8b64547/mp3-128/1173445087?p=0&ts=1622748844&t=a1974d2475df127d2cd8a230ec91bf9750e2390b&token=1622748844_1b0bdd50ce4fcb2fe0857a25c5b9922ec291f8ac',
      color: ['#153742', '#1E352F'],
      id: uuidv4(),
      active: false
    }
  ];
};

export default chillHop;
