"use client";
import { Button } from "@/app/components/button";
import { TextArea } from "@/app/components/text";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
type PostProps = {
  id: string;
  title: string;
  detail: string;
  comments: {
    id: string;
    detail: string;
    authorId: string;
  }[];
};
export default function PostSlug() {
  const [post, setPost] = useState<PostProps>();
  const params = useParams();
  const [comment, setComment] = useState("");

  useEffect(() => {
    const { slug } = params;
    axios
      .get(`http://localhost:3000/posts/${slug}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("access_token")}`,
        },
      })
      .then((response) => {
        setPost(response.data);
      });
  }, []);

  const handleComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    const { slug } = params;
    axios
      .post(
        `http://localhost:3000/comments`,
        {
          detail: comment,
          postId: slug,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("access_token")}`,
          },
        }
      )
      .then((response) => {
        window.location.reload();
      });
  };
  return (
    <div className="flex justify-center mt-10">
      <div className=" w-[375px]">
        <h1 className="text-bold">{post?.title}</h1>
        <p>{post?.detail}</p>
        <div className="w-[200px]">
          <TextArea
            className="w-full mt-4"
            placeholder="Comment"
            value={comment}
            onChange={handleComment}
          />
          <Button className="bg-green-400" onClick={handleCommentSubmit}>
            Comment
          </Button>
        </div>

        <div className="w-[200px]">
          <hr className="mt-4" />
          {post?.comments.map((comment) => (
            <div key={comment.id} className="block">
              <div className="mb-2 "></div>
              {comment.detail}
              <hr className="mt-4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
