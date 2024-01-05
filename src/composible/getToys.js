import { db } from "../database/config.firebase"


const getToys = async (imagePath) => {
    let toys = []
    let error = ""
    try {
        let res = await db.collection('toys').get()
        toys = await res.docs.map((doc)=> {
            return { id: doc.id, ...doc.data() }
        });
    } catch (e) {
        error = e.message
    }

    return {toys, error}
}

export default getToys;