import React from "react";
import "./Styles/Homepage.css";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import img1 from "./Images/Img-1.png";
import img2 from "./Images/Img-2.png";
import img3 from "./Images/Img-3.png";
import all from "./Images/Group 12028.png"
import menu1 from "./Images/Group 12026.png"
import menu2 from "./Images/Group 12029.png"
import menu3 from "./Images/Group 12030.png"
import menu4 from "./Images/Group 12031.png"
import upArr from "./Images/Up-arr-icon.png"

export const Homepage = () => {

    function BasicUsage() {
        var { isOpen, onOpen, onClose } = useDisclosure()
        return (
          <>
            {/* <Button onClick={onOpen}>Open Modal</Button> */}
      
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Lorem count={2} />
                </ModalBody>
      
                <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button variant='ghost'>Secondary Action</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
      }

  return (
    <div>
      <Navbar />
      <div className="container">
        <img src={img1} alt="1" />
        <img src={img2} alt="2" />
        <img src={img3} alt="3" onClick={onOpen}/>
      </div>
      <div className="btns">
        <button><img src={all} alt="" /></button>
        <button><img src={menu1} alt="" /></button>
        <button><img src={menu2} alt="" /></button>
        <button><img src={menu3} alt="" /></button>
        <button><img src={menu4} alt="" /></button>
        <div className="uparr"><img src={upArr} alt=""/></div>
      </div>
      <Footer />
    </div>
  );
};

//5stars "https://i.ibb.co/hFhXB1f/Group-11996.png"
//Product "https://i.ibb.co/QMX4rjr/Product.png"
//Thumbsup "https://i.ibb.co/8nkZ8YL/Group-11995.png"
//Message "https://i.ibb.co/T04z9rv/Group.png"