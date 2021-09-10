import React from "react";
import ReactDom from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import SeasonDisplay from "./SeasonDisplay";
import Clock from "./time";
// import App from "./App";
import unsplash from "./unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

// const App = () => {
//   return (
//     <div className="ui container comments">
// {/* 
//       <ApprovalCard>
//         <CommentDetail
//           author="sam"
//           timeAgo="today at 4:45PM"
//           content="nice blog post"
//           avatar={faker.image.avatar()}
//         />
//       </ApprovalCard>

//       <ApprovalCard>
//         <CommentDetail
//           author="alex"
//           timeAgo="today at 2:00AM"
//           content="I like the subject"
//           avatar={faker.image.avatar()}
//         />
//       </ApprovalCard>

//       <ApprovalCard>
//         <CommentDetail
//           author="jane"
//           timeAgo="yesterday at 5:00PM"
//           content="I like the writing"
//           avatar={faker.image.avatar()}
//         />
//       </ApprovalCard>

//       <SeasonDisplay /> */}
//       <Clock />
//       <SearchBar className='ui container' style={{marginTop:'10px'}} />
//     </div>
//   );
// };
class App extends React.Component {
  state = { images : [] }
  onSearchSubmit = async (term) => {
    const response =  await unsplash
    .get('/search/photos',{
       params:{query: term},
       
    })
    // .then((response) => {
    //   console.log(response.data.results)
    // })
    this.setState({images: response.data.results})
  }
  render() {
    return (
      <div className='ui container' style={{marginTop:'10px'}} >
      <SearchBar onSubmit={this.onSearchSubmit} />
      <ImageList images={this.state.images} />
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById("root"));
