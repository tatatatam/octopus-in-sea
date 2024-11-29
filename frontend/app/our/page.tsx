"use client";
// import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "../components/card";
import { Input } from "../components/input";
import { Select } from "../components/select";
import { Button } from "../components/button";
import { Modal } from "../components/modal";
import { TextArea } from "../components/text";
type PostProps = {
  id: string;
  title: string;
  detail: string;
};
export default function Blog() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [isCreateModal, setIsCreateModal] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);
  useEffect(() => {
    const mockPost = [
      {
        id: "1",
        title: "Post 1",
        detail: "Detail Post 1",
      },
      {
        id: "2",
        title: "Post 2",
        detail: "Detail Post 2",
      },
    ];
    setPosts(mockPost);
    // axios.get("https://localhost:3000/posts").then((response) => {
    //   setPosts(response.data);
    // });
  }, []);

  const onHandleCreateModal = () => {
    setIsCreateModal(!isCreateModal);
  };
  const onHandleEditModal = () => {
    setIsEditModal(!isEditModal);
  };

  return (
    <div className="grid grid-cols-1">
      <div className="mb-2 flex">
        <Input
          type="text"
          className="w-50 mt-4 w-[200px]"
          placeholder="Search"
        />{" "}
        <Select className="w-50 mt-4 w-[200px]">
          <option value="0">Comunity</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </Select>
        <Button onClick={onHandleCreateModal} className="w-50 mt-4">
          Search
        </Button>
      </div>
      {isCreateModal && (
        <Modal>
          <div className="bg-white w-full mb-1">
            <h1 className="text-xl font-bold">Create Post</h1>
            <Input type="text" className="w-full mt-4" placeholder="Title" />
            <TextArea className="w-full mt-4" placeholder="Detail" />
            <div className="mt-4 flex justify-between">
              <Button className="bg-green-400 mr-1">Create</Button>
              <Button onClick={onHandleCreateModal} className="bg-red-400">
                Cancel
              </Button>
            </div>
          </div>
        </Modal>
      )}
      {isEditModal && (
        <Modal>
          <div className="bg-white w-full mb-1">
            <h1 className="text-xl font-bold">Edit Post</h1>
            <Input type="text" className="w-full mt-4" placeholder="Title" />
            <TextArea className="w-full mt-4" placeholder="Detail" />
            <div className="mt-4 flex justify-between">
              <Button className="bg-green-400 mr-1">Edit</Button>
              <Button onClick={onHandleEditModal} className="bg-red-400">
                Cancel
              </Button>
            </div>
          </div>
        </Modal>
      )}
      {posts.map((post: PostProps) => (
        <Card
          id={post.id}
          key={post.id}
          title={post.title}
          detail={post.detail}
          onEdit={onHandleEditModal}
        />
      ))}
    </div>
  );
}
