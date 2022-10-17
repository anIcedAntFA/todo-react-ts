import Chip from "./Chip";
import FormLabel from "./FormLabel";

export default function overridesComponents() {
  return Object.assign(Chip, FormLabel);
}
