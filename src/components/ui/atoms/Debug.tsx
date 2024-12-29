import { updateStore, useExampleStore } from "@stores/exampleStore";
import { Leva, useControls } from "leva";

export const Debug = () => {
  useControls({
    debug: {
      value: useExampleStore.use.debug(),
      onChange: (e) => updateStore({ debug: e }),
    },
  });

  return <Leva oneLineLabels collapsed hidden={import.meta.env.MODE === "production"} />;
};
