import { PiCloudArrowDown  } from "react-icons/pi";
import { Button } from "../../button/button";

export function Export() {
  return (
    <div className="flex gap-3">
      <Button title="Download PDF" iconLeft={() => <PiCloudArrowDown size={24}/>}></Button>
      <Button title="Download CSV " iconLeft={() => <PiCloudArrowDown size={24}/>}></Button>
    </div>
  )
}