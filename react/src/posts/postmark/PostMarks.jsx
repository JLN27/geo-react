import React from "react";
import { useEffect } from "react";
import { useReducer } from "react";
//import { placeMarksReducer } from "./placeMarksReducer";
import { PostMark } from "./PostMark";
//import { PlaceMarksAdd } from "./PlaceMarksAdd";
import { useDispatch, useSelector } from "react-redux";
import { delmark } from "../../slices/postMarkSlice";



// Estat inicial del reducer. Buit
const initialState = [];
const init = () => {
  // Si localstorage tornes null tornariem un array buit
  return JSON.parse(localStorage.getItem("postmarks")) || [];
};

export const PostMarks = () => {
  // const [placeMarks, dispatchMarks] = useReducer(
  //   placeMarksReducer,
  //   initialState,
  //   init
  // );
  const { postMarks } = useSelector((state) => state.postMarks);
  const dispatch = useDispatch();

 


  useEffect(() => {
    localStorage.setItem("postmarks", JSON.stringify(postMarks));
  }, [postMarks]);

  

  const handleDeleteMark = (id) => {
    dispatch(delmark(id));
    // console.log("Aquí arribo " + id);
    // dispatchMarks({
    //   type: "DelMark",
    //   payload: id,
    // });
  };

  return (
    <>
     
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div>
            {postMarks.length == 0 ? (
              <div className="bg-red-200 font-black grid place-content-center h-24">
                <div>Aquí no hi ha res a veure</div>
              </div>
            ) : (
              <></>
            )}
            {postMarks.map((mark) => (
              <PostMark
                key={mark.id}
                postMark={mark}
                handleDelete={handleDeleteMark}
              />
            ))}

            {/* <div className="flex mb-4 items-center">
              <p className="w-full line-through text-green">
                Submit Todo App Component to Tailwind Components
              </p>
              <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-400 border-gray-600 hover:bg-gray-500">
                Not Done
              </button>
              <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-400 border-red-600 hover:text-white hover:bg-red-500">
                Remove
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
