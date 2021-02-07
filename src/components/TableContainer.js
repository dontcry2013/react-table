import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Input, Modal } from 'antd';
import { userColumns } from "../columns/userColumns";
import { fetchUsers } from "../redux/user";
import { fetchPosts } from "../redux/post";
import PostsTable from '../components/PostsTable';

const { Search } = Input;

export default () => {
  const dispatch = useDispatch();
  const tableState = useSelector((state) => state.user);
  const postSelected = useSelector((state) => state.post);
  const [searchVal, setSearchVal] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [searchIndex, setSearchIndex] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [postState, setPostState] = useState({ loading: false, posts: [] });

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  
  useEffect(() => {
    setPostState(postSelected);
  }, [postSelected]);

  useEffect(() => {
    const crawl = (user, allValues) => {
      if (!allValues) allValues = [];
      for (var key in user) {
        if (typeof user[key] === "object") crawl(user[key], allValues);
        else allValues.push(user[key] + " ");
      }
      return allValues;
    };
    const handleData = () => {
      setFilteredData(tableState.users);
      const searchInd = tableState.users.map(user => {
        const allValues = crawl(user);
        return { allValues: allValues.toString() };
      });
      setSearchIndex(searchInd);
    };
    handleData();
  }, [tableState]);

  useEffect(() => {
    if (searchVal) {
      const reqData = searchIndex.map((user, index) => {
        if (user.allValues.toLowerCase().indexOf(searchVal.toLowerCase()) >= 0)
          return tableState.users[index];
        return null;
      });
      setFilteredData(
        reqData.filter(user => {
          if (user) return true;
          return false;
        })
      );
    } else {
      setFilteredData(tableState.users);
    }
  }, [searchVal, tableState]);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Search
        onChange={(e) => setSearchVal(e.target.value)}
        placeholder="Search"
        enterButton
        style={{
          position: "sticky",
          top: "0",
          left: "0",
          width: "200px",
          marginTop: "2vh"
        }}
      />
      <br /> <br />
      <Table
        rowKey="name"
        dataSource={filteredData}
        columns={userColumns}
        loading={tableState.loading}
        pagination={false}
        onRow={(record, rowIndex) => {
          return {
            onClick: event => {
              setPostState({
                ...postState,
                loading: true
              });
              setIsModalVisible(true);
              dispatch(fetchPosts(record.id));
            },
          };
        }}
      />

      <Modal title="Posts" width={1000} centered visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <PostsTable data={postState.posts} loading={postState.loading} />
      </Modal>
    </>
  )
}