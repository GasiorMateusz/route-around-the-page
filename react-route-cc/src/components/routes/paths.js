
import Path from "./Path"
import Home from "../Home";
import About from "../About";
import Contacts from "../Contacts";

export const PATHS = [
    new Path("/","Home",Home()),
    new Path("/about","About",About()),
    new Path("/contacts","Contacts",Contacts()),
]

