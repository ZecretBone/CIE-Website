import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Grid from '@mui/material/Grid';

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function NewGallery() {
  return (
    <Grid
    container
      
      alignItems="center"
      justifyContent="center "
    >
    <ImageList
      sx={{
         width: '70%',
        height: '100%',
        // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
        transform: 'translateZ(0)',
      }}
      rowHeight='100%'
      gap={1.5}
    >
      {itemData.map((item) => {
        const cols = item.featured ? 4 : 2;
        const rows = item.featured ? 4 : 2;

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows}>
            <img
              {...srcset(item.img, 250, 200, rows, cols)}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              title={item.title}
              position="top"
              
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
    </Grid>
  );
}

const itemData2 = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
  },
];

const itemData = [
    {
      img: 'https://scontent.fbkk29-2.fna.fbcdn.net/v/t39.30808-6/296354746_1697765200585328_331589857183546216_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=3yPF8PI1WI4AX_o-FTL&_nc_ht=scontent.fbkk29-2.fna&oh=00_AT9f1lTd5fHIcHL5pG6zhV-tesATaeCYqeLoHEbIQIqR5g&oe=6359DE4A',
      title: 'Field Trip @Google Singapore 2022',
      author: '',
      featured: true,
    },
    {
      img: 'https://scontent.fbkk29-5.fna.fbcdn.net/v/t39.30808-6/234786386_1449015048793679_4929737939052787469_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=hrgi7SVE2fsAX8Q6SId&_nc_ht=scontent.fbkk29-5.fna&oh=00_AT9rjcCoAh5xAPtJBcyTFAJ2-1OYma6Lyfa_H1m8PSiHQw&oe=635B3EA5',
      title: 'Pre CIE#2',
      author: '',
    },
    {
      img: 'https://scontent.fbkk29-1.fna.fbcdn.net/v/t39.30808-6/297835547_1703938743301307_8087234048809158683_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=DP5118ViyHMAX9EMa9A&tn=dQ7t3ulJgTAnff6a&_nc_ht=scontent.fbkk29-1.fna&oh=00_AT89SuytxNfOqoPLAatcnqkqeDz_OJSF5ipfopdrK0IpKg&oe=635B261B',
      title: 'Field Trip @Salesforce Singapore',
      author: '',
    },
    {
      img: 'https://scontent.fbkk29-5.fna.fbcdn.net/v/t1.6435-9/124949606_1265577967137389_8663355200567969395_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=0FkyP0iOod4AX9qYk3j&_nc_ht=scontent.fbkk29-5.fna&oh=00_AT81WcI6fQSYBcelnsAbyZqkK0mlbROQR2qrQ1ZUTfleFg&oe=637A71D9',
      title: 'lab visited by Assumption College',
      author: '',
    },
    {
      img: 'https://scontent.fbkk29-5.fna.fbcdn.net/v/t1.6435-9/125261262_1263825923979260_513659046463885695_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0debeb&_nc_ohc=Odis7ahgcg8AX9qgUAF&_nc_ht=scontent.fbkk29-5.fna&oh=00_AT-T20zXYnzxRB1o2i8vQNMDTfomj-xMcCEG2oE2k_zNLg&oe=637A1177',
      title: 'CIE prepup Day1',
      author: '',
    },
    {
      img: 'https://scontent.fbkk29-2.fna.fbcdn.net/v/t1.6435-9/125871024_1264664550562064_7460038681971425677_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0debeb&_nc_ohc=Rt_mevGtz8AAX8cqEFh&_nc_ht=scontent.fbkk29-2.fna&oh=00_AT_rJaK232BaBBX9t3ct6oIMsQusC9tn7XqG_L27NA9dqA&oe=637B4F34',
      title: 'CIE prepup Day2',
      author: '',
      featured: true,
    },
    {
      img: 'https://scontent.fbkk29-2.fna.fbcdn.net/v/t1.6435-9/123563759_1257341614627691_1038582850152375063_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=86og0rdcbn0AX-5I7W2&_nc_ht=scontent.fbkk29-2.fna&oh=00_AT_cJLkaJUjzyi2c7BLonWBPsk2oumzY5rDM2y4q7j8U_Q&oe=637AD80B',
      title: 'Senior Graduation Day 2020',
      author: '',
    },
    {
      img: 'https://scontent.fbkk29-4.fna.fbcdn.net/v/t1.6435-9/122102970_1242792302749289_119527489436378560_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=uAup7QTcUfoAX-U-fhR&_nc_ht=scontent.fbkk29-4.fna&oh=00_AT-q-n2djjk8_VSgr0LJ6BsnRYddqkicSC8YOXv5oi134A&oe=637C1F43',
      title: 'CIE openhouse 2020',
      author: '',
    },
    {
      img: 'https://scontent.fbkk29-2.fna.fbcdn.net/v/t1.6435-9/80680786_1002989343396254_6343259322838941696_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=i7Cql_M5n9QAX-P1sYT&tn=dQ7t3ulJgTAnff6a&_nc_ht=scontent.fbkk29-2.fna&oh=00_AT8KUmhVIsIZnX1KQ3oUjbLNtw_g5RIOSTEDONc3ZXxfow&oe=637B6703',
      title: 'Field Trip @Tokyo Tech Japan 2019',
      author: '',
    },
    {
      img: 'https://scontent.fbkk29-5.fna.fbcdn.net/v/t1.6435-9/73292704_945192285842627_2261583474307629056_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=90iqFZk3YbsAX8r0JfD&_nc_ht=scontent.fbkk29-5.fna&oh=00_AT8KMgVAJF4dIrMsbt59gMv2fASPUE5sSxgAh86LZcx4jg&oe=637A8657',
      title: 'CIE workshop 2019',
      author: '',
    },
    {
      img: 'https://scontent.fbkk29-4.fna.fbcdn.net/v/t1.6435-9/71167433_917110265317496_7674000380534980608_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=52eoRfWpdC8AX9EPx-g&_nc_ht=scontent.fbkk29-4.fna&oh=00_AT-fwFYdoDpypJXDI5JaxLbqVa9-bgRxUCZVUOm2gsiZwQ&oe=637CF860',
      title: '',
      author: '',
    },
    {
      img: 'https://scontent.fbkk29-2.fna.fbcdn.net/v/t1.6435-9/55543743_800018447026679_5581613754124075008_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=d868f525jV4AX__GJlD&_nc_ht=scontent.fbkk29-2.fna&oh=00_AT-SjQ4-EUu95UMswP-IEzLLkRdMxfCW-SHZgroFItYFpg&oe=637AA0A0',
      title: '',
      author: '',
    },
  ];