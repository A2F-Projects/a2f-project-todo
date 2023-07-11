const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
    
    // Headings
    heading1: "font-amatic text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl",
    heading2: "font-amatic text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl",
    heading3: "font-amatic text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl",
    
    // Paragraph
    paragraph: "font-cormorant font-normal text-slate-800 text-[16px] leading-[30.8px]",
    
    // Flexbox
    flexCenter: "flex justify-center items-center",
    flexStart: "flex flex-grow justify-center items-start",
    
    // Padding
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
    
    // Margin
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
    
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
    
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;
  