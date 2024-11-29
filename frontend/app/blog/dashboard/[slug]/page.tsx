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
    comment: string;
    authorName: string;
  }[];
};
export default function PostSlug() {
  const [post, setPost] = useState<PostProps>();
  const params = useParams();
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
