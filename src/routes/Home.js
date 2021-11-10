import { addDoc, collection, getDocs } from "@firebase/firestore";
import { dbService } from "fbase";
import { useEffect, useState } from "react";


const Home = () => {
    const [nweet, setNweet] = useState("");

    const getNweets = async () => {
        const dbNweets = await getDocs(collection(dbService, "nweets"));
        dbNweets.forEach((doc) => console.log(doc.data()));
    }

    useEffect(() => {
        getNweets();
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        // await dbService.collection("nweets").add({
        //     text: nweet,
        //     createdAt: Date.now(),
        // });
        try {
            const docRef = await addDoc(collection(dbService, "nweets"), {
                text: nweet,
                createdAt: Date.now()
            });
            console.log("Documents written with ID: ", docRef.id);
        } catch(e) {
            console.error("Error adding document: ", e);
        }
        setNweet("");
    }

    const onChange = (event) => {
        event.preventDefault();
        const {
            target: {value},
        } = event;
        setNweet(value);
    }

    return (
        <form onClick={onSubmit}>
            <input
                value={nweet}
                onChange={onChange}
                type="text"
                placeholder="What is on your mind?"
                maxLength={120}
            />
            <input type="submit" value="Nweet" />
        </form>
    );
};
export default Home;