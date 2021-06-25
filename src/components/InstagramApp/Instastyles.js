

// NavBar
export const Navigation = {
  background: "#fff",
  position: "relative",
  top: "0",
  zIndex: "2",
  width: "100%",
  borderBottom: "1px solid lightgray"
};

export const Container = {
  margin: "0 auto",
  padding: "1em 0 0 0.9em 0",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  maxWidth: "1000px",
};

export const Instalogo = {
  padding: "0 1em",
  height: "100px",
};

export const Search = {
  minWidth: "300px",
  alignItems: "center",
  justifyContent: "center",
  margin: "20px",
};
export const searchForm = {
  position:"relative",
  width: "100%"
}

export const SearchImg = {
  position: "absolute",
  top: "10px",
  right: "8px",
  width: "20px",
  opacity: "0.4",
  pointerEvents: "none"
};


export const SearchInput = {
  width: "100%",
  color: "grey",
  fontSize: "0.85em",
  height: "40px",
  outline: "none",
  border: "1px solid lightgrey",
  borderRadius: "4px"
};

// Profile title

export const wrapper = {
  display: "flex",
  justifyContent: "center", 
  height: "272px",
  transition: "height 1s, translate 1s"
}

export const profileWrapHide = {
  translate: "0px -500px",
  height: "1px",

}
export const profileContainer = {
  margin: "40px",
  display: "flex",
  flexDirection: "row",
  borderBottom: "1px solid lightgray",
  paddingBottom: "43px"

}

export const profilePhoto = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "300px"
}

export const profilePhotoSvg = {
  width: "150px",
  borderRadius: "50%",
  boxShadow: "0 0 15px 5px",
}

export const profileInfo = {
  width: "500px",
  display: "flex",
  flexDirection: "column",
}

export const profileTitle = {
  marginBottom: "20px",
  display:"flex",
}

export const userName = {
  paddingRight: "20px",
}

export const userTitleButton = {
  background:"transparent",
  border: "1px solid lightgrey",
  height: "30px",
  borderRadius: "4px",
  fontWeight: "300px",
  cursor: "pointer"
}

export const subscribesContainer = {
  marginBottom: "20px",
  paddingRight: "20px",
  display:"flex",
}

export const publications = {
  paddingRight: "20px",
}

export const subscribers = {
  paddingRight: "20px",
}

export const subscribes = {

}

export const statusContainer = {

}


//InstaPosts

export const postsWrapper = {
  display:"grid",
  justifyContent: "center",
  width: "100%",
  gridTemplateColumns: "1fr"
}

export const postsContent = {
  margin: "30px",
  display: "grid",
  gridGap: "20px",
  justifyContent: "center",
  gridTemplateColumns: "repeat(auto-fit, minmax(293px, max-content))"
}

//InstaPostCard

export const postCardContainer = {
  // width: "293px",
  // height: "293px",
  cursor: "pointer",
  // width: "500px"
  // overflow: "hidden"
}

export const InstapostCardPhoto = {
  width: "100%",
  height: "100%",
  objectFit: "cover"
  
}

//IstaModal

export const modalTitle = {
  display: "grid",
  gridAutoFlow: "column",
  alignItems: "center",
  padding: "15px",
}

export const modalTitleImg = {
    width: "40px",
    borderRadius: "50%",
}
export const modalTitleCaption = {
  textAlign: "center",
  color: "grey",
}

export const modatCommentWrapper = {                  
  display: "grid",
  gridAutoFlow: "row",
  gridTemplateRows: "0fr 21.5fr 0fr",
}

// InstaPostComments

export const commentsInputContainer = {
    maxHeight: "100%",
    height: "100%",
    display: "grid",
    gridTemplateRows: "1fr 0fr",
}

export const modalCommentContent = {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    overflow:"auto",
    padding: "20px"
}
export const modalCommentsList ={
  padding:"5px",
  borderTop: "1px solid lightgrey"
}
export const commentTextArea = {
  width: "100%",
  padding:"10px",
  outline: "none",
  borderTop: "1px solid lightgrey",
  borderBottom: "1px solid lightgrey",
  borderLeft: "none",
  resize:"none",

}
export const textAreaButtonContainer = {
  paddingTop: "20px"
}

export const commentbuttonContainer = {
  paddingBottom: "15px",
}

export const commentbutton = {
  width: "100%",
  border: "none",
  background: "#fff",
  color: "grey",
  // fontWeight: "lighter",
  fontSize: "large"
}

//NavBar 

export const NavBar = {
  zIndex: "3",
  position:"relative",
}
