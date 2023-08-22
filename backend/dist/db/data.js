const tweets = [
    {
        id: "1",
        body: "First tweet! This is a longer sentence that... This is an additional line of text. This is another line. And here's one more line for good measure.",
        date: new Date("2023-06-20"),
        Author: { id: "1" },
        Stats: { views: 10, likes: 5, retweets: 2, responses: 3 },
        markAsRead: false,
    },
    {
        id: "2",
        body: "Hello, GraphQL! This is another longer sentence... Here's an extra line. And another line. One more line. And the final line.",
        date: new Date("2023-06-21"),
        Author: { id: "2" },
        Stats: { views: 20, likes: 10, retweets: 5, responses: 8 },
        markAsRead: false,
    },
    {
        id: "3",
        body: "Having a great day! This is a third longer sentence... Line number two. Line number three. Line number four. Line number five!",
        date: new Date("2023-06-22"),
        Author: { id: "1" },
        Stats: { views: 15, likes: 7, retweets: 3, responses: 2 },
        markAsRead: false,
    },
    {
        id: "4",
        body: "Excited for the weekend! This is a fourth longer sentence... Extra line. Another line. Yet another line. One more line. The final line!",
        date: new Date("2023-06-22"),
        Author: { id: "2" },
        Stats: { views: 8, likes: 3, retweets: 1, responses: 0 },
        markAsRead: false,
    },
];
const users = [
    {
        id: "1",
        username: "dev.madhurendra",
        first_name: "Madhurendra Nath",
        last_name: "Tiwari",
        full_name: "Madhurendra Nath Tiwari",
        avatar_url: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
    },
    {
        id: "2",
        username: "john.doe",
        first_name: "John",
        last_name: "Doe",
        full_name: "John Doe",
        avatar_url: "https://www.seekpng.com/png/full/356-3562377_personal-user.png",
    },
    {
        id: "3",
        username: "adi.john",
        first_name: "Adi",
        last_name: "John",
        full_name: "Adi John",
        avatar_url: "https://www.kindpng.com/picc/m/780-7804962_cartoon-avatar-png-image-transparent-avatar-user-image.png",
    },
];
const notifications = [
    {
        id: "1",
        date: new Date("2023-06-20"),
        type: "message",
    },
    {
        id: "3",
        date: new Date("2023-06-21"),
        type: "like",
    },
];
export const credentials = [
    {
        id: "1",
        email: "dev.madhurendra123@gmail.com",
        password: "Dev@123",
    },
    {
        id: "2",
        email: "more.somnath123@gmail.com",
        password: "More@123"
    },
    {
        id: "3",
        email: "adi123@gmail.com",
        password: "Adi@123"
    }
];
export const db = {
    tweets,
    users,
    notifications,
    credentials,
};
