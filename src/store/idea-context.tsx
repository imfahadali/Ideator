import * as React from "react";
import { IdeaI } from "../components/Ideas/ShowIdeas/IdeaList/IdeaList";

export interface IdeaContextInterface {
  ideaList: { id: number; idea: string; ideator: string }[];
  addIdea: (newIdea: IdeaI) => void;
  addFetchedIdeas: (fetchedIdeas: IdeaI[]) => void;
}

const ideaContext = React.createContext<IdeaContextInterface>({
  ideaList: [
    {
      id: 0,
      idea: "",
      ideator: "",
    },
  ],
  addIdea: (param) => {},
  addFetchedIdeas: (param) => {},
});
export default ideaContext;
