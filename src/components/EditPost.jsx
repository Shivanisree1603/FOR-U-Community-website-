// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams, useHistory } from 'react-router-dom';

// const EditPost = () => {
//   const { id } = useParams();
//   const history = useHistory();
//   const [title, setTitle] = useState('');
//   const [body, setBody] = useState('');

//   useEffect(() => {
//     const fetchPost = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8001/posts/${id}`);
//         setTitle(response.data.post.title);
//         setBody(response.data.post.body);
//       } catch (error) {
//         console.error('Error fetching post:', error);
//       }
//     };

//     fetchPost();
//   }, [id]);

//   const handleUpdate = async () => {
//     try {
//       await axios.put(`http://localhost:8001/posts/${id}`, { title, body });
//       history.push('/'); // Redirect to main content page after update
//     } catch (error) {
//       console.error('Error updating post:', error);
//     }
//   };

//   return (
//     <div className="edit-post">
//       <h2 className="text-xl font-semibold mb-4">Edit Post</h2>
//       <div>
//         <label className="block text-gray-700">Title:</label>
//         <input
//           type="text"
//           className="border rounded w-full py-2 px-3 text-gray-700 mb-4"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//       </div>
//       <div>
//         <label className="block text-gray-700">Body:</label>
//         <textarea
//           className="border rounded w-full py-2 px-3 text-gray-700 mb-4"
//           value={body}
//           onChange={(e) => setBody(e.target.value)}
//         />
//       </div>
//       <button
//         onClick={handleUpdate}
//         className="bg-blue-500 text-white py-2 px-4 rounded"
//       >
//         Update
//       </button>
//     </div>
//   );
// };

// export default EditPost;
import React from 'react'

export default function EditPost() {
  return (
    <div>
      
    </div>
  )
}
