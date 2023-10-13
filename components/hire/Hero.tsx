import {useState} from "react";
import {GiCloverSpiked} from "react-icons/gi";
import {MdLocationPin} from "react-icons/md";
import Dropdown from "../ui/Dropdown";

const artworkTypes = [
  "Painting",
  "Sculpture",
  "Drawing",
  "Photography",
  "Printmaking",
  "Mixed Media",
  "Digital Art",
  "Illustration",
  "Ceramics",
  "Textile Art",
  "Installation Art",
  "Performance Art",
  "Collage",
  "Assemblage",
  "Graffiti Art",
  "Land Art",
  "Street Art",
  "Abstract Art",
  "Realism",
  "Impressionism",
  "Expressionism",
  "Cubism",
  "Surrealism",
  "Pop Art",
  "Minimalism",
  "Contemporary Art",
];

const Hero:React.FC = () => {
  const [shown, setShown] = useState<boolean>(false);
  const [selectedArtType, setSelectedArtType] = useState<string | null>(null);

  const handleArtTypeSelection = (artType: string) => {
    setSelectedArtType(artType);
    setShown(false);
  };

    return (
      <div className="w-full h-[20rem] relative bg-cover bg-no-repeat" 
        style={{
        backgroundPosition: "50%",
        backgroundImage:
          "url('https://mdbcdn.b-cdn.net/img/new/slides/146.webp')",
        height: "500px",
      }}>
        <div className="w-full h-full relative bg-blue-600/30 backdrop-brightness-75">

        <div className="absolute flex justify-center items-center bottom-[-5rem] left-0 right-0 mx-auto h-[10rem] w-[60rem] bg-white z-[10] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
            <div className="flex justify-between w-[90%] bg-gray-200 rounded-full items-center p-2">
                <div className="flex flex-1 gap-2 items-center p-3"> <div className=" rounded-full bg-[#333] p-2"> <GiCloverSpiked className="w-[2rem] h-[2rem] text-white"/> </div> 
                <Dropdown shown={shown} setShown={setShown} label={selectedArtType || "What are you looking"}> 
                 <ul className="w-full max-h-[30rem] overflow-y-auto flex flex-col gap-2 p-3"> 
                    {artworkTypes.map((artType, index) => (
                      <li className="px-3 py-2 bg-white hover:bg-gray-100 cursor-pointer border-b" key={index} onClick={() => handleArtTypeSelection(artType)}>
                        {artType}
                      </li>
                    ))}
                  </ul>
                 </Dropdown>
                </div>
                <div className="flex flex-1 gap-2 items-center p-3"> <div className=" rounded-full bg-[#333] p-2"> <MdLocationPin className="w-[2rem] h-[2rem] text-white"/> </div> <input placeholder="Where?" className="border-none outline-none focus:outline-none bg-transparent" />  </div>
                <button className="btn-primary rounded-full"> Search Now</button>
            </div>
        </div>
        </div>
      </div>
    );
  };

  export default Hero