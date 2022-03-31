import * as React from "react";
import { IdeaI } from "../components/Ideas/ShowIdeas/IdeaList/IdeaList";
import ideaContext from "./idea-context";
import { IdeaContextInterface } from "./idea-context";

interface IdeaProviderProp {
  children: React.ReactNode;
}

const IdeaProvider = ({ children }: IdeaProviderProp) => {
  const [ideas, setIdeas] = React.useState<IdeaI[]>([]);

  const handleAddIdea = (newIdea: IdeaI) => {
    console.log(newIdea);
    setIdeas((prevState) => [...prevState, newIdea]);
  };
  const handleAddFetchedIdeas = (fetchedIdeas: IdeaI[]) => {
    setIdeas(fetchedIdeas);
  };

  const ideaContextValue: IdeaContextInterface = {
    ideaList: ideas,
    addIdea: handleAddIdea,
    addFetchedIdeas: handleAddFetchedIdeas,
  };

  return (
    <ideaContext.Provider value={ideaContextValue}>
      {children}
    </ideaContext.Provider>
  );
};

export default IdeaProvider;
