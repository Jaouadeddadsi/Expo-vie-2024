const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const cloudinaryLink = (
  name: string,
  id: string,
  width: number,
  height: number
) => {
  const link = `https://res.cloudinary.com/dvct0ej2a/image/upload/c_scale,w_${width},h_${height}/${id}/expo-vie/${name}`;
  return link;
};

const cloudinaryPhotos = [
  {
    name: "6ce1e0427df163984d6503494c34ed21_fijflf.jpg",
    id: "v1708522641",
    width: 4096,
    height: 2731,
  },
  {
    name: "288b1291d919cf04e40f61870af6eb6a_yyse8z.jpg",
    id: "v1708522641",
    width: 4096,
    height: 2731,
  },
  {
    name: "b063fe5fe1cb1405a68c6350d8077113_rftzkw.jpg",
    id: "v1708522641",
    width: 4096,
    height: 2731,
  },
  {
    name: "bc71f263e70404e0231ab66304475bcb_bq3kin.jpg",
    id: "v1708522641",
    width: 4096,
    height: 2731,
  },
  {
    name: "51e2a3008d3fd97a55a8d020f1c88f33_x7rbaq.jpg",
    id: "v1708522641",
    width: 4096,
    height: 2731,
  },
  {
    name: "c26ae486ebc947a6566fabeff1be4ec8_csfgun.jpg",
    id: "v1708522641",
    width: 4096,
    height: 2731,
  },
];

const photosCeremo = cloudinaryPhotos.map((photo) => {
  const width = breakpoints[0];
  const height = Math.round((photo.height / photo.width) * width);
  const src = cloudinaryLink(photo.name, photo.id, width, height);
  return {
    src,
    width,
    height,
    srcSet: breakpoints.map((breakpoint) => {
      const height = Math.round((photo.height / photo.width) * breakpoint);
      return {
        src: cloudinaryLink(photo.name, photo.id, breakpoint, height),
        width: breakpoint,
        height,
      };
    }),
  };
});

export default photosCeremo;
