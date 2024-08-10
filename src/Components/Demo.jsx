import { useEffect } from "react"
import { https } from "../services/axios.config";

export const Demo = () => {
  useEffect(() => {
    https.get('people/1/').then((res) => {
        console.log("asfdas")
        console.log(res);
    });
  }, []);
  return (
    <div>Demo</div>
  )
}
