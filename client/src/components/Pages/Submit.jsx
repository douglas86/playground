import { useContext } from "react";
import { Context } from "./Context";

const Submit = () => {
  const user = useContext(Context);

  const handleSubmit = () => {
    console.log(user.data);
  };

  const handleInputChange = (e) => {
    e.persist();
    user.setData((i) => ({
      ...i,
      [e.target.name]: [e.target.value],
    }));
    console.log(user.data);
  };

  return {
    handleSubmit,
    handleInputChange,
  };
};

export default Submit;
