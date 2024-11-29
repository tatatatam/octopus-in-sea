"use client";
import { useEffect, useState } from "react";
import { Card } from "../../components/card";
import { Input } from "../../components/input";
import { Select } from "../../components/select";
import { Button } from "../../components/button";
import { Modal } from "../../components/modal";
import { TextArea } from "../../components/text";
import axios from "axios";
import Cookies from "js-cookie";
type PostProps = {
  _id: string;
  title: string;
  detail: string;
};
export default function Blog() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [isCreateModal, setIsCreateModal] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [id, setId] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:3000/posts/me", {
        headers: {
          Authorization: "Bearer " + Cookies.get("access_token"),
        },
      })
      .then((response) => {
        setPosts(response.data);
      });
  }, []);

  const onHandleCreateModal = () => {
    setIsCreateModal(!isCreateModal);
  };
  const onHandleEditModal = ({ _id, title, detail }: PostProps) => {
    console.log({
      _id,
      title,
      detail,
    });
    setIsEditModal(!isEditModal);
    setTitle(title);
    setDetail(detail);
    setId(_id);
  };

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDetail = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDetail(e.target.value);
  };

  const handleEdit = () => {
    axios
      .put(
        `http://localhost:3000/posts/${id}`,
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
        window.location.reload();
      });
  };
  return (
    <div className="grid grid-cols-1">
      <div className="mb-2 flex">
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
            <Input
              type="text"
              className="w-full mt-4"
              placeholder="Title"
              value={title}
              onChange={handleTitle}
            />
            <TextArea
              className="w-full mt-4"
              placeholder="Detail"
              value={detail}
              onChange={handleDetail}
            />
            <div className="mt-4 flex justify-between">
              <Button className="bg-green-400 mr-1" onClick={handleEdit}>
                Edit
              </Button>
              <Button
                onClick={() => setIsEditModal(false)}
                className="bg-red-400"
              >
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
          onEdit={(id) =>
            onHandleEditModal({
              _id: post._id,
              title: post.title,
              detail: post.detail,
            })
          }
        />
      ))}
    </div>
  );
}
