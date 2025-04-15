import express from 'express';
import cors from 'cors';
const app = express();

app.use(cors())

const users = [
    {
        "name" : "Arsh",
        "id" : 1,
        "image": "https://picsum.photos/seed/arsh/200", // Random image
        "posts" : [
            {
                "postId" : 1,
                "number_of_comments" : 20,
                "date_of_creation" :  {
                    "time" : "16:00",
                    "date" : 12,
                    "month" : 2,
                    "year" : 2022
                }
            }
        ]
    },
    {
        "name" : "Harry",
        "id" : 2,
        "image": "https://picsum.photos/seed/harry/200", // Random image
        "posts" : [
            {
                "postId" : 2,
                "number_of_comments" : 10,
                "date_of_creation" :  {
                    "time" : "6:00",
                    "date" : 19,
                    "month" : 12,
                    "year" : 2022
                }
            },
            {
                "postId" : 3,
                "number_of_comments" : 8,
                "date_of_creation" :  {
                    "time" : "7:00",
                    "date" : 21,
                    "month" : 5,
                    "year" : 2023
                }
            }
        ]
    },
    {
        "name" : "David",
        "id" : 3,
        "image": "https://picsum.photos/seed/david/200", // Random image
        "posts" : [
            {
                "postId" : 4,
                "number_of_comments" : 120,
                "date_of_creation" :  {
                    "time" : "10:00",
                    "date" : 28,
                    "month" : 3,
                    "year" : 2025
                }
            }
        ]
    },
    {
        "name" : "Taylor",
        "id" : 4,
        "image": "https://picsum.photos/seed/taylor/200", // Random image
        "posts" : [
            {
                "postId" : 5,
                "number_of_comments" : 820,
                "date_of_creation" :  {
                    "time" : "16:00",
                    "date" : 12,
                    "month" : 2,
                    "year" : 2024
                }
            },
            {
                "postId" : 6,
                "number_of_comments" : 900,
                "date_of_creation" :  {
                    "time" : "9:00",
                    "date" : 12,
                    "month" : 12,
                    "year" : 2024
                }
            },
            {
                "postId" : 7,
                "number_of_comments" : 420,
                "date_of_creation" :  {
                    "time" : "8:00",
                    "date" : 12,
                    "month" : 2,
                    "year" : 2025
                }
            }
        ]
    },
    {
        "name" : "Xavier",
        "id" : 5,
        "image": "https://picsum.photos/seed/xavier/200", // Random image
        "posts" : [
            {
                "postId" : 8,
                "number_of_comments" : 290,
                "date_of_creation" :  {
                    "time" : "8:00",
                    "date" : 12,
                    "month" : 12,
                    "year" : 2022
                }
            }
        ]
    },
    {
        "name" : "Joe",
        "id" : 6,
        "image": "https://picsum.photos/seed/joe/200", // Random image
        "posts" : [
            {
                "postId" : 9,
                "number_of_comments" : 320,
                "date_of_creation" :  {
                    "time" : "16:00",
                    "date" : 12,
                    "month" : 12,
                    "year" : 2021
                }
            }
        ]
    },
    {
        "name" : "Divij",
        "id" : 7,
        "image": "https://picsum.photos/seed/divij/200", // Random image
        "posts" : [
            {
                "postId" : 10,
                "number_of_comments" : 8720,
                "date_of_creation" :  {
                    "time" : "7:00",
                    "date" : 12,
                    "month" : 8,
                    "year" : 2021
                }
            }
        ]
    }
];


app.get('/posts',(req,res) => {
    
    
    res.json(users);
})


app.get('/top_users', (req, res) => {
    const arr = [];
    users.map((user) => {
        arr.push({
            "id": user.id,
            "name": user.name,
            "number_of_posts": user.posts.length
        });
    });

    // Sort the array in descending order of number_of_posts
    arr.sort((a, b) => b.number_of_posts - a.number_of_posts);

    // Get the top 5 users
    const topUsers = arr.slice(0, 5);

    console.log("Top 5 users: ", topUsers);

    // Send the top 5 users as a response
    res.json(topUsers);
});

app.get('/feed', (req, res) => {
    const allPosts = [];

    // Collect all posts from all users
    users.forEach(user => {
        user.posts.forEach(post => {
            allPosts.push({
                postId: post.postId,
                number_of_comments: post.number_of_comments,
                userId: user.id,
                userName: user.name,
                date_of_creation: post.date_of_creation
            });
        });
    });

    // Sort posts by date_of_creation in descending order
    allPosts.sort((a, b) => {
        const dateA = new Date(`${a.date_of_creation.year}-${a.date_of_creation.month}-${a.date_of_creation.date}T${a.date_of_creation.time}`);
        const dateB = new Date(`${b.date_of_creation.year}-${b.date_of_creation.month}-${b.date_of_creation.date}T${b.date_of_creation.time}`);
        return dateB - dateA;
    });

    // Send the sorted posts as a response
    res.json(allPosts);
});

app.get('/trending_posts', (req, res) => {
    const allPosts = [];

    // Collect all posts from all users
    users.forEach(user => {
        user.posts.forEach(post => {
            allPosts.push({
                postId: post.postId,
                number_of_comments: post.number_of_comments,
                userId: user.id,
                userName: user.name
            });
        });
    });

    // Sort posts by number_of_comments in descending order
    allPosts.sort((a, b) => b.number_of_comments - a.number_of_comments);

    // Send the sorted posts as a response
    res.json(allPosts);
});

app.listen(8080,((e)=>{
    if(e)
    {
        console.log('server did not start');
        
    }
    else{
        console.log('server started at port 8080');
        
    }
}))