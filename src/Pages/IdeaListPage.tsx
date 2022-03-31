import React, { useContext, useEffect } from "react";
import IdeaList, {
  IdeaI,
} from "../components/Ideas/ShowIdeas/IdeaList/IdeaList";
import ideaContext from "../store/idea-context";

const IdeaListPage: React.FC = () => {
  const ideaCtxt = useContext(ideaContext);

  useEffect(() => {
    fetchingIdeasFronDB().then((returnedObj) => {
      console.log(returnedObj);

      const returnedIdeas = Object.values(returnedObj) as IdeaI[];
      ideaCtxt.addFetchedIdeas(returnedIdeas);
    });
  }, []);

  const fetchingIdeasFronDB = async () => {
    const res = await fetch(
      "https://ideator-new-default-rtdb.firebaseio.com/ideas.json"
    );
    const resData = await res.json();
    return resData;
  };

  return <IdeaList ideaList={ideaCtxt.ideaList} />;
};

export default IdeaListPage;
