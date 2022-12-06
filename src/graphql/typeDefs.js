import { loadFilesSync } from "@graphql-tools/load-files";
import {mergeTypeDefs} from '@graphql-tools/merge'
import path from 'path';

const typeArray = loadFilesSync(path.join(__dirname, 'modules', '**', '*.gql'))
const typeDefs = mergeTypeDefs(typeArray);

// console.log('typeDefs',  typeDefs)

export default typeDefs