import React from "react";

const About = ({
  title = "About Us",
  description = "Welcome to our restaurant!",
  className,
}) => {
  return (
    <div className={className}>
      <h3>{title}</h3>
      <h3>{description}</h3>
    </div>
  );
};

const enhancedCard = (About) => {
  return function EnhancedAbout(props) {
    const apiData = {
      type: "premium",
      status: "active",
    };

    let modifications = {}; // Our Collection Box

    if (apiData.type === "premium") {
      modifications.className = "border-2 border-gold bg-yellow-100 p-4";
      modifications.title = " ⭐" + props.title || "About Us";
    } else {
      modifications.className = "border p-2";
      modifications.title = props.title || "About Us";
    }

    return (
      <About
        {...props}
        title={modifications.title}
        className={modifications.className}
      />
    );
  };
};

const EnhancedAbout = enhancedCard(About);

export default EnhancedAbout;
