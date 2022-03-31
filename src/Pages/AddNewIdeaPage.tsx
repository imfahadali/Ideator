import React, { useContext } from "react";
import AddNewIdea, {
  AddNewIdeaValues,
} from "../components/Ideas/AddIdea/AddNewIdea";
import ideaContext from "../store/idea-context";
import { IdeaI } from "../components/Ideas/ShowIdeas/IdeaList/IdeaList";
import { toast } from "react-toastify";
const AddNewIdeaPage: React.FC = () => {
  const ideaCtxt = useContext(ideaContext);

  const pushNewIdeaToDB = async (ideaToAdd: IdeaI) => {
    const res = await fetch(
      "https://ideator-new-default-rtdb.firebaseio.com/ideas.json",
      {
        method: "POST",
        body: JSON.stringify(ideaToAdd),
      }
    );
    if (res.ok) {
      toast.success("Added");
    }
    const resData = await res.json();
    return resData;
  };

  const handleSubmit = (values: AddNewIdeaValues) => {
    console.log(values);

    const newIdea = {
      id: Math.floor(Math.random() * 200),
      idea: values.idea,
      ideator: values.ideator,
    };

    pushNewIdeaToDB(newIdea).then(async (e) => {
      const res = await fetch(
        `https://ideator-new-default-rtdb.firebaseio.com/ideas.json`
      );

      const resData = await res.json();
      console.log(resData);
      console.log(resData[e.name]);
      ideaCtxt.addIdea(resData[e.name]);
    });
    // add idea to firebase
    console.log(ideaCtxt.ideaList);
  };

  return (
    <>
      <AddNewIdea submitForm={handleSubmit} />
    </>
  );
};

export default AddNewIdeaPage;

// if (newIdea && newIdeator) {
//   ideaId++;
//   ideaId += 1;
//   console.log(ideaId);
//   ideaCtxt.addIdea({
//     id: ideaId++,
//     idea: newIdea,
//     ideator: newIdeator,
//   });
// }
