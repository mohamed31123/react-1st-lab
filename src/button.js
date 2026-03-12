import { button, script } from "framer-motion/client";

function Button() {
    return <button onClick={() => alert('Button clicked!')}>
        Click me
    </button>;
   
}

export default Button;
