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
    name: "img-1_lx72kl.jpg",
    id: "v1708187369",
    width: 768,
    height: 512,
  },
  {
    name: "img-2_amnszz.jpg",
    id: "v1708187536",
    width: 768,
    height: 512,
  },
  {
    name: "img-3_dxmude.jpg",
    id: "v1708187620",
    width: 768,
    height: 512,
  },
  {
    name: "img-4_kzomia.jpg",
    id: "v1708187714",
    width: 512,
    height: 768,
  },
  {
    name: "img-5_ihq1dl.jpg",
    id: "v1708187791",
    width: 768,
    height: 512,
  },
  {
    name: "img-6_dj90oa.jpg",
    id: "v1708187877",
    width: 768,
    height: 512,
  },
];

const photos = cloudinaryPhotos.map((photo) => {
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

export default photos;
