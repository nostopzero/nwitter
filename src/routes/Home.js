import { addDoc, collection, getDocs, onSnapshot } from "@firebase/firestore";
import Nweet from "components/Nweet";
import { dbService } from "fbase";
import { useEffect, useState } from "react";


const Home = ({userObj}) => {
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);
    const [nweeets, setNweeets] = useState("");

    useEffect(() => {
        onSnapshot(collection(dbService, "nweets"), (snapshot) => {
            const newArray = snapshot.docs.map((document) => ({
                id: document.id,
                ...document.data(),
            }));
            setNweets(newArray);
        })
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const docRef = await addDoc(collection(dbService, "nweets"), {
                text: nweet,
                createdAt: Date.now(),
                creatorId: userObj.uid,
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

    const onFileChange = (event) => {
        console.log(event.target.files);
        const {
            target: {files},
        } = event;
        const theFile = files[0];
        const reader = new FileReader();
        reader.readAsDataURL(theFile);
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    value={nweet}
                    onChange={onChange}
                    type="text"
                    placeholder="What is on your mind?"
                    maxLength={120}
                />
                <input type="file" accept="image/*" onChange={onFileChange} />
                <input type="submit" value="Nweet" />
            </form>
            <div>
                {nweets.map((nweet) => (
                    <Nweet
                        key={nweet.id}
                        nweetObj={nweet}
                        isOwner={nweet.creatorId === userObj.uid}
                    />
                ))}
            </div>
        </>
    );
};
export default Home;