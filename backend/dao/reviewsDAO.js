import mongodb from "mongodb"
const ObjectId = mongodb.ObjectId

let reviews

export default class ReviewsDAO {
  static async injectDB(conn){
    if(reviews){
      return
    }
    try{
      reviews = await conn.db(process.env.MOVIEREVIEWS_NS).collection('reviews')
    }
    catch(e){
      console.log(`Unable to stablish connection handle in reviewDAO; ${e}`)
    }
  }
}