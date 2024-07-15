import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/shivamgarg30304")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github Followers: {data.followers}
      <img
        src={data.avatar_url}
        alt="Github Profile"
        height={300}
        width={300}
      />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const resposne = await fetch("https://api.github.com/users/shivamgarg30304");
  return resposne.json();
};
