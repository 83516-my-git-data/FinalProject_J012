import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

const BlogManagement = () => {
    const [blogs, setBlogs] = useState([]);
    const [newBlog, setNewBlog] = useState({ heading: '', information: '' });
    const [editBlog, setEditBlog] = useState(null);

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const response = await axios.get('http://localhost:8080/blogs/all');
            setBlogs(response.data);
        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
    };

    const handleAddBlog = async () => {
        try {
            await axios.post('http://localhost:8080/blogs/add', newBlog);
            Toastify({
                text: "Blog added successfully!",
                duration: 3000,
                gravity: "top",
                position: "right",
                backgroundColor: "#4CAF50"
            }).showToast();
            fetchBlogs();
            setNewBlog({ heading: '', information: '' });
        } catch (error) {
            console.error('Error adding blog:', error);
        }
    };

    const handleUpdateBlog = async () => {
        try {
            await axios.put(`http://localhost:8080/blogs/update/${editBlog.id}`, editBlog);
            Toastify({
                text: "Blog updated successfully!",
                duration: 3000,
                gravity: "top",
                position: "right",
                backgroundColor: "#4CAF50"
            }).showToast();
            fetchBlogs();
            setEditBlog(null);
        } catch (error) {
            console.error('Error updating blog:', error);
        }
    };

    const handleDeleteBlog = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/blogs/delete/${id}`);
            Toastify({
                text: "Blog deleted successfully!",
                duration: 3000,
                gravity: "top",
                position: "right",
                backgroundColor: "#F44336"
            }).showToast();
            fetchBlogs();
        } catch (error) {
            console.error('Error deleting blog:', error);
        }
    };

    return (
        <div>
            <h2>Blog Management</h2>
            <div>
                <h3>Add New Blog</h3>
                <input
                    type="text"
                    placeholder="Heading"
                    value={newBlog.heading}
                    onChange={(e) => setNewBlog({ ...newBlog, heading: e.target.value })}
                />
                <textarea
                    placeholder="Information"
                    value={newBlog.information}
                    onChange={(e) => setNewBlog({ ...newBlog, information: e.target.value })}
                />
                <button onClick={handleAddBlog}>Add Blog</button>
            </div>

            {editBlog && (
                <div>
                    <h3>Update Blog</h3>
                    <input
                        type="text"
                        placeholder="Heading"
                        value={editBlog.heading}
                        onChange={(e) => setEditBlog({ ...editBlog, heading: e.target.value })}
                    />
                    <textarea
                        placeholder="Information"
                        value={editBlog.information}
                        onChange={(e) => setEditBlog({ ...editBlog, information: e.target.value })}
                    />
                    <button onClick={handleUpdateBlog}>Update Blog</button>
                </div>
            )}

            <h3>All Blogs</h3>
            <ul>
                {blogs.map((blog) => (
                    <li key={blog.id}>
                        <h4>{blog.heading}</h4>
                        <p>{blog.information}</p>
                        <button onClick={() => setEditBlog(blog)}>Edit</button>
                        <button onClick={() => handleDeleteBlog(blog.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogManagement;
