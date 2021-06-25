import React from "react";
import { useDispatch } from "react-redux";
import { accountSetUser } from "../redux/actions";

export default function AuthCheck(props) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    fetch("//api.switter.maxqnei.com/check/instalog", {
      credentials: "include",

    })
    .then(r => r.json())
    .then(result => {
        if (result && result.logged === true) {
          dispatch(accountSetUser({
            id:1
          }))
        }
    }) 
},[])
  return null
}