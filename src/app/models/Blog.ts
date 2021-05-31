export class Blog {
    id: number;
    title: string;
    userId: number;
    created: Date;
    posts: [
        {
            id: number;
            blogId: number;
            title: string;
            content: string;
            created: Date;
            comments: [
                {
                    id: number;
                    content: string;
                    postId: number;
                }
            ]
        }
    ]
}