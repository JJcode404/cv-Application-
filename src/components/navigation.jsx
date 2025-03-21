import { Button } from "./button";
function Navigation() {
  return (
    <div className="navigation">
      <Button
        text="Previous"
        width={125}
        backgroundColor="#ffffff"
        border={"3px solid blue"}
      />
      <Button width={200} next={`Work history`} />
    </div>
  );
}

export { Navigation };
