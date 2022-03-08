import { Comment } from '../models/Comment';
const newDate = new Date();

export class Post {
    id: number;
    title: string;
    content: string;
    created: Date;
    modified: string;
    blogId: number;
    comments: Comment[];

    constructor(id:number, title: string, content: string, created: Date, blogId: number) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.modified = newDate.toISOString();
        this.blogId = blogId;
        this.comments = [];
    }
}