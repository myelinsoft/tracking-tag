import React, {useEffect} from "react";
import { TgTag } from 'tracking-tag'

const App = () => {
  useEffect(() => {
    TgTag({
      wp_hcuid: "",
      ti: "55379", // ad id
      ty: "Home",
      device: "web"
    })
  }, [0]);

  return (
    <div>NextJS12</div>
  );
};

export default App;
