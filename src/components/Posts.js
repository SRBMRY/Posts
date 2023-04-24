import React, { useState, useEffect } from "react";
import axios from "axios";
import { Typography, Grid, Card, CardContent } from "@mui/material";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/posts');
                setPosts(response.data.posts);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <Grid container spacing={2} >
            {posts.map((post) => (
                <Grid item xs={12} md={6} lg={4} key={post.id}>
                    <Card sx={{ height: "100%", backgroundColor: "#EEEEEE" }}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                {post.title}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {post.body}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default Posts;