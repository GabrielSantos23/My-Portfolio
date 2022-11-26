import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
const projectid = import.meta.env.VITE_SANITY_PROJECT_ID;
const token = import.meta.env.VITE_SANITY_TOKEN;

export const client = sanityClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-11-24',
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
