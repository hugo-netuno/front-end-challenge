import parse from 'html-react-parser'
import { useContext, useEffect } from 'react';
import ApikiBlogContext from '../context/ApikiBlogContext';
import getPost from '../services/getPost';
import PostCard from './PostCard';
import PostDetails from './PostDetails';
// import PostCard from './PostCard';

const PostsList = () => {
  const { data, setData,posts,setPosts } = useContext(ApikiBlogContext);
  const target = data.map((post) => post.content);
  // console.log(target);
  const string = JSON.stringify(target);
  // console.log(string);
  const tags = [...string.matchAll(/(<.*?>)/g)];
  // for (let i = 0; i < tags.length; i++) {
  //   tags[i] = tags[i] + '\n';    
  // }
  // console.log(tags);
  const modeling = () => {
  let result = '';
  for (const match of tags) {
    // console.log(match);
   result = result + match[0].toString() + '\n';
}
return result;
  }
  // const modelingData = modeling();
  // console.log(modelingData);
  return (
    <div>
      {string}
    </div>
  );
};

export default PostsList;
