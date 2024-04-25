
import "../../app/(home)/globals.css"


export const Box = ({
  children,
  className = "",
  ...otherProps 
}) => {

  return (
    <div
      className={` ${className} `}
            
      {...otherProps} // Pass through any remaining props for future customization
    >
      {children}
    </div>
  );
};
