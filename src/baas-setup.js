import {Client, Databases, Query} from 'appwrite';

const {VITE_BAAS_ENDPOINT, VITE_PROJECT_ID, VITE_DATABASE_ID, VITE_COLLECTOIN_ID} = import.meta.env;

const BAAS_ENDPOINT = VITE_BAAS_ENDPOINT;
const PROJECT_ID = VITE_PROJECT_ID;
export const DOCS_LIMIT_QUERY = Query.limit(500);
export const DATABASE_ID = VITE_DATABASE_ID;
export const COLLECTOIN_ID = VITE_COLLECTOIN_ID;

const client = new Client();
  client
    .setEndpoint(BAAS_ENDPOINT)
    .setProject(PROJECT_ID);

export const db = new Databases(client);