
// import user.js and movies.js
import user from './user.js'
import {def, movie} from './movie.js'

// merge the three schemas into type definitions
const typeDefs = [user,def, movie]

export default typeDefs