
// import user.js and movies.js
import user from './user'
import {def, movie} from './movie'

// merge the three schemas into type definitions
const typeDefs = [user,def, movie]

export default typeDefs