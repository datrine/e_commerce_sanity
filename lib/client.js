import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';
let sanityProjectID=process.env.NEXT_SANITY_PROJECT_ID|| process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
let sanityToken=process.env.NEXT_SANITY_TOKEN|| process.env.NEXT_PUBLIC_SANITY_TOKEN

export const client = createClient({
  projectId: sanityProjectID,
  dataset: 'first_dataset',
  apiVersion: '2022-03-10',
  useCdn: true,
  token: sanityToken
});
console.log({oooo:sanityProjectID})
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);