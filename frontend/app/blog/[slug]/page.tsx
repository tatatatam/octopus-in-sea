"use client";
import { Button } from "@/app/components/button";
import { TextArea } from "@/app/components/text";
import { useEffect, useState } from "react";
type PostProps = {
  id: string;
  title: string;
  detail: string;
  comments: {
    id: string;
    comment: string;
    authorName: string;
  }[];
};
export default function PostSlug() {
  const [post, setPost] = useState<PostProps>();
  useEffect(() => {
    const mockPost = {
      id: "2",
      title: "Post 2",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
      comments: [
        {
          id: "1",
          comment: "Comment 1",
          authorName: "Author 2",
        },
        {
          id: "2",
          comment: "Comment 2",
          authorName: "Author 1",
        },
      ],
    };
    setPost(mockPost);
    // axios.get("https://localhost:3000/posts").then((response) => {
    //   setPosts(response.data);
    // });
  }, []);

  return (
    <div className="flex justify-center mt-10">
      <div className=" w-[375px]">
        <h1 className="text-bold">{post?.title}</h1>
        <p>{post?.detail}</p>
        <div className="w-[200px]">
          <TextArea className="w-full mt-4" placeholder="Comment" />
          <Button className="bg-green-400">Comment</Button>
        </div>
        <div className="w-[200px]">
          {post?.comments.map((comment) => (
            <div key={comment.id} className="block">
              <div className="mb-2 ">{comment.authorName}</div>
              {comment.comment}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
