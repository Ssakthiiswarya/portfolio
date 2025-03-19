import { motion } from "framer-motion";

const Portfoliopage = () => (
  <motion.div
    className="portfoliopage"
    style={{ textAlign: "left", padding: "20px" }}
    initial={{ x: "100vw" }} // Page starts off-screen (right)
    animate={{ x: 0 }} // Moves to normal position
    transition={{ type: "tween", duration: 1 }} // Smooth animation
  >
    {/* Portfolio Heading */}
    <motion.h2
      initial={{ x: "50vw", opacity: 0 }} 
      animate={{ x: 0, opacity: 1 }} 
      transition={{ type: "tween", duration: 1, delay: 0.5 }}
      style={{ marginBottom: "100px" }}
    >
      My resume:
    </motion.h2>

    {/* Resume Section */}
    <motion.div
      initial={{ x: "50vw", opacity: 0 }} 
      animate={{ x: 0, opacity: 1 }} 
      transition={{ type: "tween", duration: 1, delay: 0.7 }}
    >
      <h3>Check out my resume:</h3>
    </motion.div>

    {/* Resume Button */}
    <motion.a 
      href="https://drive.google.com/file/d/1rec7G2UqdATYbvrADXs_fk-aeg2bnFgw/view?usp=sharing"
      target="_blank" 
      rel="noopener noreferrer"
      initial={{ x: "50vw", opacity: 0 }} 
      animate={{ x: 0, opacity: 1 }} 
      transition={{ type: "tween", duration: 1, delay: 0.9 }}
    >
      <motion.button 
        initial={{ x: "50vw", opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        transition={{ type: "tween", duration: 1, delay: 1.1 }}
        style={{
          padding: "10px 20px",
          fontSize: "25px",
          backgroundColor: "black",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "10px"
        }}
      >
        View Resume
      </motion.button>
    </motion.a>
  </motion.div>
);

export default Portfoliopage;
