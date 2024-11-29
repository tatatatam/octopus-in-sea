"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Card } from "../../components/card";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Modal } from "../../components/modal";
import { TextArea } from "../../components/text";
type PostProps = {
  _id: string;
  title: string;
  detail: string;
};
export default function Blog() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [isCreateModal, setIsCreateModal] = useState(false);
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  const onHandleCreateModal = () => {
    setIsCreateModal(!isCreateModal);
  };

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDetail = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDetail(e.target.value);
  };

  const onSubmit = () => {
    axios
      .post(
        "http://localhost:3000/posts",
        {
          title: title,
          detail: detail,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("access_token")}`,
          },
        }
      )
      .then((response) => {
        setPosts([...posts, response.data]);
        setIsCreateModal(false);
      });
  };

  return (
    <div className="grid grid-cols-1">
      <div className="mb-2 flex">
        <Button onClick={onHandleCreateModal} className="bg-blue-400 w-50 mt-4">
          Create
        </Button>
      </div>
      {isCreateModal && (
        <Modal>
          <div className="bg-white w-full mb-1">
            <h1 className="text-xl font-bold">Create Post</h1>
            <Input
              type="text"
              className="w-full mt-4"
              onChange={handleTitle}
              placeholder="Title"
            />
            <TextArea
              className="w-full mt-4"
              placeholder="Detail"
              onChange={handleDetail}
            />
            <div className="mt-4 flex justify-between">
              <Button className="bg-green-400 mr-1" onClick={onSubmit}>
                Create
              </Button>
              <Button onClick={onHandleCreateModal} className="bg-red-400">
                Cancel
              </Button>
            </div>
          </div>
        </Modal>
      )}
      {posts.map((post: PostProps) => (
        <Card
          id={post._id}
          key={post._id}
          title={post.title}
          detail={post.detail}
        />
      ))}
    </div>
  );
}
